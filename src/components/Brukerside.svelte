<script>
  import { onMount } from "svelte";
  import { authState } from "rxfire/auth";
  export let segment;

  let db; // ref til firestore
  let auth; // authentication
  let googleProvider; // Google innlogging
  let login; // logg inn
  let logout; // logg ut
  let showUserMenu = false; // viser ikke logout automatisk
  let toggleUserMenu; // viser logout etter trykt profilnavn
  let user; // bruker
  let unsubscribe;
  let nyhetsbrev; // ref til collection i firestore
  let slettNyhetsbrev; // avmelder bruker fra nyhetsbrev / sletter brukerens mail fra nyhetsbrev databasen
  let registrerEpost; // melder bruker på nyhetsbrev / legger brukerens mail til i nyhetsbrev databasen
  let nyhetsbrevArray = []; // inneholder mail fra nyhetsbrev

  onMount(() => {
    db = firebase.firestore();
    nyhetsbrev = db.collection("nyhetsbrev");

    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();

    login = () => {
      auth.signInWithPopup(googleProvider);
    };

    logout = () => {
      auth.signOut();
    };

    unsubscribe = authState(auth).subscribe(u => (user = u));

    // sletter mail fra databsaen
    slettNyhetsbrev = () => {
      nyhetsbrev.doc(user.email).delete();
      alert("Du er nå avmeldt vårt ukentlige nyhetsbrev");
    };

    nyhetsbrev.onSnapshot(snap => {
      nyhetsbrevArray = snap.docs;
      nyhetsbrevArray.includes(user.email);
    });
  });
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
  }

  .divider {
    height: 100%;
    width: 1px;
    background-color: #d1d1d1;
    justify-self: center;
  }

  h3 {
    padding-bottom: 12px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .row p {
    margin-bottom: 8px;
  }

  .right {
    margin-left: auto;
  }

  button {
    background-color: #d1d1d1;
    border: none;
    border-radius: 18px;
    padding: 6px 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-top: 8px;
  }

  button:hover {
    cursor: pointer;
    background-color: #9e9e9e;
  }

  @media only screen and (max-width: 1024px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr;
    }

    .divider {
      height: 1px;
      width: 100%;
      margin: 24px 0;
    }
  }
</style>

<h2>Min bruker</h2>
<div class="container">
  {#if user}
    <div class="grid">
      <div class="section">
        <h3>Kontaktinformasjon</h3>
        <div class="row">
          <p>Bruker:</p>
          <p class="right">{user.displayName}</p>
        </div>
        <div class="row">
          <p>Epost:</p>
          <p class="right">{user.email}</p>
        </div>
      </div>
      <div class="divider" />
      <div class="section">
        <h3>Nyhetsbrev</h3>
        {#each nyhetsbrevArray as nyhetsbrev}
          {#if nyhetsbrev.data().mail === user.email}
            <p>Du er meldt på vårt ukentlige nyhetsbrev</p>
            <button on:click={slettNyhetsbrev}>Meld meg av</button>
          {:else}
            <p>Du har ikke abonnert på et nyhetsbrev enda</p>
          {/if}
        {/each}
      </div>
    </div>
  {:else}
    <h2>
      <a
        style="text-decoration: underline;"
        class="logginn"
        aria-current={segment === 'logginn' ? 'page' : undefined}
        href="logginn">
        Logg inn
      </a>
      for å se informasjon om din bruker
    </h2>
  {/if}
</div>
