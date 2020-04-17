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
</script>

<style>
  ul {
    padding-inline-start: 0px;
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
    height: 32px;
    width: 32px;
    background-image: url(https://image.flaticon.com/icons/svg/1621/1621609.svg);
    background-size: contain;
    background-repeat: no-repeat;
    padding-right: 8px;
  }

  a:hover {
    color: #3da839;
  }
</style>

<svelte:head>
  <title>Spørsmål og svar</title>
</svelte:head>

<h1>Ofte stilte spørsmål</h1>
<div class="container">
  <ul>
    {#each faqs as faq}
      <li>
        <a rel="prefetch" href="faq/{faq.slug}">{faq.title}</a>
      </li>
    {/each}
  </ul>
</div>
