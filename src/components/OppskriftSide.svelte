<script>
  export let data = {};
</script>

<style>
  img {
    width: 300px;
  }
</style>

<img src={data.url} alt="" />
<h2>{data.navn}</h2>
<p>{data.kategori}</p>

{#each data.oppskrift as oppskriftDel}
  <p>START: {oppskriftDel}</p>
{/each}
<p>{data.tips}</p>
