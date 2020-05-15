<script>
  import recipes from "../routes/recipe/_recipes.js";
  let searchIcon = "graphics/icons-search.svg";

  let searchQuery = "";

  let sourceList = [];
  $: searches = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

<style>
  .search {
    position: relative;
    height: 400px;
    width: 100%;
    margin-bottom: 48px;
  }

  .search-wrapper {
    overflow: hidden;
    height: 100%;
  }

  .search-container {
    background-image: url("images/searchbackground.jpg");
    background-color: #505050; /* bakgrunnsfarge hvis bakgrunnsbilde ikke vises */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 82px 42px 24px 42px;
  }

  .search-container h1,
  .search-container h4 {
    color: white;
  }

  .search-bar-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .search-bar-container img {
    position: absolute;
    left: 0;
    padding: 9px 8px 9px 8px;
    margin: 24px 0 0 10px;
    height: 20px;
  }

  input {
    padding: 24px 62px 24px 48px;
    border: 1px solid #333;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    width: 95%;
  }

  .results-container {
    position: absolute;
    max-height: 250px;
    width: 95%;
    top: 244px;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: white;
    margin: 0 16px;
    padding: 16px 16px 16px 24px;
    z-index: 100;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .results-bilde {
    width: 45px;
    height: 45px;
    object-fit: contain;
    overflow: hidden;
    margin: 0;
  }

  .results-bilde img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .results p {
    margin-left: 8px;
    padding-top: 12px;
  }

  .display-none {
    display: none;
  }

  @media only screen and (max-width: 460px) {
    .search-container {
      padding: 32px 16px 16px 16px;
    }

    .search-bar-container img {
      padding: 9px 8px 9px 8px;
      margin: 24px 0 0 12px;
    }

    input {
      padding: 24px 32px 24px 48px;
    }

    .results-container {
      top: 200px;
      left: 6%;
      max-width: 300px;
    }
  }
</style>

<div class="search">
  <div class="search-wrapper">
    <div class="search-container">
      <h4>Norges største kjøttfrie oppskriftbank</h4>
      <h1>Finn dagens middag</h1>
      <form>
        <div class="search-bar-container">
          <img src={searchIcon} alt="search icon" />
          <input
            type="text"
            placeholder="Søk etter oppskrifter"
            bind:value={searchQuery} />
        </div>
      </form>
    </div>
  </div>
  {#if searchQuery}
    <div class="results-container">
      {#each searches as search}
        <a rel="prefetch" href="recipe/{search.slug}">
          <div class="results row">
            <div class="results-bilde">
              <img src={search.bilde} alt="" />
            </div>
            <p>{search.title}</p>
          </div>
        </a>
      {:else}
        <p>Ser ut som "{searchQuery}" ikke kom frem til noe.</p>
      {/each}
    </div>
  {:else}
    <div class="display-none" />
  {/if}
</div>
