const recipes = [
	{
		id: '1',
		title: 'Muffin frokokst',
		slug: 'muffin-frokost',
		kategori: 'Vegetar',
		lengde: '45 minutter',
		grad: 'Medium',
		type: 'frokost',
		tid: '21.04.2020',
		forfatter: 'Amund Bjørnstad',
		stikkord: [ 'vegetar', 'frokost' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fmuffins.jpg?alt=media&token=3b3e886b-9820-45b9-84c8-99fb4ce68ad4',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '2',
		title: 'Søtpotet fries',
		slug: 'sotpotet-fries',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'smårett',
		tid: '22.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'smårett' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fsotpotet-fries.jpg?alt=media&token=2305e4e6-f431-4986-9771-974f11aef033',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '3',
		title: 'Honning, banan og blåbær smørbrød',
		slug: 'honning-banan-og-blaabaer-smorbrod',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'frokost',
		tid: '18.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'frokost' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fsmorbrod.jpg?alt=media&token=90118e74-c7f3-4197-b88d-d46d7b690408',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '4',
		title: 'Curry suppe',
		slug: 'cury-suppe',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'middag',
		tid: '28.03.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'middag' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fcurry-suppe.jpg?alt=media&token=5a823c96-e7a8-4f21-be01-cdd5b831a359',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '5',
		title: 'Enkel skjokolade og vanilje kake',
		slug: 'enkel-skjokolade-og-vanilje-kake',
		kategori: 'Vegetar',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'dessert',
		tid: '02.01.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'dessert' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fsmaa-kaker.jpg?alt=media&token=4b3b8b32-adf5-474a-85c3-474fa0f39ece',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '6',
		title: 'Frisk sommersalat',
		slug: 'frisk-sommersalat',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'smårett',
		tid: '27.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'smårett' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Ffrisk-sommersalat.jpg?alt=media&token=cedee9ae-9033-4b0c-8929-efb8ef12a9ec',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '7',
		title: 'Eggsalat',
		slug: 'eggsalat',
		kategori: 'Vegetar',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'smårett',
		tid: '04.02.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'smårett' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Feggsalat.jpg?alt=media&token=06de8cfd-a407-4785-a5d8-77320907c4dd',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '8',
		title: 'Bær og kjeks',
		slug: 'baer-og-kjeks',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'niste',
		tid: '12.01.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'niste' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fkjeks-og-baer.jpg?alt=media&token=dfd86039-fe38-4ba3-849b-93596bc75a21',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '9',
		title: 'Små dessert kaker',
		slug: 'smaa-dessert-kaker',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'dessert',
		type: 'smårett',
		tid: '14.01.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'dessert' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fdessert-kaker.jpg?alt=media&token=384aea5c-ad27-4022-807a-e1602a3cb2d7',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '10',
		title: 'Blåbær pannekaker',
		slug: 'blaabaer-pannekaker',
		kategori: 'Vegetar',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'frokost',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'frokost' ],
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
					'Vips egg og sukker til lett og porøs eggedosis. Smelt smøret og bland det med melken. Ha det i eggedosisen. Bland det tørre og ha det i deigen til slutt.'
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
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fpannekaker.jpg?alt=media&token=46c63efc-2781-4b50-96d2-d09cc5352920',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	}
];

recipes.forEach((recipe) => {
	recipe.html = recipe.html.replace(/^\t{3}/gm, '');
});

export default recipes;
