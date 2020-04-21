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
  import { Circle } from "svelte-loading-spinners";
  export let recipes;
  export let segment;
</script>

<style>
  .oppskrift-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    justify-content: space-between;
    gap: 16px;
  }

  .loading-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
  }

  .oppskrift-tile {
    height: 395px;
    justify-self: stretch;
    min-width: 320px;
    overflow: hidden;
    object-fit: cover;
    background-color: #d1d1d1;
    position: relative;
  }

  .oppskrift-tile img {
    height: 100%;
    display: block;
    margin: 0 auto;
  }

  .oppskrift-tile-innhold {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    left: 0px;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(27, 27, 27));
    width: 100%;
    padding: 8px 16px 32px 16px;
  }

  .oppskrift-tile-innhold h2 {
    color: white;
  }

  .kategori {
    background-color: #fff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 18px;
    padding: 4px 12px;
    margin-bottom: 8px;
    text-align: center;
  }

  .vegetar {
    max-width: 74px;
    border: 1px solid #b35900;
    color: #b35900;
  }

  .vegan {
    max-width: 65px;
    border: 1px solid #247c3b;
    color: #247c3b;
  }

  /* .breadcrumb */
  .breadcrumb {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
  }

  .breadcrumb img {
    height: 12px;
    margin: 0 8px;
  }

  .breadcrumb a {
    color: #333;
  }

  .breadcrumb a:hover {
    color: #1d4374;
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
      <Circle size="60" color="#3DA839" />
    </div>
  {/each}
</div>
