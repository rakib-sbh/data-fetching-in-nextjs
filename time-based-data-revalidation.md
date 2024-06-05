## Revalidation

- Revalidation is the process of purging the Data Cache and re-fetching the latest data
- ### Time-based revalidation
  - Next.js automatically revalidate data after a certain amount of time has passed
  - We can set the revalidate route segment configuration to establish the default revalidation time for a layout or page: `export const revalidate = 10`
  - Regarding the revalidation frequency, the lowest revalidate time across each layout and page of a single route will determine the revalidation frequency of the entire route
