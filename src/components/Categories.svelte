<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  let frokost = "graphics/coffee.svg";
  let niste = "graphics/diet.svg";
  let middag = "graphics/spaghetti.svg";
  let dessert = "graphics/ice-cream.svg";
  let smaaretter = "graphics/pancake.svg";

  export let segment;
</script>

<style>
  .wrapper {
    margin-bottom: 24px;
  }

  .kategori {
    text-align: center;
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

<!-- For big screens (over 1024px) -->
<div class="wrapper big-screen">
  <Carousel
    draggable={false}
    multipleDrag={true}
    autoplay={0}
    dots={false}
    perPage={5}>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={frokost} alt="ikon" />
          <h3>Frokost</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={niste} alt="ikon" />
          <h3>Niste</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={middag} alt="ikon" />
          <h3>Middag</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={dessert} alt="ikon" />
          <h3>Dessert</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={smaaretter} alt="ikon" />
          <h3>Småretter</h3>
        </a>
      </div>
    </div>
  </Carousel>
</div>

<!-- For screens under 1024px -->
<div class="wrapper small-screen">
  <Carousel
    draggable={true}
    multipleDrag={true}
    autoplay={0}
    dots={false}
    perPage={{ 1024: 5, 700: 3, 500: 2 }}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={frokost} alt="ikon" />
          <h3>Frokost</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={niste} alt="ikon" />
          <h3>Niste</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={middag} alt="ikon" />
          <h3>Middag</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
          <img src={dessert} alt="ikon" />
          <h3>Dessert</h3>
        </a>
      </div>
    </div>
    <div class="slide-content">
      <div class="kategori">
        <a
          aria-current={segment === 'oppskrift' ? 'page' : undefined}
          href="oppskrift">
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
