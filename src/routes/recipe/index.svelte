<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`recipe.json`)
      .then(r => r.json())
      .then(recipes => {
        return { recipes };
      });
  }
</script>

<script>
  import * as animateScroll from "svelte-scrollto";

  export let recipes;
  export let segment;

  let dropdownArrow = "graphics/icons-dropdown-arrow.svg";
  let dropdownRightArrow = "graphics/icons-dropdown-right-arrow.svg";
  let arrowLeft = "graphics/arrow-left.svg";
  let arrowRight = "graphics/arrow-right.svg";
  let showKategori = false; // starter som lukket
  let showMåltid = false; // starter som lukket
  let yes = false; // starter ikke på
  let group = undefined; // group binded checkboxes
  let current = ""; // current active for filter buttons

  // pagination
  let items = [...recipes]; // sender oppskrift array inn i items som vises i pagination
  $: numItems = items.length;

  let startPosition = 0; // siden man starter på
  let itemsPerPage = 12; // hvor mange oppskrifter per side

  $: numPages = Math.ceil(numItems / itemsPerPage); // antall sider / rundes til helt tall
  $: endPosition = startPosition + itemsPerPage;
  $: currentItems = items.filter(
    (item, i) => i >= startPosition && i < endPosition
  );

  $: disabledPrev = startPosition - itemsPerPage < 0; // disabled forrige når man er på side 1
  $: disabledNext = startPosition + itemsPerPage >= numItems; // disabled neste når man er på siste side

  $: currentPage = 1 + startPosition / itemsPerPage; // siden man er på (+1 for at side 1 ikke skal være 0)

  $: pageArray = items.filter((item, i) => i % itemsPerPage === 0);

  // neste og forrige knapper som blar gjennom oppskriftsider/pagination
  const next = () => {
    startPosition += itemsPerPage;
    animateScroll.scrollToTop();
  };

  const prev = () => {
    startPosition -= itemsPerPage;
    animateScroll.scrollToTop();
  };

  /* filter */
  const toggleKategori = () => {
    showKategori = !showKategori;
  };

  const toggleMåltid = () => {
    showMåltid = !showMåltid;
  };

  const toggleIngredienser = () => {
    showIngredienser = !showIngredienser;
  };

  const oppskriftToggle = () => {
    current = "alle";
    items = [...recipes];
    startPosition = 0; // setter siden tilbake til første
  };

  const vegetarToggle = () => {
    current = "vegetar";
    items = recipes.filter(recipe => recipe.stikkord.includes("vegetar"));
    startPosition = 0;
  };

  const veganToggle = () => {
    current = "vegan";
    items = recipes.filter(recipe => recipe.stikkord.includes("vegan"));
    startPosition = 0;
  };

  const frokostToggle = () => {
    current = "frokost";
    items = recipes.filter(recipe => recipe.stikkord.includes("frokost"));
    startPosition = 0;
  };

  const nisteToggle = () => {
    current = "niste";
    items = recipes.filter(recipe => recipe.stikkord.includes("niste"));
    startPosition = 0;
  };

  const middagToggle = () => {
    current = "middag";
    items = recipes.filter(recipe => recipe.stikkord.includes("middag"));
    startPosition = 0;
  };

  const dessertToggle = () => {
    current = "dessert";
    items = recipes.filter(recipe => recipe.stikkord.includes("dessert"));
    startPosition = 0;
  };

  const smaarettToggle = () => {
    current = "smaarett";
    items = recipes.filter(recipe => recipe.stikkord.includes("smårett"));
    startPosition = 0;
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
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  .filter-wrapper button:hover {
    color: #247c3b;
  }

  .filter-wrapper button img {
    margin-left: auto;
    padding-right: 16px;
  }

  .active {
    color: #247c3b;
    font-weight: 500;
  }

  .kategori-wrapper button,
  .ingrediens-wrapper button {
    padding: 0 0 4px 16px;
    font-weight: 400;
    display: block;
  }

  /* produkt grid */
  .oppskrift-grid {
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  }

  /* pagination */
  .pagination {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    align-content: center;
    justify-content: center;
    width: 100%;
    gap: 16px;
    margin: 16px 0 0 100px;
  }

  .pagination button {
    border: none;
    background-color: transparent;
  }

  .pagination-btn {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }

  .pagination .arrow {
    height: 16px;
    width: 6px;
    padding: 2px 6px 0;
  }

  @media only screen and (max-width: 768px) {
    .pagination {
      margin-left: 0;
    }
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
    <button class="filter-dropdown-btn" on:click={toggleKategori}>
      Kategori
      {#if showKategori == true}
        <img src={dropdownArrow} alt="icon" />
      {:else}
        <img src={dropdownRightArrow} alt="icon" />
      {/if}
    </button>
    {#if showKategori}
      <div class="kategori-wrapper">
        <button class:active={current === 'vegetar'} on:click={vegetarToggle}>
          Vegetar
        </button>
        <button class:active={current === 'vegan'} on:click={veganToggle}>
          Vegan
        </button>
        <button class:active={current === 'alle'} on:click={oppskriftToggle}>
          Vis alle
        </button>
      </div>
    {/if}
    <button class="filter-dropdown-btn" on:click={toggleMåltid}>
      Måltider
      {#if showMåltid == true}
        <img src={dropdownArrow} alt="icon" />
      {:else}
        <img src={dropdownRightArrow} alt="icon" />
      {/if}
    </button>
    {#if showMåltid}
      <div class="ingrediens-wrapper">
        <button class:active={current === 'frokost'} on:click={frokostToggle}>
          Frokost
        </button>
        <button class:active={current === 'niste'} on:click={nisteToggle}>
          Niste
        </button>
        <button class:active={current === 'middag'} on:click={middagToggle}>
          Middag
        </button>
        <button class:active={current === 'dessert'} on:click={dessertToggle}>
          Dessert
        </button>
        <button class:active={current === 'smaarett'} on:click={smaarettToggle}>
          Småretter
        </button>
        <button class:active={current === 'alle'} on:click={oppskriftToggle}>
          Vis alle
        </button>
      </div>
    {/if}
  </div>
  <div class="oppskrift-grid">
    {#each currentItems as recipe, i}
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
<div class="pagination">
  <button class="pagination-btn" on:click={prev} disabled={disabledPrev}>
    <img class="arrow" src={arrowLeft} alt="arrow icon" />
    Forrige
  </button>
  <label>{currentPage} / {numPages}</label>
  <button class="pagination-btn" on:click={next} disabled={disabledNext}>
    Neste
    <img class="arrow" src={arrowRight} alt="arrow icon" />
  </button>
</div>
