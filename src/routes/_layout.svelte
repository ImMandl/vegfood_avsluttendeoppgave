<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 100%;
    padding: 32px 64px;
    background-color: #fafafa;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .inner-main {
    max-width: 1440px;
    background-color: #fafafa;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1024px) {
    main {
      padding: 32px 32px;
    }
  }

  @media only screen and (max-width: 1768px) {
    main {
      padding: 16px;
    }
  }
</style>

<Nav {segment} />

<main>
  <div class="inner-main">
    <slot />
  </div>
</main>

<Footer {segment} />
