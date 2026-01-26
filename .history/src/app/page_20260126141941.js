
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 style={{ fontWeight: 700, fontSize: '3rem', color: '#5C82B9', margin: '0.8rem' }}>Hi, I'm Emma!</h1>
          <p style={{ 
            color: '#5C82B9', 
            fontWeight: 700, 
            fontSize: '1.2rem', 
            margin: '0.8rem' }}>
              Welcome to my Portfolio :)
          </p>
        </div>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>About</a>
          <a href="/projects" className={styles.link}>Projects</a>
        </div>
      </main>
    </div>
  );
}
