<script>
  export let segment;
  let logo = "graphics/horizontal-logo.svg";
  let logoIcon = "graphics/logo-icon.svg";
  let searchIcon = "graphics/icons-search.svg";
  let accountIcon = "graphics/icons-account.svg";
  let dropdownArrow = "graphics/icons-dropdown-arrow.svg";
  let recipeIcon = "graphics/recipe.svg";
  let newsIcon = "graphics/newspaper.svg";

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

    toggleUserMenu = () => {
      showUserMenu = !showUserMenu;
    };

    unsubscribe = authState(auth).subscribe(u => (user = u));
  });
</script>

<style>
  .wrapper {
    width: 100%;
    background-color: white;
    margin-bottom: 48px;
    box-shadow: 0px 0px 4px 0px rgba(209, 209, 209, 1);
    z-index: 90;
  }
  nav {
    font-weight: 600;
    padding: 0 64px;
    margin: 0 auto;
    max-width: 1440px;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    padding: 16px 8px;
    display: block;
  }

  a:hover {
    color: #555;
  }

  .nav-ikon {
    height: 28px;
  }

  .logo-link a {
    padding-right: 8px;
  }

  .logo-container {
    height: 42px;
  }

  .logo {
    height: 100%;
  }

  .right {
    margin-left: auto;
  }

  /* LOGG INN */
  .logginn {
    background-color: #3da839;
    border: none;
    border-radius: 16px;
    padding: 8px 32px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-left: 8px;
  }

  .logginn:hover {
    background-color: #258d22;
    cursor: pointer;
  }

  .loggut {
    background-color: #fff;
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .loggut:hover {
    cursor: pointer;
  }

  .loggut img {
    margin: 0 8px;
  }

  .bruker-link {
    font-size: 16px;
    background-color: #f9f9f9;
    padding: 8px;
    border: none;
    text-align: left;
  }

  .bruker-link:hover {
    cursor: pointer;
  }

  /* BRUKERMENY */
  .bruker-wrapper {
    position: relative;
  }

  .brukermeny {
    position: absolute;
    z-index: 99;
    width: 100%;
    margin-top: 4px;
    padding: 8px 8px 12px 8px;
    background-color: #fff;
    box-shadow: 0px 0px 20px 0px rgba(209, 209, 209, 1);
  }

  .brukermeny a {
    padding: 8px 4px;
    font-size: 14px;
  }

  .brukermeny button {
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    padding: 8px 4px;
  }

  @media only screen and (max-width: 1024px) {
    nav {
      padding: 0 32px;
    }
  }

  @media only screen and (max-width: 768px) {
    nav {
      padding: 0 16px;
    }
  }

  @media only screen and (max-width: 375px) {
    nav {
      padding: 0 16px;
    }
  }
</style>

<div class="wrapper">
  <nav>
    <ul>
      <li class="logo-link">
        <a
          class="logo-container "
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">
          <img class="logo" src={logo} alt="Vegfood logo" />
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'recipe' ? 'page' : undefined}
          href="recipe">
          Oppskrifter
          <img class="nav-ikon" src={recipeIcon} alt="recipe icon" />
        </a>
      </li>
      <!-- Right side of navbar -->
      <li class="bruker-wrapper right">
        {#if user}
          <!-- når bruker er logget inn -->
          <div>
            <button class="loggut" on:click={toggleUserMenu}>
              <img class="nav-ikon" src={accountIcon} alt="account icon" />
              {user.displayName}
              <img src={dropdownArrow} alt="dropdown arrow" />
            </button>
            <!-- Viser bruker meny / toggleUserMenu -->
            {#if showUserMenu}
              <div class="brukermeny">
                <a
                  aria-current={segment === 'minbruker' ? 'page' : undefined}
                  href="minbruker"
                  on:click={toggleUserMenu}>
                  Min bruker
                </a>
                <a
                  aria-current={segment === 'favoritter' ? 'page' : undefined}
                  href="favoritter"
                  on:click={toggleUserMenu}>
                  Mine favoritter
                </a>
                <hr />
                <button class="bruker-link" on:click={logout}>Logg ut</button>
              </div>
            {/if}
          </div>
        {:else}
          <!-- Når bruker ikke er logget inn -->
          <button class="logginn" on:click={login}>Logg inn</button>
        {/if}
      </li>
    </ul>
  </nav>
</div>
