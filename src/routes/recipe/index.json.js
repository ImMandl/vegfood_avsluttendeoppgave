import recipes from './_recipes.js';

const contents = JSON.stringify(
	recipes.map((recipe) => {
		return {
			id: recipe.id,
			title: recipe.title,
			slug: recipe.slug,
			kategori: recipe.kategori,
			lengde: recipe.lengde,
			grad: recipe.grad,
			tid: recipe.tid,
			forfatter: recipe.forfatter,
			stikkord: recipe.stikkord,
			bilde: recipe.bilde,
			produkter: recipe.produkter,
			ingredienser: recipe.ingredienser,
			oppskrift: recipe.oppskrift,
			tips: recipe.tips
		};
	})
);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
