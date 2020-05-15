<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  .wrapper {
    /* Holder footer nederst på siden selv om det er lite innhold*/
    min-height: 71vh;
    background-color: #fafafa;
  }
  main {
    position: relative;
    max-width: 100%;
    margin: 0 64px;
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
      margin: 0 32px;
    }
  }

  @media only screen and (max-width: 1768px) {
    main {
      margin: 0 16px;
    }
  }
</style>

<div class="wrapper">
  <Nav {segment} />
  <main>
    <div class="inner-main">
      <slot />
    </div>
  </main>
</div>
<Footer {segment} />
