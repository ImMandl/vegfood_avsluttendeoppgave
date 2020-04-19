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

database();

oppskrifter.forEach((oppskrift) => {
	oppskrift.html = oppskrift.html.replace(/^\t{3}/gm, '');
}); */

const oppskrifter = [
	{
		title: 'Hvem lager oppskriftene?',
		slug: 'hvem-lager-oppskriftene',
		html: `
			<p>Proin vulputate sodales vulputate. Vestibulum tincidunt vel leo ut auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a facilisis nisi. Pellentesque vestibulum commodo tortor eget tempor. </p>
		`
	},

	{
		title: 'Hvorfor mener dere at vi ikke skal spise kjøtt?',
		slug: 'hvorfor-mener-dere-at-vi-ikke-skal-spise-kjøtt',
		html: `
			<p>Vestibulum vel venenatis purus. Cras pulvinar ante condimentum, commodo felis eget, vestibulum lacus. Etiam nec malesuada metus. Praesent feugiat, risus sit amet commodo pretium, leo enim facilisis quam, eu dapibus felis metus eu libero.</p>
	`
	}
];

oppskrifter.forEach((oppskrift) => {
	oppskrift.html = oppskrift.html.replace(/^\t{3}/gm, '');
});

export default oppskrifter;
