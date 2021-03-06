# vegfood_avsluttendeoppgave
 
VegFood is a website with vegeterian and vegan recipes. It's  built using <a href="https://sapper.svelte.dev/">sapper</a>. Sapper is a framework for building extremely high-performance web apps based on <a href="https://svelte.dev//">svelte</a>. Svelte is a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.

**All recipes are placeholders. This website is made for my exam at Fagskolen Kristiania. The most filled out recipe is "Muffin frokokst". Website is in norwegian.


## Setup

### Demo
Go to <a href="https://vegfood-avsluttendeoppgave.now.sh/">demo</a> or <a href="https://vegfood-avsluttendeoppgave.now.sh/">this other demo</a>


### Download
Clone or download the file, then run:
```bash
npm i
#then
npm start
```


## Structure

Files in ./src/route uses component from ./src/components to hold their content. The route files contain minimal html and css, exception are made for files in ./src/route/recipes and ./src/route/faqs.

Images, graphics, fonts and other such items are kept in their own folders inside ./static. Exception is the favicon wish is based in at the top level of ./static. A few images are fetched by url. All images for recipes are fetched with url from firestore.

In ./static there is a global css file. If important css is used in several places it will be placed here.

This site...
- uses <a href="https://firebase.google.com/docs/auth">Firebase Authentication</a> for log in.
- uses <a href="https://svelte.dev/docs#onMount">OnMount</a> when fetching data from firebase.
- uses <a href="https://svelte.dev/docs#svelte_store">Svelte store</a> to keep favorited recipes and multiply ingredients on the detail page for recipes. Favorited recipes will reset if you refresh the page.
- uses <a href="https://github.com/Schum123/svelte-loading-spinners#svelte-loading-spinners">Svelte-loading-spinners</a> to show when items is loading.
- uses <a href="https://github.com/beyonk-adventures/svelte-carousel#svelte-carousel">Svelte Carousel</a>. Is used for categories on frontpage to help make the site easily responive.
- uses <a href="https://www.npmjs.com/package/svelte-scrollto">Svelte-scrollto</a> to scroll to top after pressed previous or next on recipe list page.


## Know issues

- If you are on a slow internet you might have to wait a bit before moving around the page or you can get error 500 or that nothing happens the first time you enter the page.
- If you are having trouble with firestore authentication when viewing the page try to refresh the site. Mostly a problem when viewing the page on localhost.


## Tip for sapper

If you want to use external components in sapper use npm i -D name-of-plugin. This install the package to devDependencies instead of dependencies which will cause it to get bundled (and therefore compiled) with your app. 

```bash
npm install -D @sveltejs/svelte-virtual-list
```

Explained well <a href="https://github.com/sveltejs/sapper-template#using-external-components">here</a>