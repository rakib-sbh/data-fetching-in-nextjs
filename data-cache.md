## Data Cache

- ### What is data cache?
  - It is a server-side cache that persists the result of data fetched across incoming server requests and deployements
- ### Why is is required?
  - The data cache improves app performance and reduces costs by eliminating the need to re-fetch data from your data source with every request

## Opting Out of Caching

- For individual data fetches, you can opt out of caching by setting the `cache` option to `no-store`
- Once you specify the `no-store` option for a fetch request, subsequent fetch requests will also not be cached
- By default, Next.js will cache `fetch()` requests that occur before any dynamic functions (`cookies`, `headers()`, `searchParams()`) are used and will not cache requests found after dynamic functions.

## Request Memoization

- Request memoization is a technique that deduplicates requests for the same data within a single render pass
- This approach allows for re-use of data in a React Component tree, prevents redundant network calls and enhances performance
- For the initial request, data is fetched from an external source and the result is stored in memory
- Subsequent requests for the same data within the same render pass retrieve the result from the memory, bypassing the need to make thr request again
- This optimization not only enhances performance but also simplifies data fetching within a component tree
- When the same data is needed across different components in a route (in a `Layout`, `Page` and multiple components), it eliminates the need to fetch data at the top of the tree and pass props between components
- Instead, data can be fetched directly within the components that require it, without concerns about the performance implications of multiple network requests for the same data.
- Request memoization is a React feature, not specially a Next.js feature
- Memoization only applies to the GET method in fetch requests
- Memoization only applies within the React Component tree. It does not extend to fetch requests in Route Handlers as they are not part of the React Component tree
- For cases where fetch is not suitable(e.g.. some database clients, CMS clients, or GraphQL clients), we can use the React cache function to memoize functions
