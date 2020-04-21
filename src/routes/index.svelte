<script>
  import Hero from "../components/Hero.svelte";
  import Categories from "../components/Categories.svelte";
  import Search from "../components/search.svelte";
  import RecipeTile from "../components/RecipeTile.svelte";

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

<Hero />

<Categories {segment} />

<div class="oppskrift-rad">
  <h3>Nyeste oppskrifter</h3>
  <RecipeTile />
</div>

<div>
  <h3>Søk på oppskrifter</h3>
  <Search />
</div>
