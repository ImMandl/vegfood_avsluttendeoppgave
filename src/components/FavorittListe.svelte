<script>
  import { onMount } from "svelte";
  import { authState } from "rxfire/auth";
  export let segment;

  let db; // ref til firestore
  let auth; // authentication
  let googleProvider; // Google innlogging
  let logout; // logg ut
  let showUserMenu = false; // viser ikke logout automatisk
  let toggleUserMenu; // viser logout etter trykt profilnavn
  let user; // bruker
  let unsubscribe;
  let visible = true;
  let dropdownArrow = "graphics/icons-dropdown-arrow.svg";

  onMount(() => {
    db = firebase.firestore();
    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();

    logout = () => {
      auth.signOut();
    };

    unsubscribe = authState(auth).subscribe(u => (user = u));
  });

  import { favorittArray } from "../store.js";

  let favorittListe = [...$favorittArray];
  $: favorittListe;

  const fjernFavoritt = () => {
    favorittListe = $favorittArray.splice(favorittArray.id, 1);
  };

  /* bestemmer hvor mange favoritter som vises på en gang */
  let valueList;
  let toggleValueList = false;
  let value = $favorittArray.length;

  const valueFive = () => {
    value = 5;
    valueList = !valueList;
  };
  const valueTen = () => {
    value = 10;
    valueList = !valueList;
  };
  const valueTwenty = () => {
    value = 20;
    valueList = !valueList;
  };
  const valueThirty = () => {
    value = 30;
    valueList = !valueList;
  };
  const valueAll = () => {
    value = $favorittArray.length;
    valueList = !valueList;
  };

  toggleValueList = () => {
    valueList = !valueList;
  };
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

  .row {
    align-items: center;
  }

  @media only screen and (max-width: 760px) {
    /* Tvinge table til å ikke se ut som en table lenger*/
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Fjerner table header */
    thead tr {
      display: none;
    }

    .favoritt-table tr {
      margin-bottom: 32px;
      border-bottom: 1px solid #d1d1d1;
    }

    .favoritt-table td {
      /* Oppfører seg som en "row" */
      border: none;
      position: relative;
      padding-left: 50%;
      padding-top: 16px;
    }

    .favoritt-table td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    .favoritt-table td {
      padding: 42px 8px 12px;
      border-bottom: none;
    }

    /* Nye labels */
    td:nth-of-type(1):before {
      content: "Oppskrift";
      font-weight: 600;
    }
    td:nth-of-type(2):before {
      content: "Kategori";
      font-weight: 600;
    }
    td:nth-of-type(3):before {
      content: "Grad";
      font-weight: 600;
    }
    td:nth-of-type(4):before {
      content: "Forfatter";
      font-weight: 600;
    }
    td:nth-of-type(5):before {
      content: "Handlinger";
      font-weight: 600;
    }
  }
</style>

<h2>Mine favoritter</h2>
<div class="value-list">
  <span class="row">
    Viser
    <button on:click={toggleValueList}>
      {value}
      <img src={dropdownArrow} alt="icon" />
    </button>
    {#if $favorittArray.length <= 1}
      favoritt av {$favorittArray.length}
    {:else}favoritter av {$favorittArray.length}{/if}
  </span>
  {#if valueList}
    <div class="value-list-inner">
      <button on:click={valueFive}>Vis 5 favoritter</button>
      <button on:click={valueTen}>Vis 10 favoritter</button>
      <button on:click={valueTwenty}>Vis 20 favoritter</button>
      <button on:click={valueThirty}>Vis 30 favoritter</button>
      <button on:click={valueAll}>Vis alle favoritter</button>
    </div>
  {/if}
</div>
<div class="container">
  <table class="favoritt-table">
    {#if user}
      {#if $favorittArray.length === 0}
        <tr>
          <th style="font-weight: 400;">
            Ser ut som du ikke har noen favoritter.
            <a
              style="text-decoration: underline;"
              aria-current={segment === 'recipe' ? 'page' : undefined}
              href="recipe">
              Utforsk
            </a>
            vårt store bibliotek med oppskrifter og finn en favoritt!
          </th>
        </tr>
      {:else}
        <thead>
          <tr>
            <th>Oppskrift</th>
            <th>Kategori</th>
            <th>Grad</th>
            <th>Forfatter</th>
            <th>Handlinger</th>
          </tr>
        </thead>
        {#each favorittListe.slice(0, value) as favoritt}
          <tbody>
            <tr>
              <td>{favoritt.title}</td>
              <td>{favoritt.kategori}</td>
              <td>{favoritt.grad}</td>
              <td>{favoritt.forfatter}</td>
              <td class="handlinger">
                <a rel="prefetch" href="recipe/{favoritt.slug}">Gå til</a>
                <button on:click={fjernFavoritt}>Slett</button>
              </td>
            </tr>
          </tbody>
        {/each}
      {/if}
    {:else}
      <h2>
        <a
          style="text-decoration: underline;"
          class="logginn"
          aria-current={segment === 'logginn' ? 'page' : undefined}
          href="logginn">
          Logg inn
        </a>
        for å se informasjon om din bruker
      </h2>
    {/if}
  </table>
</div>
