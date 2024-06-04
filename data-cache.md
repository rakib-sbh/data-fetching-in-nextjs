## Data Cache

- ### What is data cache?
  - It is a server-side cache that persists the result of data fetched across incoming server requests and deployements
- ### Why is is required?
  - The data cache improves app performance and reduces costs by eliminating the need to re-fetch data from your data source with every request

## Opting Out of Caching

- For individual data fetches, you can opt out of caching by setting the `cache` option to `no-store`
- Once you specify the `no-store` option for a fetch request, subsequent fetch requests will also not be cached
- By default, Next.js will cache `fetch()` requests that occur before any dynamic functions (`cookies`, `headers()`, `searchParams()`) are used and will not cache requests found after dynamic functions.
