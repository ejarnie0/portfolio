
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 style={{ fontWeight: 700, fontSize: '2.5rem', color: '#000' }}>Emma Jennings</h1>
          <p style={{ color: '#222', fontSize: '1.2rem', marginTop: 8 }}>Portfolio Wireframe</p>
        </div>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>About</a>
          <a href="/projects" className={styles.link}>Projects</a>
        </div>
      </main>
    </div>
  );
}
