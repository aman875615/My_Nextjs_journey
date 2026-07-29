import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 420, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Welcome</h1>
      <p>Go to the registration page to sign up.</p>
      <Link href="/register">Register now</Link>
    </main>
  );
}
