<script context="module">
  /*   export function preload({ params, query }) {
    return this.fetch(`recipe.json`)
      .then(r => r.json())
      .then(recipes => {
        return { recipes };
      });
  } */

  export function preload({ params, query }) {
    return this.fetch(`recipe.json`)
      .then(r => r.json())
      .then(recipes => {
        return { recipes };
      });
  }
</script>

<script>
  export let recipes;
  export let segment;

  let dropdownArrow = "graphics/icons-dropdown-arrow.svg";
  let dropdownRightArrow = "graphics/icons-dropdown-right-arrow.svg";
  let showKategori = true; // starter som åpen
  let showIngredienser = true; // starter som åpen

  const toggleKategori = () => {
    showKategori = !showKategori;
  };

  const toggleIngredienser = () => {
    showIngredienser = !showIngredienser;
  };
</script>

<style>
  /* main */
  .content-wrapper {
    display: grid;
    grid-template-columns: 200px auto;
  }

  @media only screen and (max-width: 768px) {
    .content-wrapper {
      grid-template-columns: 1fr;
    }
  }

  /* filter meny */
  .filter-wrapper,
  .kategori-wrapper,
  .ingrediens-wrapper {
    display: inline-flex;
    flex-direction: column;
  }

  .filter-wrapper button {
    background-color: transparent;
    border: none;
    text-align: left;
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  .filter-wrapper button img {
    margin-left: auto;
    padding-right: 16px;
  }

  .kategori-wrapper,
  .ingrediens-wrapper {
    margin-bottom: 16px;
  }

  .filter-wrapper input {
    width: auto;
    margin-right: 8px;
  }

  .row {
    align-items: center;
    margin-left: 24px;
  }

  /* produkt grid */
  .oppskrift-grid {
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  }
</style>

<svelte:head>
  <title>Oppskrifter</title>
</svelte:head>

<div class="breadcrumb ">
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">Hjem</a>
  <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="" />
  <p>Oppskrifter</p>
</div>

<div class="content-wrapper">
  <div class="filter-wrapper">
    {#if showKategori == true}
      <button on:click={toggleKategori}>
        Kategori
        <img src={dropdownArrow} alt="icon" />
      </button>
    {:else}
      <button on:click={toggleKategori}>
        Kategori
        <img src={dropdownRightArrow} alt="icon" />
      </button>
    {/if}
    {#if showKategori}
      <div class="kategori-wrapper">
        <div class="row">
          <input type="checkbox" id="vegetar" />
          <label for="vegetar">Vegetar</label>
        </div>
        <div class="row">
          <input type="checkbox" id="vegan" />
          <label for="vegan">Vegan</label>
        </div>
      </div>
    {/if}
    {#if showIngredienser == true}
      <button on:click={toggleIngredienser}>
        Ingredienser
        <img src={dropdownArrow} alt="icon" />
      </button>
    {:else}
      <button on:click={toggleIngredienser}>
        Ingredienser
        <img src={dropdownRightArrow} alt="icon" />
      </button>
    {/if}
    {#if showIngredienser}
      <div class="ingrediens-wrapper">
        <div class="row">
          <input type="checkbox" id="soya" />
          <label for="soya">Soya</label>
        </div>
        <div class="row">
          <input type="checkbox" id="tofu" />
          <label for="tofu">Tofu</label>
        </div>
        <div class="row">
          <input type="checkbox" id="egg" />
          <label for="egg">Egg</label>
        </div>
        <div class="row">
          <input type="checkbox" id="potet" />
          <label for="potet">Potet</label>
        </div>
      </div>
    {/if}
  </div>

  <div class="oppskrift-grid">
    {#each recipes as recipe}
      <a rel="prefetch" href="recipe/{recipe.slug}">
        <div class="oppskrift-tile">
          <img src={recipe.bilde} alt="bilde" />
          <div class="oppskrift-tile-innhold">
            {#if recipe.kategori == 'Vegetar'}
              <p class="kategori vegetar">{recipe.kategori}</p>
            {:else}
              <p class="kategori vegan">{recipe.kategori}</p>
            {/if}
            <h2>{recipe.title}</h2>
            <p>Laget av {recipe.forfatter}</p>
          </div>
        </div>
      </a>
    {:else}
      <div class="loading-message">
        <p>henter oppskrifter...</p>
      </div>
    {/each}
  </div>
</div>
