import Link from 'next/link';
import useSWR from 'swr';

export default function Home() {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error(
        'An error occurred while fetching the data error'
      );
      throw error;
    }
    return res.json();
  };

  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts/1',
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <h1>hello {data.id}</h1>
      <Link href='/2'>
        <a>go 2</a>
      </Link>
    </div>
  );
}
