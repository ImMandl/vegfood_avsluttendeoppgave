<script>
  import { onMount } from "svelte";
  import OppskriftTile from "./OppskriftTile.svelte";

  let loadingIcon = "graphics/loading.svg";

  let db; //ref til firebase
  let oppskriftregister; // ref til collection i firestore
  let oppskrifter = [];

  onMount(() => {
    db = firebase.firestore();
    oppskriftregister = db
      .collection("Oppskrifter")
      .orderBy("laget", "asc")
      .limit(4);

    // viser frem oppskriftene
    oppskriftregister.onSnapshot(snap => {
      oppskrifter = snap.docs;
    });
  });
</script>

<style>
  .oppskrift-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    justify-content: space-between;
    gap: 16px;
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
    <OppskriftTile data={oppskrift.data()} />
  {:else}
    <div class="loading-message">
      <p>henter oppskrifter...</p>
      <img class="loading-icon" src={loadingIcon} alt="crash icon" />
    </div>
  {/each}
</div>
