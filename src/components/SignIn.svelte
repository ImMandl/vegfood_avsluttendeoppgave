<script>
  import Categories from "./Categories.svelte";
  import Search from "./search.svelte";
  import RecipeTileRandom from "./RecipeTileRandom.svelte";
  export let segment;

  let SignInImage = "images/signinimage.jpg";

  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import { onMount } from "svelte";
  import { authState } from "rxfire/auth";
  let db; // ref til firestore
  let auth; // authentication
  let googleProvider; // Google innlogging
  let loginGoogle; // logg inn med google
  let createUser; // lag vanlig bruker
  let loginUser; // logg inn med vanlig bruker
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

    createUser = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    };

    loginUser = () => {
      auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
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

  /* image on left */
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

  /* regular sign in form */
  .logginn-grid {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  .logginn-grid h2 {
    margin-bottom: 48px;
  }

  .form-container {
    justify-self: center;
  }

  .form-container :global(.svelte-tabs li.svelte-tabs__selected) {
    border-bottom: 2px solid #3da839;
    color: #333;
  }

  .form {
    display: flex;
    flex-direction: column;
    min-width: 300px;
  }

  .form .row {
    width: 100%;
    align-items: center;
  }

  /* form input fields */
  .input-group {
    border: 1px solid #333;
    border-radius: 12px;
    margin: 8px 0;
  }

  .input-group span {
    background-color: #f7f7f7;
    border-right: 1px solid #333;
    padding: 8px 12px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  .form input {
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100%;
    margin: 0;
    padding: 8px;
  }

  /* form buttons */
  .form .btn-row {
    margin-top: 8px;
  }

  .form .btn-positive {
    background-color: #3da839;
    border: none;
    border-radius: 18px;
    padding: 8px 32px;
    color: #fff;
    font-weight: 500;
    margin-right: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }

  .form .btn-positive:hover {
    background-color: #258d22;
    cursor: pointer;
  }

  .form .btn-negative {
    background-color: #4e4e4e;
    border: none;
    border-radius: 18px;
    padding: 8px 32px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }

  .form .btn-negative:hover {
    background-color: #2e2e2e;
    cursor: pointer;
  }

  /* other sign in methods */
  .other-signins {
    margin: 0 0 32px;
    justify-self: center;
  }

  /* google sign in button */
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
</style>

{#if user}

  <Search />

  <Categories {segment} />

  <div class="oppskrift-rad">
    <h3>Nyeste oppskrifter</h3>
    <RecipeTileRandom />
  </div>
{:else}

  <div class="container">
    <div class="grid">
      <div class="sign-in-image">
        <img src={SignInImage} alt="" />
      </div>
      <div class="logginn-grid">
        <div class="form-container">
          <h2>Velkommen til VegFood!</h2>
          <Tabs>
            <TabList>
              <Tab>Logg inn</Tab>
              <Tab>Registrer</Tab>
            </TabList>

            <TabPanel>
              <form on:submit={loginUser} class="form">
                <div class="row input-group">
                  <span>Email:</span>
                  <input required type="text" name="email" id="email" />
                </div>
                <div class="row input-group">
                  <span>Password:</span>
                  <input required type="password" name="passord" id="passord" />
                </div>
                <div class="row btn-row">
                  <button class="btn-positive">Logg på</button>
                  <a
                    aria-current={segment === undefined ? 'page' : undefined}
                    href="."
                    class="btn-negative">
                    Gå tilbake
                  </a>
                </div>
              </form>
            </TabPanel>

            <TabPanel>
              <form on:submit={createUser} class="form">
                <div class="row input-group">
                  <span>Email:</span>
                  <input required type="text" name="email" id="email" />
                </div>
                <div class="row input-group">
                  <span>Password:</span>
                  <input required type="password" name="passord" id="passord" />
                </div>
                <div class="row btn-row">
                  <button class="btn-positive">Registrer</button>
                  <a
                    aria-current={segment === undefined ? 'page' : undefined}
                    href="."
                    class="btn-negative">
                    Gå tilbake
                  </a>
                </div>
              </form>
            </TabPanel>

          </Tabs>
        </div>
        <div class="other-signins">
          <h3>Eller logg på med:</h3>
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
