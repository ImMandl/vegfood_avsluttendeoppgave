<script>
  // viser bare vegetar
  const vegetarOppskrifter = recipes.filter(
    recipes => recipes.kategori === "Vegetar"
  );

  // viser ikke vegetar
  const ikkeVegetarOppskrifter = recipes.filter(
    recipes => recipes.kategori !== "Vegetar"
  );

  // viser både vegetar og vegan
  const vegetarOgVegan = recipes.filter(
    recipes => recipes.kategori === "Vegetar" || "vegan"
  );
  console.log(vegetarOgVegan);

  // søk
  const oppskrifter = recipes.filter(
    (recipes = recipes.search("legg in hva som skal søkes her") > -1)
  );

  // filter funksjon jeg trenger
  tagg1 = "vegetar";
  tagg2 = "Vegan";

  const tags = recipes.filter(
    recipes => recipes.tags.includes(tagg1) || recipes.includes(tagg2)
  );

  let tagger = ["vegetar", "vegan"];

  const oppskriftTags = recipes.filter(recipes => {
    let funnet = false;

    for (const tagg of tagger) {
      if (recipes.tagger.includes(tagg)) {
        funnet = true;
      }
    }

    return funnet;
  });

  /*   const byggTagger = () => {
      tagger = []
      for(hver sjekkboks) {

      }
  } */
</script>
