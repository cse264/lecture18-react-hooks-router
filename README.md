# Lecture 18 In-Class Activity: Hooks and React Router

Work with a partner. We'll stop three times to talk about what people found, so when you get to a **Stop** line, finish what you're doing and wait for the rest of the class.

Today you're building the start of a ValleyEats website in React. The restaurants live in `public/restaurants.json`. They're made up, but they're shaped like the rows in the ValleyEats `restaurants` table. Later on we'll point this at a real Express API instead.

## Getting set up

1. Run `npm install`. You need Node 20.19 or newer (`node -v` to check).
2. Run `npm run dev` and open the address Vite prints, usually http://localhost:5173.
3. Open your browser's dev tools and keep the **Console** tab where you can see it. You'll need it in every part.

Everything you write today goes in `src/`. Vite reloads the page every time you save.

## Part 1: Loading data with useEffect (about 5 minutes)

Work in `src/pages/RestaurantList.jsx`.

- When the component first shows up, load the restaurants from `/restaurants.json` and list each restaurant's name and cuisine. The file is in `public/`, so `fetch('/restaurants.json')` works just like fetching from an API.
- Show `Loading...` until the data has arrived.

Once it works, put a `console.log` inside your effect. Then delete the dependency array (the `[]` at the end of your `useEffect`) and save. Watch the console for a few seconds. Then put the `[]` back.

**Stop.** What happened without the `[]`, and why? With the `[]` back in, how many times did your log print? Was that what you expected?

## Part 2: State from the user (about 4 minutes)

- Add a search box above the list. As you type, the list should only show restaurants whose name contains what you've typed, ignoring capitalization.
- Under the search box, show how many matched, like `Showing 3 of 12 restaurants`.

Then break one of the hook rules from lecture on purpose. Add this line inside an `if` that only runs once the restaurants have loaded, and save:

```js
const [test, setTest] = useState(0)
```

Look at the page and the console, then take it back out.

**Stop.** Did you make a separate piece of state for the filtered list, or work it out from the state you already had? Which one is better, and why? What did React say when `useState` was inside the `if`?

## Part 3: React Router (about 5 minutes)

- In `App.jsx`, set up a `BrowserRouter` with two routes: `/` shows `RestaurantList`, and `/about` shows `About`. Both should be nested inside `Layout`, so the nav bar shows on every page. `Layout.jsx` has a comment where the current page should go.
- Click back and forth between Restaurants and About a few times. Watch the console. `main.jsx` prints a message every time the whole app loads from scratch.
- Now change the two nav links in `Layout.jsx` from `<a>` to `Link`, and click around again.

**Stop.** What was different about clicking an `<a>` compared to a `Link`? What does that tell you about what the browser is doing in each case? One more: type something into the search box, go to About, and come back. Is your search still there? Why or why not?

## If you finish early

Stay on the part you're on and try one of these:

- Add a `/restaurants/:id` route that shows one restaurant, and make each name in the list a `Link` to it. (Look up `useParams`.)
- Add a catch-all route that shows a "Page not found" message for any URL you haven't set up.
- Make the search survive a trip to About and back. One way is to keep it in the URL, like `/?q=pizza`. (Look up `useSearchParams`.)
- Show each restaurant's price level as dollar signs (`$`, `$$`, `$$$`) instead of a number.

## Before you leave

Make sure both names are at the top of `App.jsx`, then commit and push before the end of class.
