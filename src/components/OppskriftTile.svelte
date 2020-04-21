<script>
  let loadErrorIcon = "graphics/fail-to-load.svg";

  export let data = {};
</script>

<style>
  /*   @media only screen and (min-width: 1380px) {
    .oppskrift-tile {
      min-width: 320px;
    }
  } */

  .oppskrift-tile {
    height: 395px;
    justify-self: stretch;
    min-width: 256px;
    overflow: hidden;
    object-fit: cover;
    background-color: #d1d1d1;
    position: relative;
  }

  .oppskrift-tile img {
    height: 100%;
    display: block;
    margin: 0 auto;
  }

  .oppskrift-tile-innhold {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    left: 0px;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(27, 27, 27));
    width: 100%;
    padding: 8px 16px 32px 16px;
  }

  .oppskrift-tile-innhold h2 {
    color: white;
  }

  .kategori {
    background-color: #fff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 18px;
    padding: 4px 12px;
    margin-bottom: 8px;
    text-align: center;
  }

  .vegetar {
    max-width: 74px;
    border: 1px solid #b35900;
    color: #b35900;
  }

  .vegan {
    max-width: 65px;
    border: 1px solid #247c3b;
    color: #247c3b;
  }

  /*   @media only screen and (max-width: 1124px) {
    .oppskrift-tile {
      min-width: 256px;
    }
  } */

  @media only screen and (max-width: 850px) {
    .oppskrift-tile {
      min-width: 220px;
    }
  }
</style>

<div>
  <div class="oppskrift-tile">
    <img src={data.url} alt="bilde" />
    <div class="oppskrift-tile-innhold">
      {#if data.kategori == 'vegetar'}
        <p class="kategori vegetar">{data.kategori}</p>
      {:else}
        <p class="kategori vegan">{data.kategori}</p>
      {/if}
      <h2>{data.navn}</h2>
      <p>Laget av {data.forfatter}</p>
    </div>
  </div>
</div>
