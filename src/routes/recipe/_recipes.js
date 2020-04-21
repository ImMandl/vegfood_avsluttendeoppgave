const recipes = [
	{
		title: 'Muffin frokokst',
		slug: 'muffin-frokost',
		kategori: 'Vegetar',
		lengde: '45 minutter',
		grad: 'Medium',
		type: 'dessert',
		tid: '09.05, 21.04.2020',
		forfatter: 'Amund Bjørnstad',
		prdukter: [
			{
				title: 'Tinemelk',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Ftinemelk.png?alt=media&token=8059dd39-437e-45c9-bb5d-2b7784dc3a7f'
			},
			{
				title: 'TINE Kremgo ananas',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fkremgo.png?alt=media&token=55f37516-0e7b-4e76-9610-a853c1e9b637'
			}
		],
		ingredienser: [
			{
				title: 'Egg',
				antall: 2,
				mengde: 'stk'
			},
			{
				title: 'Sukker',
				antall: 2,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Du trenger 12 vanlige muffinsformer. Sett stekeovnen på 190 °C.'
			},
			{
				steg:
					'Visp egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
			},
			{
				steg:
					'Tilsett smak etter eget ønske (bærsmak, sjokoladesmak eller gulrotkakesmak). Fordel røren i muffinsformene og stek dem i 20 - 25 minutter.'
			},
			{
				steg:
					'Pynt muffinsene med melisglasur, gjerne farget med konditorfarge, og pynt med nøtter, kakepynt eller godteri som for eksempel Nonstop.'
			}
		],
		tips:
			'Lag en stor porsjon med deig som du deler og tilsetter ulike smaksvarianter. Så får barna litt av hvert å velge mellom.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/muffins.jpg?alt=media&token=4ae64cb9-0334-43e3-bed0-d8f9e409e0cf',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		title: 'Frisk sommersalat',
		slug: 'frisk-sommersalat',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'smårett',
		tid: '09.05, 21.04.2020',
		forfatter: 'Ola Nordmann',
		prdukter: [
			{
				title: 'Tinemelk',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Ftinemelk.png?alt=media&token=8059dd39-437e-45c9-bb5d-2b7784dc3a7f'
			},
			{
				title: 'TINE Kremgo ananas',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fkremgo.png?alt=media&token=55f37516-0e7b-4e76-9610-a853c1e9b637'
			}
		],
		ingredienser: [
			{
				title: 'Egg',
				antall: 2,
				mengde: 'stk'
			},
			{
				title: 'Sukker',
				antall: 2,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Du trenger 12 vanlige muffinsformer. Sett stekeovnen på 190 °C.'
			},
			{
				steg:
					'Visp egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
			},
			{
				steg:
					'Tilsett smak etter eget ønske (bærsmak, sjokoladesmak eller gulrotkakesmak). Fordel røren i muffinsformene og stek dem i 20 - 25 minutter.'
			},
			{
				steg:
					'Pynt muffinsene med melisglasur, gjerne farget med konditorfarge, og pynt med nøtter, kakepynt eller godteri som for eksempel Nonstop.'
			}
		],
		tops:
			'Lag en stor porsjon med deig som du deler og tilsetter ulike smaksvarianter. Så får barna litt av hvert å velge mellom.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/anna-pelzer-IGfIGP5ONV0-unsplash.jpg?alt=media&token=032fe696-149e-48f7-a053-1e32f9714c60',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	}
];

recipes.forEach((recipe) => {
	recipe.html = recipe.html.replace(/^\t{3}/gm, '');
});

export default recipes;
