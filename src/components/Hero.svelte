<script>
  import Poster from "./Poster.svelte";
  import Carousel from "./Carousel.svelte";
</script>

<style>
  .hero {
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 16px;
    margin-bottom: 32px;
  }

  .carousel {
    position: relative;
    overflow: hidden;
  }

  .carousel-inner {
    position: absolute;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    .poster {
      display: none;
    }

    .hero {
      grid-template-columns: 1fr;
    }

    .carousel {
      width: 100%;
      height: 360px;
    }
  }
</style>

<div class="hero">
  <div class="carousel">
    <div class="carousel-inner">
      <Carousel />
    </div>
  </div>
  <div class="poster">
    <Poster />
  </div>
</div>
