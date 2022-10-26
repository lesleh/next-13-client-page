import Link from "next/link";

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/working">Working Page</Link>
      </li>
      <li>
        <Link href="/broken">Broken Page</Link>
      </li>
    </ul>
  );
}
