<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`faq/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { faq: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let faq;
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

  .content :global(iframe) {
    width: 100%;
    height: 300px;
    margin: 16px 0;
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
  <title>{faq.title}</title>
</svelte:head>

<h1>{faq.title}</h1>

<div class="breadcrumb ">
  <a aria-current={segment === 'faq' ? 'page' : undefined} href="faq">
    Spørsmål og svar
  </a>
  <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="" />
  <p>{faq.title}</p>
</div>

<div class="container">
  <h3>Vårt svar:</h3>
  <div class="content">
    {@html faq.html}
  </div>
</div>
