<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  export let segment;

  let frokost = "graphics/coffee.svg";
  let niste = "graphics/diet.svg";
  let middag = "graphics/spaghetti.svg";
  let dessert = "graphics/ice-cream.svg";
  let smaaretter = "graphics/pancake.svg";
</script>

<style>
  .wrapper {
    margin-bottom: 42px;
  }
  .slide-content {
    padding-bottom: 24px;
  }

  .kategori {
    text-align: center;
    background-color: #fafafa;
  }

  .big-screen {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .small-screen {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    .big-screen {
      display: none;
    }

    .small-screen {
      display: block;
    }
  }
</style>

<!-- stor skjerm over 1024px -->
<div class="wrapper big-screen">
  <div class="kategori">
    <a aria-current={segment === 'frokost' ? 'page' : undefined} href="frokost">
      <img src={frokost} alt="ikon" />
      <h3>Frokost</h3>
    </a>
  </div>
  <div class="kategori">
    <a aria-current={segment === 'niste' ? 'page' : undefined} href="niste">
      <img src={niste} alt="ikon" />
      <h3>Niste</h3>
    </a>
  </div>
  <div class="kategori">
    <a aria-current={segment === 'middag' ? 'page' : undefined} href="middag">
      <img src={middag} alt="ikon" />
      <h3>Middag</h3>
    </a>
  </div>
  <div class="kategori">
    <a aria-current={segment === 'dessert' ? 'page' : undefined} href="dessert">
      <img src={dessert} alt="ikon" />
      <h3>Dessert</h3>
    </a>
  </div>
  <div class="kategori">
    <a
      aria-current={segment === 'smaarett' ? 'page' : undefined}
      href="smaarett">
      <img src={smaaretter} alt="ikon" />
      <h3>Småretter</h3>
    </a>
  </div>
</div>

<!-- skjerm under 1024px -->
<div class="wrapper small-screen">
  <Carousel
    draggable={true}
    multipleDrag={true}
    autoplay={0}
    dots={false}
    perPage={{ 675: 4, 375: 2, 320: 1 }}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'frokost' ? 'page' : undefined}
          href="frokost">
          <img src={frokost} alt="ikon" />
          <h3>Frokost</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a aria-current={segment === 'niste' ? 'page' : undefined} href="niste">
          <img src={niste} alt="ikon" />
          <h3>Niste</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'middag' ? 'page' : undefined}
          href="middag">
          <img src={middag} alt="ikon" />
          <h3>Middag</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'dessert' ? 'page' : undefined}
          href="dessert">
          <img src={dessert} alt="ikon" />
          <h3>Dessert</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'smaarett' ? 'page' : undefined}
          href="smaarett">
          <img src={smaaretter} alt="ikon" />
          <h3>Småretter</h3>
        </a>
      </div>
    </div>
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </Carousel>
</div>
