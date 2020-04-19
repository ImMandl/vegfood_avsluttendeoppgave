<script>
  const favorittArray = [
    {
      id: 1,
      navn: "Nanaimo Bars: Sjokoladekake med vaniljesmørkrem",
      kategori: "vegetar",
      tid: "18.03.2020",
      grad: "enkel"
    },
    {
      id: 1,
      navn: "Kjeks og bær",
      kategori: "vegetar",
      tid: "18.03.2020",
      grad: "enkel"
    },
    {
      id: 1,
      navn: "Eggsalat",
      kategori: "vegetar",
      tid: "18.03.2020",
      grad: "enkel"
    }
  ];

  export let segment;
</script>

<style>
  .favoritt-table {
    border-collapse: collapse;
    width: 100%;
  }

  .favoritt-table td,
  .favoritt-table th {
    border: none;
    text-align: left;
  }

  .favoritt-table td {
    border-bottom: 1px solid #d1d1d1;
    padding: 16px 8px;
  }

  .favoritt-table th {
    padding: 0 8px 16px;
    background-color: transparent;
  }

  .container {
    padding-bottom: 0;
    overflow-x: auto;
  }

  .handlinger a {
    margin-right: 8px;
  }

  .handlinger a,
  .handlinger button {
    font-weight: 400;
    background-color: #d1d1d1;
    border: none;
    border-radius: 16px;
    font-size: 12px;
    color: #333;
    padding: 4px 16px;
  }
  .handlinger a:hover,
  .handlinger button:hover {
    background-color: #b8b8b8;
  }
</style>

<h2>Mine favoritter</h2>
<div class="container">
  <table class="favoritt-table">
    <tr>
      <th>Oppskrift</th>
      <th>Kategori</th>
      <th>Lagt til</th>
      <th>Grad</th>
      <th>Handlinger</th>
    </tr>
    {#each favorittArray as favoritt}
      <tr>
        <td>{favoritt.navn}</td>
        <td>{favoritt.kategori}</td>
        <td>{favoritt.tid}</td>
        <td>{favoritt.grad}</td>
        <td class="handlinger">
          <a
            aria-current={segment === 'oppskrifter' ? 'page' : undefined}
            href="oppskrifter">
            Gå til
          </a>
          <button>Slett</button>
        </td>
      </tr>
    {/each}
  </table>
</div>
