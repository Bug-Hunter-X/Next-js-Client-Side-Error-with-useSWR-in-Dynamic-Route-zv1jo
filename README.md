# Next.js Client-Side Error with useSWR in Dynamic Route

This repository demonstrates a common issue in Next.js applications involving client-side errors when using the `useSWR` hook in dynamic routes.  The `useSWR` hook attempts to fetch data, but it causes an error because it's not available on the server during the initial render.

## Problem

The `pages/about.js` file attempts to fetch data using `useSWR('/api/data')`.  However, this call is made on both the server and the client.  Since `useSWR` is a client-side hook, the server-side rendering attempt fails, causing an error once the page is loaded in the browser.

## Solution

The solution is to ensure that data fetching only happens on the client-side.  We can achieve this using conditional rendering or other techniques that prevent server-side execution of the `useSWR` hook.  See `bugSolution.js` for a working implementation.