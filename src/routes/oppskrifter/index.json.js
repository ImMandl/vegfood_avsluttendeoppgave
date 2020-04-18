import oppskrifter from './_recipes.js';

const contents = JSON.stringify(
	oppskrifter.map((oppskrift) => {
		return {
			navn: oppskrift.navn
		};
	})
);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
