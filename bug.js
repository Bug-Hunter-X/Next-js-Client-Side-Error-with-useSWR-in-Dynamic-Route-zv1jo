```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a client-side error
  const data = useSWR('/api/data'); 

  if (data.isLoading) {
    return <p>Loading...</p>;
  }
  if (data.isError) {
    return <p>Error: {data.error}</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data.data, null, 2)}</pre>
    </div>
  );
}
```