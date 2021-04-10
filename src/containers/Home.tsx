import Link from 'next/link';

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/people'>
        <a>people</a>
      </Link>
    </div>
  );
}
