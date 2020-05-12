<script>
  import Categories from "./Categories.svelte";
  import Search from "./search.svelte";
  import RecipeTileNewest from "../components/RecipeTileNewest.svelte";
  export let segment;

  let SignInImage = "images/signinimage.jpg";

  import { onMount } from "svelte";
  import { authState } from "rxfire/auth";
  let db; // ref til firestore
  let auth; // authentication
  let googleProvider; // Google innlogging
  let loginGoogle; // logg inn med google
  let showUserMenu = false; // viser ikke logout automatisk
  let toggleUserMenu; // viser logout etter trykt profilnavn
  let user; // bruker
  let unsubscribe;

  onMount(() => {
    db = firebase.firestore();
    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();

    loginGoogle = () => {
      auth.signInWithPopup(googleProvider);
    };

    toggleUserMenu = () => {
      showUserMenu = !showUserMenu;
    };

    unsubscribe = authState(auth).subscribe(u => (user = u));
  });
</script>

<style>
  .oppskrift-rad {
    margin-bottom: 32px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  /* bilde på venstre */
  .sign-in-image {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    overflow: hidden;
  }

  .sign-in-image img {
    width: 100%;
    height: 100%;
  }

  /* høyre side */
  .logginn-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .logginn-grid h2 {
    margin-bottom: 48px;
    text-align: center;
  }

  /* google logg inn btn */
  .google-btn {
    width: 184px;
    height: 42px;
    background-color: #4285f4;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  }

  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #fff;
  }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 11px 11px 0 0;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }

  .google-btn:hover {
    box-shadow: 0 0 6px #4285f4;
    cursor: pointer;
  }
  .google-btn:active {
    background: #1669f2;
  }
  .justify {
    justify-self: center;
  }

  @media only screen and (max-width: 768px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr;
    }

    .sign-in-image {
      width: 100%;
      max-height: 200px;
      margin-bottom: 32px;
    }
  }
</style>

{#if user}

  <Search />

  <Categories {segment} />

  <div class="oppskrift-rad">
    <RecipeTileNewest />
  </div>
{:else}

  <div class="container">
    <div class="grid">
      <div class="sign-in-image">
        <img src={SignInImage} alt="" />
      </div>
      <div class="logginn-grid">
        <h2>Velkommen til VegFood!</h2>
        <div class="justify">
          <h3>logg på med:</h3>
          <div on:click={loginGoogle} class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google logo" />
            </div>
            <p class="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
