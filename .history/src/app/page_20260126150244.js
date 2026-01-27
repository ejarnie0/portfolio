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
        <div className={styles.intro}>
          <h1 style={{ 
            color: '#5C82B9', 
            fontWeight: 700, 
            fontSize: '3rem', 
            margin: '0.8rem' }}>Hi there, I'm Emma!
          </h1>
          <img
            src="/emma1.jpeg"
            alt="Photo of Emma"
            height="300px"
            className={fadeInFirst ? styles["fade-in"] : ""}
            style={{ transform: 'rotate(-10deg)' }}
          />
          <img
            src="/kenai.JPG"
            alt="Photo of my dog Kenai"
            height="300px"
            className={fadeInSecond ? styles["fade-in"] : styles["hidden-until-fade"]}
            style={{ transform: 'rotate(10deg)' }}
          />
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
