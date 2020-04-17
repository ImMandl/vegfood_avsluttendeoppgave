<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`oppskrifter/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { oppskrift: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let oppskrift;
  export let segment;
</script>

<style>
  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) {
    background-color: transparent;
    padding: 0;
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
  <title>{oppskrift.title}</title>
</svelte:head>

<h1>{oppskrift.title}</h1>

<div class="breadcrumb ">
  <a
    aria-current={segment === 'oppskrift' ? 'page' : undefined}
    href="oppskrift">
    Spørsmål og svar
  </a>
  <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="" />
  <p>{oppskrift.title}</p>
</div>

<div class="container">
  <h3>Vårt svar:</h3>
  <div class="content">
    {@html oppskrift.html}
  </div>
</div>
