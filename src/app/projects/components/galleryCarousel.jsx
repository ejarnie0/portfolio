"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./galleryCarousel.module.css";

export default function GalleryCarousel({ images = [], altPrefix = "Gallery image" }) {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const slides = useMemo(
        () =>
        images
            .filter(Boolean)
            .map((item, i) => ({
            src: typeof item === "string" ? item : item.src,
            alt: typeof item === "string" ? `${altPrefix} ${i + 1}` : item.alt ?? `${altPrefix} ${i + 1}`,
            })),
        [images, altPrefix]
    );

    const total = slides.length;

    function scrollTo(i) {
        const el = trackRef.current;
        if (!el) return;
        const clamped = Math.max(0, Math.min(i, total - 1));
        const child = el.children?.[clamped];
        if (child) child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }

    function next() {
        scrollTo(index + 1);
    }

    function prev() {
        scrollTo(index - 1);
    }

    // Update index while user scrolls/swipes
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const onScroll = () => {
        const children = Array.from(el.children);
        const left = el.scrollLeft;

        // Find the closest slide to the left edge
        let best = 0;
        let bestDist = Infinity;
        children.forEach((child, i) => {
            const dist = Math.abs(child.offsetLeft - left);
            if (dist < bestDist) {
            bestDist = dist;
            best = i;
            }
        });

        setIndex(best);
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => el.removeEventListener("scroll", onScroll);
    }, [total]);

    if (total === 0) return null;

    return (
        <div className={styles.wrap} aria-label="Image gallery carousel">
        <div className={styles.viewport}>
            <div ref={trackRef} className={styles.track}>
            {slides.map((s, i) => (
                <div className={styles.slide} key={s.src + i}>
                <img className={styles.img} src={s.src} alt={s.alt} loading="lazy" />
                </div>
            ))}
            </div>

            {/* arrows */}
            <button
            type="button"
            className={styles.arrowLeft}
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous image"
            >
            ‹
            </button>
            <button
            type="button"
            className={styles.arrowRight}
            onClick={next}
            disabled={index === total - 1}
            aria-label="Next image"
            >
            ›
            </button>
        </div>

        {/* dots */}
        <div className={styles.dots} role="tablist" aria-label="Carousel pagination">
            {Array.from({ length: total }).map((_, i) => (
            <button
                key={i}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
            />
            ))}
        </div>
        </div>
    );
}
