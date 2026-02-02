"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./loader.module.css";

export default function HomeLoader({
    fallbackMs = 2500,
    onSoundBlocked = () => {},
    }) {
    const videoRef = useRef(null);
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const hide = () => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 400); // match CSS transition
    };

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        const fallback = setTimeout(hide, fallbackMs);

        (async () => {
        try {
            // Try autoplay WITH sound
            v.muted = false;
            v.volume = 1;
            await v.play();
            onSoundBlocked(false);
        } catch (e) {
            // Autoplay with sound blocked -> fall back to muted autoplay
            onSoundBlocked(true);
            try {
            v.muted = true;
            await v.play();
            } catch {
            hide();
            }
        }
        })();

        return () => clearTimeout(fallback);
    }, [fallbackMs, onSoundBlocked]);

    if (!visible) return null;

    return (
        <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ""}`}>
        <video
            ref={videoRef}
            className={styles.video}
            src="/loading.mp4"
            autoPlay
            playsInline
            preload="auto"
            onEnded={hide}
        />
        </div>
    );
}
