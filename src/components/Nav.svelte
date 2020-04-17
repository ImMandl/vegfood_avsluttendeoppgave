<script>
  export let segment;
  let logo = "graphics/horizontal-logo.svg";
  let searchIcon = "graphics/icons-search.svg";
  let accountIcon = "graphics/icons-account.svg";
  let dropdownArrow = "graphics/icons-dropdown-arrow.svg";
  let recipeIcon = "graphics/recipe.svg";
  let newsIcon = "graphics/newspaper.svg";

  let user = { loggedIn: false };

  const toggle = () => {
    user.loggedIn = !user.loggedIn;
  };
</script>

<style>
  nav {
    font-weight: 600;
    padding: 0 32px;
    margin: 0 auto;
    max-width: 1440px;
    font-family: "Montserrat", sans-serif;
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
    border-radius: 18px;
    padding: 8px 32px;
    color: white;
    font-size: 16px;
    font-weight: 400;
  }

  .logginn:hover {
    background-color: #258d22;
    color: white;
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

  /* SEARCH BAR */
  .search-container {
    position: relative;
  }

  .search-container img {
    position: absolute;
    left: 0;
    padding: 9px 8px 9px 16px;
  }

  input {
    padding: 8px 20px 8px 32px;
    margin: 0 8px;
    width: 95%;
  }

  /* DROPDOWN  */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
  }
</style>

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
        aria-current={segment === 'oppskrifter' ? 'page' : undefined}
        href="oppskrifter">
        Oppskrifter
        <img class="nav-ikon" src={recipeIcon} alt="recipe icon" />
      </a>
    </li>
    <!-- Right side of navbar -->
    <li class="right">
      <form>
        <div class="search-container">
          <img src={searchIcon} alt="search icon" />
          <input type="text" placeholder="Søk etter oppskrifter" />
        </div>
      </form>
    </li>
    <li>
      {#if user.loggedIn}
        <div class="dropdown">
          <button class="loggut">
            <img class="nav-ikon" src={accountIcon} alt="account icon" />
            Min bruker
            <img src={dropdownArrow} alt="dropdown arrow" />
          </button>
          <div class="dropdown-content">
            <button class="bruker-link" on:click={toggle}>Logg ut</button>
          </div>
        </div>
      {:else}
        <button class="logginn" on:click={toggle}>Logg inn</button>
      {/if}
    </li>
  </ul>
</nav>
