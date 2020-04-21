/* import firebase from '../../firebase.js';

let db; //ref til firebase
let oppskriftregister; // ref til collection i firestore
let oppskrifter = [];

const database = async () => {
	db = await firebase.firestore();
	oppskriftregister = await db.collection('Oppskrifter');

	// viser frem oppskriftene
	oppskriftregister.onSnapshot((snap) => {
		oppskrifter = snap.docs;
	});
};

database(); */

const oppskrifter = [
	{
		title: 'Muffin frokokst',
		slug: 'muffin-frokost',
		kategori: 'vegetar',
		tid: '09.05, 21.04.2020',
		forfatter: 'Amund Bjørnstad',
		html: `
			<p>Vegetar</p>
			<hr>
			<p>Proin vulputate sodales vulputate. Vestibulum tincidunt vel leo ut auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a facilisis nisi. Pellentesque vestibulum commodo tortor eget tempor. </p>
		`
	},
	{
		title: 'Frisk sommersalat',
		slug: 'frisk-sommersalat',
		kategori: 'vegan',
		tid: '08.32, 22.04.2020',
		forfatter: 'Ola Nordmann',
		html: `
			<p>Vegan</p>
			<hr>
			<p>Proin vulputate sodales vulputate. Vestibulum tincidunt vel leo ut auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a facilisis nisi. Pellentesque vestibulum commodo tortor eget tempor. </p>
		`
	}
];

oppskrifter.forEach((oppskrift) => {
	oppskrift.html = oppskrift.html.replace(/^\t{3}/gm, '');
});

export default oppskrifter;
