"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./loader.module.css";

export default function RouteLoader() {
    const pathname = usePathname();
    const videoRef = useRef(null);

    // Use a ref so changing sound doesn't trigger the route effect
    const soundEnabledRef = useRef(false);

    const [show, setShow] = useState(false);
    const [fade, setFade] = useState(false);

    // Just for button text/UI
    const [soundEnabledUI, setSoundEnabledUI] = useState(false);
    const [soundBlocked, setSoundBlocked] = useState(false);

    // Load saved sound preference once
    useEffect(() => {
        const saved = localStorage.getItem("soundEnabled") === "true";
        soundEnabledRef.current = saved;
        setSoundEnabledUI(saved);
    }, []);

    const hide = () => {
        setFade(true);
        setTimeout(() => setShow(false), 400);
    };

    // ✅ Only run loader on route changes (NOT on sound toggle)
    useEffect(() => {
        setShow(true);
        setFade(false);
        setSoundBlocked(false);

        const v = videoRef.current;
        if (!v) {
        hide();
        return;
        }

        // Reset and set mute based on preference *at the moment of navigation*
        v.currentTime = 0;
        v.volume = 1;
        v.muted = !soundEnabledRef.current;

        const p = v.play();
        if (p?.catch) {
        p.catch(async () => {
            // If sound was enabled but blocked, fall back to muted
            if (soundEnabledRef.current) {
            setSoundBlocked(true);
            try {
                v.muted = true;
                await v.play();
            } catch {
                hide();
            }
            } else {
            hide();
            }
        });
        }

        const fallback = setTimeout(hide, 2000);
        return () => clearTimeout(fallback);
    }, [pathname]);

    // ✅ Toggle only changes preference; does NOT replay the video
    const toggleSound = async () => {
        const next = !soundEnabledRef.current;

        if (next) {
        // User gesture "unlocks" audio for future plays
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
            const ctx = new AudioContext();
            await ctx.resume();
            await ctx.close();
            }
        } catch {
            // ignore
        }
        } else {
        // Turning sound OFF: immediately mute any currently playing loader video
        if (videoRef.current) videoRef.current.muted = true;
        }

        soundEnabledRef.current = next;
        localStorage.setItem("soundEnabled", String(next));
        setSoundEnabledUI(next);
        setSoundBlocked(false);
    };

    return (
        <>
        {show && (
            <div className={`${styles.overlay} ${fade ? styles.fadeOut : ""}`}>
            <video
                key={pathname}
                ref={videoRef}
                className={styles.video}
                src="/loading.mp4"
                autoPlay
                playsInline
                preload="auto"
                onEnded={hide}
                onError={hide}
            />
            </div>
        )}

        {/* Bottom-left toggle ONLY on home */}
        {pathname === "/" && (
            <button className={styles.soundButton} onClick={toggleSound}>
            {soundEnabledUI ? "Sound: On!" : "Sound: Off :("}
            {soundBlocked ? " (tap)" : ""}
            </button>
        )}
        </>
    );
}
