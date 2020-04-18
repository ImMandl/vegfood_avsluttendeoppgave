import oppskrifter from './_recipes.js';

const lookup = new Map();
oppskrifter.forEach((oppskrift) => {
	lookup.set(oppskrift.slug, JSON.stringify(oppskrift));
});

export function get(req, res, next) {
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(
			JSON.stringify({
				message: `Not found`
			})
		);
	}
}
