"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Footer from "./footer";
import HomeLoader from "./HomeLoader";
import loaderStyles from "./loader.module.css";

export default function Home() {
  const [soundBlocked, setSoundBlocked] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // remember choice (optional but nice)
  useEffect(() => {
    const saved = localStorage.getItem("soundEnabled");
    if (saved === "true") setSoundEnabled(true);
  }, []);

  const enableSound = async () => {
    // User gesture unlock attempt (helps for future audio/video)
    try {
      const AudioContext =
        window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        await ctx.resume();
        await ctx.close();
      }
    } catch {
      // ignore
    }

    localStorage.setItem("soundEnabled", "true");
    setSoundEnabled(true);
    setSoundBlocked(false);
  };

  return (
    <div className={styles.page}>
      <HomeLoader
        onSoundBlocked={(blocked) => {
          // If they previously enabled sound, don’t nag them
          if (!soundEnabled) setSoundBlocked(blocked);
        }}
      />

      {/* ✅ stays on home page after loader fades out */}
      {soundBlocked && !soundEnabled && (
        <button className={loaderStyles.soundButton} onClick={enableSound}>
          Enable sound
        </button>
      )}

      <main className={styles.main}>
        <div className={styles.description}>
          <h2 className={styles.h2}>Am I coming off as immature to you?</h2>
          <br />
          <p>
            I hope that how cool (and sometimes goofy) I am is coming across!
            <br />
            I love the study of art and design, I find it fascinating how humans
            interact with art, not only in our day to day lives, but how we make
            it a part of ourselves.
            <br />
            <br />
            I'm a Designer and Web Developer based in Vancouver, BC.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
