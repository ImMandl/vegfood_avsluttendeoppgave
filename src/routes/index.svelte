<script>
  import Hero from "../components/Hero.svelte";
  import Categories from "../components/Categories.svelte";
  import NyeOppskrifter from "../components/NyeOppskrifter.svelte";
  import Search from "../components/search.svelte";

  import oppskrifter from "./oppskrifter/_recipes.js";

  export let segment;
</script>

<style>
  .oppskrift-rad {
    margin-bottom: 32px;
  }

  .test {
    height: 200px;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Velkommen til Vegfood!</title>
</svelte:head>

<Hero />

<Categories {segment} />

<div class="test">
  {#each oppskrifter as oppskrift}
    <li>
      <a rel="prefetch" href="faq/{oppskrift.slug}">{oppskrift.title}</a>
    </li>
  {/each}
</div>

<div class="oppskrift-rad">
  <h3>Nyeste oppskrifter</h3>
  <NyeOppskrifter />
</div>

<div class="oppskrift-rad">
  <h3>Anbefalte oppskrifter</h3>
</div>

<div>
  <h3>Søk på oppskrifter</h3>
  <Search />
</div>
