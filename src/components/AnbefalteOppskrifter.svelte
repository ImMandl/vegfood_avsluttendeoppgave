<script>
  import { onMount } from "svelte";
  import Oppskrift from "./OppskriftTile.svelte";

  let loadingIcon = "graphics/loading.svg";

  let db; //ref til firebase
  let oppskriftregister; // ref til collection i firestore
  let oppskrifter = [];

  onMount(() => {
    db = firebase.firestore();
    oppskriftregister = db.collection("Oppskrifter").limit(4);

    // viser frem oppskriftene
    oppskriftregister.onSnapshot(snap => {
      oppskrifter = snap.docs;
    });
  });
</script>

<style>
  .oppskrift-grid {
    display: grid;
    max-width: 1440px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    justify-content: space-evenly;
    gap: 8px;
  }

  .loading-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
  }

  .loading-icon {
    height: 100px;
    width: 80px;
    justify-self: center;
  }
</style>

<div class="oppskrift-grid">
  {#each oppskrifter as oppskrift}
    <Oppskrift data={oppskrift.data()} />
  {:else}
    <div class="loading-message">
      <p>henter oppskrifter...</p>
      <img class="loading-icon" src={loadingIcon} alt="crash icon" />
    </div>
  {/each}
</div>
