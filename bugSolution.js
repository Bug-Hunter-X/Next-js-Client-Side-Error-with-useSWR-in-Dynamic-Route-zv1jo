```javascript
// pages/about.js
import useSWR from 'swr';

export default function About() {
  const { data, error, isLoading } = useSWR('/api/data');

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'data from api' });
}
```