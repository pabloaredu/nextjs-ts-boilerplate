## The Answer Pablo Arellano - Atolio

This project is built with Next.js, which requires Node.js version 18 or higher.

- Sync your Node version by running:

```bash
nvm use
```

- Install dependencies

```
npm install
```

Start the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

This project uses Next.js, a framework that automatically creates routes by adding folders with specific pages into the pages directory. To create an API endpoint, simply add a directory called api, and each file within will represent an endpoint containing its corresponding handler.

** Client Side **

- Home: Search bar to filter quotes (pages/index.tsx).
- Bookmarks: Saved quotes.
- Library: All available quotes.
- quotes/:id: Individual page for each quote.

** Api **

/search: Search and filter based on user input (GET).
/quotes: Retrieve all available quotes (GET).
/bookmarks: Retrieve saved quotes (GET).
/save-quote: Save a specific quote into bookmarks (POST).

To learn more about Next.js, refert to Next.js docs:

- [Next.js Documentation](https://nextjs.org/docs)

## Why Next.js

I chose to use React and Next.js for this project because I’m familiar with them. Next.js is one of my favorite frameworks. It’s easy to set up, provides automatic routing, and allows for both server and client code in the same directory. It also supports server-side rendering, which isn’t needed for this project but is still a nice feature.

I enjoy working with Next.js, especially for building MVPs (Minimum Viable Products), so I decided to use it for this test.

Initially, I tried to use Ant Design (antd) for its design, but setting it up became difficult after version 13. Therefore, I switched to Material-UI because it's easier to use.

## Considerations

I modified the data structure to make it easier to use. Now, each quote is stored as an object with an ID instead of just a string. This change helps organize additional information (metadata) about each quote and makes them easier to find.

For simplicity, I used plain numbers for the IDs, but we could use UUIDs or slugs if we need more readable links.

To store data and mimic a database, I followed the original server's suggestion for the test. I saved the data into JSON files:

Saved quotes: data/bookmarks.json
All quotes: data/quotes.json

Although bookmarks.json might duplicate data from quotes.json, this approach speeds up data retrieval and improves the user experience, especially with a large dataset.

I adhered to React principles by keeping display components separate from functionality, which is why custom hooks for retrieving and saving data are in src/hooks.

Additionally, I used local storage to maintain search terms and results if a user refreshes the page, ensuring continuity in their search experience.

We could add loading indicators for improvements. However, with the small amount of data we have, they wouldn't be noticeable. That's why I didn't include them in the hooks. Also, since this is a small test, I didn't add testing or detailed error handling.
