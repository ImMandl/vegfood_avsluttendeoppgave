<script>
  export let segment;
  import { onMount } from "svelte";
  import { authState } from "rxfire/auth";
  let db; // ref til firestore
  let auth; // authentication
  let googleProvider; // Google innlogging
  let login; // logg inn
  let logout; // logg ut
  let showUserMenu = false; // viser ikke logout automatisk
  let toggleUserMenu; // viser logout etter trykt profilnavn
  let user; // bruker
  let unsubscribe;

  onMount(() => {
    db = firebase.firestore();
    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();

    login = () => {
      auth.signInWithPopup(googleProvider);
    };

    logout = () => {
      auth.signOut();
    };

    unsubscribe = authState(auth).subscribe(u => (user = u));
  });

  import { favorittArray } from "../store.js";

  const fjernFavoritt = () => {
    $favorittArray.splice(favorittArray);
    alert("Denne oppskrifter har blitt fjernet fra dine favoritter!");
    console.log(favorittArray);
  };
</script>

<style>
  .favoritt-table {
    border-collapse: collapse;
    width: 100%;
  }

  .favoritt-table td,
  .favoritt-table th {
    border: none;
    text-align: left;
  }

  .favoritt-table td {
    border-bottom: 1px solid #d1d1d1;
    padding: 16px 8px;
  }

  .favoritt-table th {
    padding: 0 8px 16px;
    background-color: transparent;
  }

  .container {
    padding-bottom: 0;
    overflow-x: auto;
  }

  .handlinger a {
    margin-right: 8px;
  }

  .handlinger a,
  .handlinger button {
    font-weight: 400;
    background-color: #d1d1d1;
    border: none;
    border-radius: 16px;
    font-size: 12px;
    color: #333;
    padding: 4px 16px;
    font-family: "Montserrat", sans-serif;
  }
  .handlinger a:hover,
  .handlinger button:hover {
    background-color: #b8b8b8;
  }
</style>

<h2>Mine favoritter</h2>
<div class="container">
  <table class="favoritt-table">
    {#if user}
      {#if $favorittArray.length === 0}
        <tr>
          <th style="font-weight: 400;">
            Ser ut som du ikke har noen favoritter.
            <a
              style="text-decoration: underline;"
              aria-current={segment === 'recipe' ? 'page' : undefined}
              href="recipe">
              Utforsk
            </a>
            vårt store bibliotek med oppskrifter og finn en favoritt!
          </th>
        </tr>
      {:else}
        <tr>
          <th>Oppskrift</th>
          <th>Kategori</th>
          <th>Grad</th>
          <th>Forfatter</th>
          <th>Handlinger</th>
        </tr>
        {#each $favorittArray as favoritt}
          <tr>
            <td>{favoritt.title}</td>
            <td>{favoritt.kategori}</td>
            <td>{favoritt.grad}</td>
            <td>{favoritt.forfatter}</td>
            <td class="handlinger">
              <a rel="prefetch" href="recipe/{favoritt.slug}">Gå til</a>
              <button on:click={fjernFavoritt}>Slett</button>
            </td>
          </tr>
        {/each}
      {/if}
    {:else}
      <h2>logg inn for å se informasjon om din bruker</h2>
    {/if}
  </table>
</div>
