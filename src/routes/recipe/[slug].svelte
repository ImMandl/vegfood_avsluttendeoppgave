<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`recipe/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { recipe: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { authState } from "rxfire/auth";
  import { favorittArray } from "../../store.js";
  export let recipe;
  export let segment;

  let melk = "./images/tinemelk.png";
  let yoghurt = "./images/yoghurt.png";
  let kremgo = "./images/kremgo.png";
  let clock = "./graphics/clock.svg";
  let enkel = "./graphics/icons-difficulty-easy.svg";
  let medium = "./graphics/icons-difficulty-medium.svg";
  let hard = "./graphics/icons-difficulty-hard.svg";
  let heart = "./graphics/heart.svg";
  let fullheart = "./graphics/fullheart.svg";

  let db; // ref til firestore
  let auth; // authentication
  let googleProvider; // Google innlogging
  let logout; // logg ut
  let showUserMenu = false; // viser ikke logout automatisk
  let toggleUserMenu; // viser logout etter trykt profilnavn
  let user; // bruker
  let unsubscribe;

  onMount(() => {
    db = firebase.firestore();
    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();

    logout = () => {
      auth.signOut();
    };

    unsubscribe = authState(auth).subscribe(u => (user = u));
  });

  const leggTilFavoritt = () => {
    $favorittArray.push(recipe);
    alert("Denne oppskrifter har blitt lagt til i dine favoritter!");
    console.log($favorittArray);
  };

  const fjernFavoritt = () => {
    $favorittArray.splice(favorittArray.id, 1);
    alert("Denne oppskrifter har blitt fjernet fra dine favoritter!");
    console.log($favorittArray);
  };
</script>

<style>
  .content :global(pre) {
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(iframe) {
    width: 100%;
    height: 300px;
  }

  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 24px;
  }

  /* content on left / main content */
  .main-content img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .info div {
    margin-right: 24px;
  }

  .info div p {
    font-weight: 600;
  }

  .icon img {
    max-height: 24px;
    max-width: 24px;
    margin-right: 8px;
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

  /* legg til som favoritt / heart icon */
  .heart-icon {
    height: 32px;
    width: 32px;
    object-fit: contain;
    margin-left: auto;
  }

  .heart-icon img {
    height: 100%;
    width: 100%;
  }

  .heart-icon:hover {
    cursor: pointer;
  }

  /* content on right / side content */
  .sidebar {
    width: 100%;
  }

  .sidebar-grid-produkter {
    display: grid;
    grid-template-columns: auto auto;
    gap: 4px;
    margin-bottom: 48px;
  }

  .sidebar-item {
    text-align: center;
  }

  .sidebar-item img {
    width: 80%;
    padding: 8px;
    object-fit: contain;
  }

  /* .breadcrumb */
  .breadcrumb {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
  }

  .breadcrumb img {
    height: 12px;
    margin: 0 8px;
  }

  .breadcrumb a {
    color: #333;
  }

  .breadcrumb a:hover {
    color: #1d4374;
  }
</style>

<svelte:head>
  <title>{recipe.title}</title>
</svelte:head>

<div class="breadcrumb ">
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">Hjem</a>
  <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="" />
  <a aria-current={segment === 'recipe' ? 'page' : undefined} href="recipe">
    Oppskrifter
  </a>
  <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="" />
  <p>{recipe.title}</p>
</div>

<div class="container">
  <div class="grid">
    <div class="main-content">
      <img src={recipe.bilde} alt="bilde" />
      <div class="row">
        {#if recipe.kategori == 'Vegetar'}
          <p class="kategori vegetar">{recipe.kategori}</p>
        {:else}
          <p class="kategori vegan">{recipe.kategori}</p>
        {/if}
        {#if user}
          <div class="heart-icon">
            {#if $favorittArray.includes(favorittArray.id)}
              <img on:click={fjernFavoritt} src={fullheart} alt="" />
            {:else}
              <img on:click={leggTilFavoritt} src={heart} alt="" />
            {/if}
          </div>
        {:else}
          <div class="heart-icon">
            <a
              aria-current={segment === 'logginn' ? 'page' : undefined}
              href="logginn">
              <img src={heart} alt="" />
            </a>
          </div>
        {/if}
      </div>
      <h1>{recipe.title}</h1>
      <div class="row info">
        <div class="row icon">
          <img src={clock} alt="" />
          <p>{recipe.lengde}</p>
        </div>
        <div class="row icon">
          {#if recipe.grad == 'Enkel'}
            <img src={enkel} alt="" />
          {:else if recipe.grad == 'Medium'}
            <img src={medium} alt="" />
          {:else}
            <img src={hard} alt="" />
          {/if}
          <p>{recipe.grad}</p>
        </div>
      </div>
      <div class="content">
        <hr />
        {@html recipe.html}
        {#each recipe.ingredienser as ingrediens}
          <div class="row">
            <hp>{ingrediens.title}</hp>
            <hp>{ingrediens.antall}</hp>
            <hp>{ingrediens.mengde}</hp>
          </div>
        {/each}
        {#each recipe.oppskrift as steg}
          <p>{steg.steg}</p>
        {/each}
      </div>
    </div>
    <div class="sidebar">
      <h3>Du trenger</h3>
      <div class="sidebar-grid-produkter">
        {#each recipe.prdukter as produkt}
          <div class="sidebar-item">
            <img src={produkt.bilde} alt="" />
            <h4>{produkt.title}</h4>
          </div>
        {/each}
      </div>
      <h3>Lignende oppskrifter</h3>
      <div class="sidebar-oppskrifter" />
    </div>
  </div>
</div>