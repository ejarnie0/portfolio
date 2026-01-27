"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


export default function Home() {
  const [fadeInFirst, setFadeInFirst] = useState(false);
  const [fadeInSecond, setFadeInSecond] = useState(false);

  useEffect(() => {
    setFadeInFirst(true);
    const timer = setTimeout(() => {
      setFadeInSecond(true);
    }, 1200); // matches the fade-in animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
            <img
              src="/emma_logo.png"
              alt="Emma Jennings Logo"
              className={styles.logo}
              height="80px"
            />
          <h1 className={styles.title}
            style={{ 
              color: '#5C82B9', 
              fontWeight: 700, 
              fontSize: '3rem', 
              margin: '0.8rem' 
            }}>
              Hi there, I'm Emma!
          </h1>
        </div>
          <div className={styles.nav}>
            <a href="/projects" className={styles.link}>My Projects</a>
            <a href="/about" className={styles.link}>Beep Me</a>
          </div>
        <div className={styles.intro}>
          <img
            src="/emma1.jpeg"
            alt="Photo of Emma"
            height="300px"
            className={fadeInFirst ? styles["fade-in"] : ""}
            style={{ transform: 'rotate(-10deg)', 
              position: 'relative', 
              left: '45rem',
              }}
          />
          <img
            src="/kenai.JPG"
            alt="Photo of my dog Kenai"
            height="300px"
            className={fadeInSecond ? styles["fade-in"] : styles["hidden-until-fade"]}
            style={{ transform: 'rotate(10deg)',
              position: 'relative',
              left: '25rem',
              top: '-10rem',
            }}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Emma Jennings</p>
      </footer>
    </div>
  );
}
