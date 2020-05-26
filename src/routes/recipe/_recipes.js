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
				title: 'TINE Meierismør',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fmeierism%C3%B8r.jpeg?alt=media&token=9f1b220f-5d41-47b8-87aa-4e8b0088ced5'
			},
			{
				title: 'Prior frokostegg',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fegg.jpeg?alt=media&token=0fb650ee-c70f-4879-8640-80a675eb884e'
			},
			{
				title: 'TINE Helmelk',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fhelmelk.jpeg?alt=media&token=1aaf6942-833e-4470-8d7b-09c16751fc89'
			},
			{
				title: 'Siktet hvetemel',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fhvetemel.jpeg?alt=media&token=63df36d4-b0cf-496d-8399-fdd1478ad09d'
			},
			{
				title: 'Bakepulver',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fbakepulver.jpeg?alt=media&token=4e0b8be6-20f2-456d-98bc-fb410d46f78a'
			},
			{
				title: 'Vaniljekrem',
				bilde:
					'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/Produkter%2Fvaniljekrem.jpeg?alt=media&token=ad9eeccb-3a54-4738-8816-fe9bda283312'
			}
		],
		ingredienser: [
			{
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			},
			{
				title: 'Bakepulver',
				antall: 2,
				mengde: 'ts'
			},
			{
				title: 'Vaniljekrem',
				antall: 5,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Sett stekeovnen på 225 °C, og finn frem muffinsformer og eventuelt muffinsbrett.'
			},
			{
				steg:
					'Smelt smøret. Visp egg og sukker luftig. Rør i melk og smeltet smør. Bland i mel og bakepulver og rør om.'
			},
			{
				steg: 'Fyll muffinsformene 3/4 fulle. Stek midt i ovnen i ca 15 minutter.'
			},
			{
				steg:
					'Avkjøl. Skjær toppen av hver muffins, og lag en grop som fylles med vaniljekrem. Pynt med noe godt.'
			}
		],
		tips: 'Klipp av et hjørne på pakken, og fyll vaniljekrem rett i muffinsene.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fmuffins.jpg?alt=media&token=5da63d86-7ce3-49d0-a005-77d79088ceb2',
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
				title: 'Søtpotet',
				antall: 2,
				mengde: 'stk'
			},
			{
				title: 'Olivenolje',
				antall: 1,
				mengde: 'ss'
			}
		],
		oppskrift: [
			{
				steg: 'Sett ovnen på 220 °C. Del potet i båter, vend med paprikapulver, salt, pepper og olje.'
			},
			{
				steg: 'Fordel potetbåtene i en langpanne og legg noe biter med smør utover.'
			},
			{
				steg: 'Stek i ovnen i ca. 25 minutter eller til potetbåtene er møre og gylne.'
			}
		],
		tips: 'Krydre til med det du er glad i for å få den smaken du liker.',
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
		kategori: 'Vegetar',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'frokost',
		tid: '18.04.2020',
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			},
			{
				title: 'Bakepulver',
				antall: 2,
				mengde: 'ts'
			},
			{
				title: 'Vaniljekrem',
				antall: 5,
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			},
			{
				title: 'Bakepulver',
				antall: 2,
				mengde: 'ts'
			},
			{
				title: 'Vaniljekrem',
				antall: 5,
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
				antall: 1,
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			},
			{
				title: 'Bakepulver',
				antall: 2,
				mengde: 'ts'
			},
			{
				title: 'Vaniljekrem',
				antall: 5,
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
				antall: 1,
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
		title: 'Små dessertkaker',
		slug: 'smaa-dessertkaker',
		kategori: 'Vegan',
		lengde: '20 minutter',
		grad: 'Vanskelig',
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			},
			{
				title: 'Bakepulver',
				antall: 2,
				mengde: 'ts'
			},
			{
				title: 'Vaniljekrem',
				antall: 5,
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
	},
	{
		id: '11',
		title: 'Pasta Alfredo',
		slug: 'pasta-alfredo',
		kategori: 'Vegetar',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'middag',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'middag' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fpasta-alfredo.jpg?alt=media&token=9763c398-2b9a-4c36-9df6-c7a1f2b6e4bd',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '12',
		title: 'Grønnsakslasagne',
		slug: 'gronnsakslasagne',
		kategori: 'Vegetar',
		lengde: '45 minutter',
		grad: 'Enkel',
		type: 'middag',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'middag' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fgronnsakslasagne.jpg?alt=media&token=6cbfb159-259f-4271-921a-1db0ae9dc78a',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '13',
		title: 'Avocado Toast',
		slug: 'avocado-toast',
		kategori: 'Vegetar',
		lengde: '10 minutter',
		grad: 'Enkel',
		type: 'frokost',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'frokost', 'niste' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Favocado-toast.jpg?alt=media&token=acb6128e-4f58-4f5a-9e9d-26bb811c24e9',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '14',
		title: 'Italiensk Pai',
		slug: 'italiensk-pai',
		kategori: 'Vegetar',
		lengde: '75 minutter',
		grad: 'Medium',
		type: 'middag',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'middag' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fitaliensk-pai.jpg?alt=media&token=2cc49520-2656-4261-9bcf-6c661748e145',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '15',
		title: 'Grønnsakssuppe',
		slug: 'gronnsakssuppe',
		kategori: 'Vegetar',
		lengde: '30 minutter',
		grad: 'Enkel',
		type: 'smårett',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'smårett', 'middag' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fgronnsakssuppe.jpg?alt=media&token=7a8ead34-3741-4f88-9909-3d52f27628bf',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '16',
		title: 'Vegetarisk Pastagrateng',
		slug: 'vegetarisk-pastagrateng',
		kategori: 'Vegetar',
		lengde: '45 minutter',
		grad: 'Enkel',
		type: 'middag',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'middag' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fvegetarisk-pastagrateng.jpg?alt=media&token=4085e151-5b2a-4624-a390-0acd6a567324',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '17',
		title: 'Rotgrønnsaksform Med Byggryn',
		slug: 'rotgrønnsaksform-med-byggryn',
		kategori: 'Vegan',
		lengde: '40 minutter',
		grad: 'Enkel',
		type: 'middag',
		tid: '21.04.2020',
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fgronnsaksform-med-byggryn.jpg?alt=media&token=54ee6f65-418e-4101-83df-a311a443869b',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '18',
		title: 'Vegetarpizza Med Cottage Cheese',
		slug: 'vegetarpizza-med-cottage-cheese',
		kategori: 'Vegetar',
		lengde: '40 minutter',
		grad: 'Enkel',
		type: 'middag',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'middag' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fvegetarpizza-med-cottage-cheese.jpg?alt=media&token=528d8e1d-04d0-45be-b147-e30cad199a28',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '19',
		title: 'Dal',
		slug: 'dal',
		kategori: 'Vegetar',
		lengde: '90 minutter',
		grad: 'Medium',
		type: 'middag',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'middag' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fdal.jpg?alt=media&token=964852a9-1b7e-4af1-86e5-673c47ffd824',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '20',
		title: 'Blings Med Grillede Grønnsaker',
		slug: 'blings-med-grillede-grønnsaker',
		kategori: 'Vegan',
		lengde: '15 minutter',
		grad: 'Medium',
		type: 'smårett',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'smårett', 'niste', 'frokost' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fblings-med-grillede-gronnsaker.jpg?alt=media&token=83980bd4-6a8a-4cc4-99dc-a3a6aea4093f',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '21',
		title: 'Tortilla-Rull Med Kikerter',
		slug: 'tortilla-rull-med-kikerter',
		kategori: 'Vegan',
		lengde: '40 minutter',
		grad: 'Medium',
		type: 'smårett',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegan', 'smårett', 'niste' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Ftortilla-rull-med-kikerter.jpg?alt=media&token=5521bdf1-ac1d-4619-9ea1-d4799cd1be52',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '22',
		title: 'Omelettrull Med Grønnsaker',
		slug: 'omelettrull-med-grønnsaker',
		kategori: 'Vegetar',
		lengde: '40 minutter',
		grad: 'Enkel',
		type: 'frokost',
		tid: '21.04.2020',
		forfatter: 'Ola Nordmann',
		stikkord: [ 'vegetar', 'frokost', 'smårett' ],
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fomelett-med-gronnsaker.jpg?alt=media&token=d629bb4f-0785-4aee-b279-93e917ff3c0a',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '23',
		title: 'Frukt med jordbær',
		slug: 'frukt-med-jordbør',
		kategori: 'Vegetar',
		lengde: '5 minutter',
		grad: 'Enkel',
		type: 'dessert',
		tid: '21.04.2020',
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fenkel-bakst-kake-og-dessert.jpg?alt=media&token=8737c559-d445-4002-8aa6-d72bd1b9e03c',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	},
	{
		id: '24',
		title: 'Dessert Med Basilikumjordbær',
		slug: 'dessert-med-basilikumjordbær',
		kategori: 'Vegetar',
		lengde: '20 minutter',
		grad: 'Enkel',
		type: 'dessert',
		tid: '21.04.2020',
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
				title: 'Meierismør',
				antall: 100,
				mengde: 'g'
			},
			{
				title: 'Egg',
				antall: 3,
				mengde: 'stk'
			},
			{
				title: 'Helmelk',
				antall: 2,
				mengde: 'dl'
			},
			{
				title: 'Hvetemel',
				antall: 4,
				mengde: 'dl'
			}
		],
		oppskrift: [
			{
				steg: 'Kok opp vann i en stor kjele.'
			},
			{
				steg:
					'Smelt smør i en middels stor kjele. Hell i fløte, og kok sakte opp. La dette koke på lav temperatur i rundt fem minutter. Rør av og til.'
			},
			{
				steg: 'Ha litt salt i kokevannet, og kok pasta som anvist på pakken. Hell vannet av pastaen.'
			},
			{
				steg:
					'Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland den nykokte pastaen inn i sausen, og server. Topp gjerne med ekstra parmesan og frisk basilikum.'
			}
		],
		tips: 'Legg gjerne noen skiver spekeskinke på retten rett før servering.',
		bilde:
			'https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/RecipePhotos%2Fdessert-med-bassilikum-jordb%C3%A6r.jpg?alt=media&token=d9f3e500-7250-4898-a447-758af1d0a620',
		html: `
			<p>Gjør frokosten til en fest med disse deilige muffinsene. Oppskriften er enkel så du trenger ikke å være en proff på kjøkkenet. Disse passer perfekt til en hyggelig morgen for familien.</p>
		`
	}
];

recipes.forEach((recipe) => {
	recipe.html = recipe.html.replace(/^\t{3}/gm, '');
});

export default recipes;
