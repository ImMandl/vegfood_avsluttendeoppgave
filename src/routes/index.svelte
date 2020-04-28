<script>
  import Categories from "../components/Categories.svelte";
  import Search from "../components/search.svelte";
  import RecipeTileRandom from "../components/RecipeTileRandom.svelte";
  import RecipeTileNewest from "../components/RecipeTileNewest.svelte";

  export let segment;
</script>

<style>
  .oppskrift-rad {
    margin-bottom: 32px;
  }
</style>

<svelte:head>
  <title>Velkommen til Vegfood!</title>
</svelte:head>

<Search />

<Categories {segment} />

<div class="oppskrift-rad">
  <h3>Nyeste oppskrifter</h3>
  <RecipeTileNewest />
</div>

<div class="oppskrift-rad">
  <h3>Utvalgte oppskrifter</h3>
  <RecipeTileRandom />
</div>
