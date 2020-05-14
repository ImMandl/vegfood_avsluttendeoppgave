<script>
  import Categories from "../components/Categories.svelte";
  import Search from "../components/Search.svelte";
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
  <RecipeTileNewest />
</div>
