
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 style={{ 
            color: '#5C82B9', 
            fontWeight: 700, 
            fontSize: '5rem', 
            margin: '0.8rem' }}>Hi there, I'm Emma!
          </h1>
          <img src="/emma1.jpeg" alt="Photo of Emma" height="500px" />
        </div>
        <div className={styles.description}>
          <h2 style={{ 
            fontWeight: 700, 
            fontSize: '1.4rem', 
            margin: '0.8rem' }}>Welcome to my Portfolio :)
          </h2>
        </div>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>About</a>
          <a href="/projects" className={styles.link}>Projects</a>
        </div>
      </main>
    </div>
  );
}
