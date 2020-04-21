<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`oppskrift.json`)
      .then(r => r.json())
      .then(oppskrifter => {
        return { oppskrifter };
      });
  }
</script>

<script>
  export let oppskrifter;
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
  <title>Oppskrifter</title>
</svelte:head>

<div class="container">
  <ul>
    {#each oppskrifter as oppskrift}
      <li>
        <a rel="prefetch" href="oppskrift/{oppskrift.slug}">
          {oppskrift.title}
        </a>
      </li>
    {/each}
  </ul>
</div>
