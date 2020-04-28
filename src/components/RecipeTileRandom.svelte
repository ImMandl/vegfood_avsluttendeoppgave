<script>
  import { onMount } from "svelte";
  import { Circle } from "svelte-loading-spinners";
  import recipes from "../routes/recipe/_recipes.js";
</script>

<div class="oppskrift-grid">
  <!-- slice to only get 4 random recipes -->
  <!--    {#each recipes.slice(0, 4) as recipe} -->
  {#each recipes.slice(Math.random() * (6 - 6) + 6) as recipe}
    <a rel="prefetch" href="recipe/{recipe.slug}">
      <div class="oppskrift-tile">
        <img class="oppskrift-bilde" src={recipe.bilde} alt="bilde" />
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
      {Circle}
    </div>
  {/each}
</div>
