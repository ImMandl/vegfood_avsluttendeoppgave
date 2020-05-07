<script>
  import Brukerside from "../components/Brukerside.svelte";
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
  <title>Profil</title>
</svelte:head>

<div class="bruker-nav">
  <div>
    <BrukerNav />
  </div>
  <div>
    <Brukerside />
  </div>
</div>
