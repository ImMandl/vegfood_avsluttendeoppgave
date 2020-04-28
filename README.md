# vegfood_avsluttendeoppgave
 
VegFood is a website full of vegeterian and vegan recipes. It's  built using <a href="https://sapper.svelte.dev/">sapper</a>. Sapper is a framework for building extremely high-performance web apps based on <a href="https://svelte.dev//">svelte</a>. Svelte is a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.

## Setup

### Demo
Go to <a href="#">demo</a>

### Download
Clone or download the file, then run:
```bash
npm run dev
```

## Structure

Files in ./src/route uses component from ./src/components to hold their content. The route files containt minimal html and css, exception can be made for files in ./src/route/recipes and ./src/route/faqs.

Images, graphics, fonts and other such items are kept in their own folders inside ./static Exception is the favicon wish is based in at the top level of ./static.

This site...
- uses <a href="https://firebase.google.com/docs/auth">Firebase Authentication</a> for log in.
- uses <a href="https://openweathermap.org/">OpenWeather</a> to fetch data on weather forecast.
- uses <a href="https://svelte.dev/docs#onMount">OnMount</a> when fetching data from firebase and weather api.
- uses <a href="https://svelte.dev/docs#svelte_store">Svelte store</a> to keep favorited recipes.
- uses <a href="https://github.com/Schum123/svelte-loading-spinners#svelte-loading-spinners">Svelte-loading-spinners</a> to show when items is loading.
- uses <a href="https://github.com/beyonk-adventures/svelte-carousel#svelte-carousel">Svelte Carousel</a> for image carousels. This is used for both the heading on the frontpage and for the categories.
- uses <a href="https://github.com/joeattardi/svelte-tabs#svelte-tabs">Svelte tabs</a> on the login page to seperate login and registration.

### Styling

In ./static there is a global css file. If important css is used in several places it will be placed here.