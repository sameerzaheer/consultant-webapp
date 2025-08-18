export default function Home() {
  return (
    <main style={{ padding: "48px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Hello 👋</h1>
      <p style={{ marginBottom: 24 }}>
        This is a dummy Next.js site. Replace content later without touching DNS.
      </p>
      <a href="/api/health" style={{ textDecoration: "underline" }}>Health check</a>
    </main>
  );
}
