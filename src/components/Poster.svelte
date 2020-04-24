<script>
  let telescope = "graphics/telescope-white.svg";
  let posterBilde = "graphics/poster.svg";

  export let segment;
</script>

<style>
  .poster {
    position: relative;
    text-align: center;
    overflow: hidden;
  }

  .poster-tekst {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 22px;
    width: 90%;
  }

  .poster-tekst p {
    margin-bottom: 8px;
  }

  .poster-img img {
    width: 100%;
    height: 360px;
    object-fit: cover;
  }

  .poster-tekst-img {
    height: 100px;
    margin-bottom: 16px;
  }

  .poster-tekst-img img {
    object-fit: contain;
    height: 100%;
  }

  .poster-tekst a {
    font-size: 16px;
    border: 1px solid white;
    background-color: #3da839;
    border-radius: 18px;
    padding: 8px 20px;
    text-decoration: none;
  }

  .poster-tekst a:hover {
    background-color: #39a036;
  }

  @media only screen and (max-width: 1260px) {
    .poster-tekst {
      font-size: 18px;
      width: 95%;
    }

    .poster-tekst-img {
      height: 60px;
      margin-bottom: 24px;
    }
  }
</style>

<div class="poster poster-img">
  <img src={posterBilde} alt="Velkomstbilde" />
  <div class="poster-tekst">
    <p>Vi har veg i veg med spennende oppskrifter. Begynn å utforsk i dag!</p>
    <div class="poster-tekst-img">
      <img src={telescope} alt="" />
    </div>
    <a aria-current={segment === 'search' ? 'page' : undefined} href="search">
      Utforsk
    </a>
  </div>
</div>
