<script>
  import { onMount } from "svelte";
  import Side from "./OppskriftSide.svelte";

  let db; //ref til firebase
  let oppskriftregister; // ref til collection i firestore
  let oppskrifter = [];

  onMount(() => {
    db = firebase.firestore();
    oppskriftregister = db.collection("Oppskrifter");

    // viser frem oppskriftene
    oppskriftregister.onSnapshot(snap => {
      oppskrifter = snap.docs;
    });
  });
</script>

{#each oppskrifter as oppskrift}
  <Side data={oppskrift.data()} />
{/each}
