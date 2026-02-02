"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./loader.module.css";

export default function RouteLoader() {
    const pathname = usePathname();
    const videoRef = useRef(null);

    const soundEnabledRef = useRef(false);
    const [soundEnabledUI, setSoundEnabledUI] = useState(false);

    const [show, setShow] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("soundEnabled") === "true";
        soundEnabledRef.current = saved;
        setSoundEnabledUI(saved);
    }, []);

    const hide = () => {
        setFade(true);
        setTimeout(() => setShow(false), 400);
    };

    // Show loader on every route change
    useEffect(() => {
        setShow(true);
        setFade(false);

        // reset video state when it mounts
        const t = setTimeout(() => {
        const v = videoRef.current;
        if (!v) return;
        v.currentTime = 0;
        v.volume = 1;
        v.muted = !soundEnabledRef.current;
        }, 0);

        // fallback so it never gets stuck
        const fallback = setTimeout(hide, 2000);

        return () => {
        clearTimeout(t);
        clearTimeout(fallback);
        };
    }, [pathname]);

    const toggleSound = async () => {
        const next = !soundEnabledRef.current;

        // turning OFF: instantly mute current video to avoid any blip
        if (!next && videoRef.current) videoRef.current.muted = true;

        // turning ON: user gesture “unlocks” audio for future plays
        if (next) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
            const ctx = new AudioContext();
            await ctx.resume();
            await ctx.close();
            }
        } catch {}
        }

        soundEnabledRef.current = next;
        localStorage.setItem("soundEnabled", String(next));
        setSoundEnabledUI(next);
    };

    return (
        <>
        {show && (
            <div className={`${styles.overlay} ${fade ? styles.fadeOut : ""}`}>
            <video
                key={pathname}                 // remount every route
                ref={videoRef}
                className={styles.video}
                src="/loading.mp4"
                autoPlay
                playsInline
                preload="auto"
                muted={!soundEnabledRef.current}
                onEnded={hide}
                onError={hide}
            />
            </div>
        )}

        {/* Button only on home; remove condition if you want everywhere */}
        {pathname === "/" && (
            <button className={styles.soundButton} onClick={toggleSound}>
            {soundEnabledUI ? "Sound On!" : "Sound Off :("}
            </button>
        )}
        </>
    );
}
