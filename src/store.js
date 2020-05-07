import { writable } from 'svelte/store';

export const favorittArray = writable([]);
export const count = writable(1);
export const fav = writable([]);

let favs = new Set();

function createStore() {
	const { subscribe, set, update } = writable(favs);

	return {
		subscribe,
		set,
		update,
		toggleFavorite: (id) => {
			if (favs.has(id)) {
				favs.delete(id);
			} else {
				favs.add(id);
			}

			set(favs);
		}
	};
}

export const favorites = createStore();
