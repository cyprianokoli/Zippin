import Link from "next/link";
import Head from "next/head";

export default function AuthComplete() {
  const appScheme = "zippin://auth-complete";
  return (
    <>
      <Head>
        <title>Zippin — Auth Complete</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main style={styles.wrapper}>
        <div style={styles.card}>
          <h1 style={styles.title}>You’re all set 🎉</h1>
          <p style={styles.subtitle}>Your authentication step was completed successfully.</p>
          <a href={appScheme} style={styles.primary}>Open in the Zippin App</a>
          <div style={{height:10}} />
          <Link href="/" style={styles.secondary}>Back to Home</Link>
          <div style={{height:6}} />
          <Link href="/login" style={styles.link}>Go to Login</Link>
        </div>
      </main>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: { minHeight: "100vh", display: "grid", placeItems: "center", background: "#fff", padding: 24 },
  card: { width: "100%", maxWidth: 480, background: "#F8F8FA", borderRadius: 16, padding: 24, boxShadow: "0 8px 24px rgba(0,0,0,0.06)", textAlign: "center" },
  title: { margin: 0, fontSize: 28, color: "#7B2CBF" },
  subtitle: { margin: "8px 0 20px", color: "#555" },
  primary: { display: "inline-block", background: "#7B2CBF", color: "#fff", padding: "12px 16px", borderRadius: 10, textDecoration: "none", fontWeight: 700 },
  secondary: { display: "inline-block", background: "#EEE", color: "#7B2CBF", padding: "10px 14px", borderRadius: 10, textDecoration: "none", fontWeight: 700 },
  link: { color: "#5A189A", textDecoration: "underline" },
};
