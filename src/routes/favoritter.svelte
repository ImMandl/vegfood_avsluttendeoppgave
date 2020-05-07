<script>
  import FavorittListe from "../components/FavorittListe.svelte";
  import BrukerNav from "../components/BrukerNav.svelte";
</script>

<style>
  .bruker-nav {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }

  @media only screen and (max-width: 1024px) {
    .bruker-nav {
      grid-template-columns: 1fr;
    }
  }
</style>

<svelte:head>
  <title>Favoritter</title>
</svelte:head>

<div class="bruker-nav">
  <div>
    <BrukerNav />
  </div>
  <div>
    <FavorittListe />
  </div>
</div>
