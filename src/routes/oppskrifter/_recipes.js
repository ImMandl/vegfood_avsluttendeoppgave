let db; //ref til firebase
let oppskriftregister; // ref til collection i firestore
let oppskrifter = [];
let firebase;

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
});

export default oppskrifter;
