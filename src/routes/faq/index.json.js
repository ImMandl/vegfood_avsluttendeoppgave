import faqs from './_faqs.js';

const contents = JSON.stringify(
	faqs.map((faq) => {
		return {
			title: faq.title,
			slug: faq.slug
		};
	})
);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
