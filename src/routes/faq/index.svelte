<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`faq.json`)
      .then(r => r.json())
      .then(faqs => {
        return { faqs };
      });
  }
</script>

<script>
  export let faqs;
  export let segment;
</script>

<style>
  ul {
    padding-inline-start: 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }

  li {
    list-style: none;
    font-size: 18px;
    padding: 8px 0;
    margin-left: 24px;
    display: flex;
  }

  li:before {
    content: "";
    display: inline-block;
    min-height: 32px;
    min-width: 32px;
    background-image: url(https://image.flaticon.com/icons/svg/1621/1621609.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 8px;
  }

  a {
    word-wrap: break-word;
  }

  @media only screen and (max-width: 540px) {
    ul {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }

    li {
      padding: 16px 0;
      margin-left: 8px;
    }
  }
</style>

<svelte:head>
  <title>Spørsmål og svar</title>
</svelte:head>

<h1>Ofte stilte spørsmål</h1>

<div class="breadcrumb ">
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">Hjem</a>
  <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="" />
  <p>Spørsmål og svar</p>
</div>

<div class="container">
  <ul>
    {#each faqs as faq}
      <li>
        <a rel="prefetch" href="faq/{faq.slug}">{faq.title}</a>
      </li>
    {/each}
  </ul>
</div>
