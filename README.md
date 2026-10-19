
# Next.js Rendering Demo

## Objective
To implement Server-Side Rendering in Next.js and compare SSR, CSR, and SSG.

## Technologies
- Next.js
- React
- TypeScript
- JSONPlaceholder API

## SSR Implementation
The application fetches post data according to the dynamic ID in the URL.

Example: /ssr/2

The page displays the post title, body, post ID, and user ID.

## SSR vs CSR vs SSG

### SSR
HTML server par har request ke waqt generate hota hai.
Best for frequently changing data.

### CSR
Data browser mein JavaScript ke through fetch aur render hota hai.
Best for interactive dashboards.

### SSG
HTML pehle se build time par generate hota hai.
Best for blogs and documentation.

## Conclusion
SSR fresh data ke liye useful hai.
CSR interactive applications ke liye useful hai.
SSG fast aur mostly static websites ke liye useful hai.
