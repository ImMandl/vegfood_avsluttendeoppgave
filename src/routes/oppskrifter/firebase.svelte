<script>
  import { onMount } from "svelte";
  import recipes from "./_recipes.js";

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

{#each oppskrifter as oppskrift}
  <recipes data={oppskrift.data()} />
{/each}
