<script>
  import { Circle } from "svelte-loading-spinners";
  import recipes from "../routes/recipe/_recipes.js";
  let selection = recipes.filter(recipe => recipe.stikkord.includes("smårett"));
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
  <h1>Smårett oppskrifter</h1>
  <h3>
    Ønsker du deg en snack, men er lei godteriet på butikken? Eller ser du etter
    noe litt sunnere? Disse oppskriftene er kjappe, enkle og veldig gode. Så
    hvis du føler deg litt snackish er vi her for deg.
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
