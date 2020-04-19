import oppskrifter from './_oppskrifter.js';

const contents = JSON.stringify(
	oppskrifter.map((oppskrift) => {
		return {
			title: oppskrift.title,
			slug: oppskrift.slug
		};
	})
);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
