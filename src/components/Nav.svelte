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
  import recipes from "../routes/recipe/_recipes.js";
  let db; // ref til firestore
  let auth; // authentication
  let logout; // logg ut
  let showUserMenu = false; // viser ikke logout automatisk
  let toggleUserMenu; // viser logout etter trykt profilnavn
  let user; // bruker
  let unsubscribe;

  onMount(() => {
    db = firebase.firestore();
    auth = firebase.auth();

    logout = () => {
      auth.signOut();
    };

    toggleUserMenu = () => {
      showUserMenu = !showUserMenu;
    };

    unsubscribe = authState(auth).subscribe(u => (user = u));
  });

  let searchQuery = "";

  let sourceList = [];
  $: searches = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<style>
  .wrapper {
    width: 100%;
    background-color: white;
    margin-bottom: 48px;
    box-shadow: 0px 0px 4px 0px rgba(209, 209, 209, 1);
    z-index: 90;
    padding: 12px 0 4px;
  }
  nav {
    padding: 0 64px;
    margin: 0 auto;
    max-width: 1440px;
    font-weight: 500;
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
    padding: 8px 4px;
    display: block;
  }

  a:hover {
    color: #555;
  }

  /* header */

  .header {
    background-color: #fff;
    width: 100%;
    z-index: 3;
  }

  .nav-ikon {
    height: 28px;
  }

  .logo-container {
    height: 42px;
    display: inline-block;
  }

  .logo {
    height: 100%;
  }

  .right {
    margin-left: auto;
  }

  /* meny */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .nav-link {
    display: flex;
    align-items: center;
  }

  .nav-link img {
    padding-right: 4px;
  }

  /* meny ikon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    margin: 12px 0 0 0;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* meny btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 240px;
    overflow: initial;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* logg inn */
  .logginn {
    background-color: #3da839;
    border: none;
    border-radius: 18px;
    padding: 8px 32px;
    color: #fff;
    font-size: 16px;
    margin-left: 8px;
  }

  .logginn:hover {
    background-color: #258d22;
    cursor: pointer;
    color: white;
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

  /* brukermeny */
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
    margin: 0 !important;
  }

  .brukermeny button {
    background-color: transparent;
    width: 100%;
    font-size: 14px;
    padding: 8px 4px;
    font-weight: 500 !important;
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

    .header ul {
      overflow: hidden;
    }

    .brukermeny {
      position: absolute;
    }
  }

  @media only screen and (max-width: 425px) {
    .menu {
      display: flex;
      flex-direction: column;
    }

    .menu li a {
      margin-bottom: 12px;
    }

    .loggut {
      margin-bottom: 12px;
    }

    .right {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 375px) {
    nav {
      padding: 0 16px;
    }
  }

  @media (min-width: 768px) {
    .menu {
      margin-top: 8px;
    }

    .header li {
      float: left;
    }

    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
</style>

<header class="wrapper">
  <nav>
    <div class="header">
      <a
        class="logo-container "
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        <img class="logo" src={logo} alt="Vegfood logo" />
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon" />
      </label>
      <ul class="menu">
        <li class="right">
          <a
            class="nav-link"
            aria-current={segment === 'recipe' ? 'page' : undefined}
            href="recipe">
            <img
              style="height: 30px"
              class="nav-ikon"
              src={recipeIcon}
              alt="recipe icon" />
            Oppskrifter
          </a>
        </li>
        <li class="bruker-wrapper">
          {#if user}
            <!-- når bruker er logget inn -->
            <div>
              <div class="loggut" on:click={toggleUserMenu}>
                <img
                  style="height: 32px"
                  class="nav-ikon"
                  src={accountIcon}
                  alt="account icon" />
                <p>{user.displayName}</p>
                <img src={dropdownArrow} alt="dropdown arrow" />
              </div>
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
            <a
              class="logginn"
              aria-current={segment === 'logginn' ? 'page' : undefined}
              href="logginn">
              Logg inn
            </a>
          {/if}
        </li>
      </ul>
    </div>
  </nav>
</header>
