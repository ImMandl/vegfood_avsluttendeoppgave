<script>
  import { Circle } from "svelte-loading-spinners";
  import recipes from "../routes/recipe/_recipes.js";
  let selection = recipes.filter(recipe => recipe.stikkord.includes("middag"));
</script>

<style>
  .heading {
    text-align: center;
    padding-top: 32px;
    padding-bottom: 24px;
  }

  .heading h1 {
    font-size: 64px;
  }
</style>

<div class="heading">
  <h1>Middags oppskrifter</h1>
  <h3>
    Ønsker du et stort måltid med mange retter? Eller vil du ha noe enkelt etter
    en lang dag på jobb? Vi har begge deler! Så her er det bare å hoppe inn på
    kjøkkenet og finne frem ingrediensene!
  </h3>
</div>
<div class="oppskrift-grid">
  {#each selection as recipe}
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
