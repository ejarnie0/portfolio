import Image from "next/image";
import styles from "./projectLayout.module.css";

export default function ProjectLayout({
    title,
    subtitle,
    heroImage,
    heroAlt = "",
    overviewTitle = "Overview",
    overview,
    sections = [],
    gallery = [],
}) {
    return (
        <main className={styles.page}>
        {/* top subtitle paper */}
        <div className={styles.topRow}>
            <div className={styles.subtitlePaper}>
            <h1 className={styles.h1}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>

        {/* text left, image right */}
        <section className={styles.hero}>
            <div className={styles.paper}>
            <h2 className={styles.sectionTitle}>{overviewTitle}</h2>
            <p className={styles.body}>{overview}</p>
            </div>

            <div className={styles.media}>
            <Image
                src={heroImage}
                alt={heroAlt}
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
            />
            </div>
        </section>

        {/* “images of final project” */}
        {gallery.length > 0 && (
            <section className={styles.gallery}>
            <h2 className={styles.galleryTitle}>Images of Final Project</h2>
            <div className={styles.galleryGrid}>
                {gallery.map((src, i) => (
                <div key={src + i} className={styles.galleryItem}>
                    <Image src={src} alt="" fill className={styles.image} sizes="300px" />
                </div>
                ))}
            </div>
            </section>
        )}

        {/* alternating sections */}
        {sections.map((s, i) => (
            <section
            key={`${s.title}-${i}`}
            className={`${styles.split} ${s.flip ? styles.flip : ""}`}
            >
            <div className={styles.media}>
                <Image
                src={s.image}
                alt={s.alt ?? ""}
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 50vw"
                />
            </div>

            <div className={styles.paper}>
                {s.tag && <div className={styles.tag}>{s.tag}</div>}
                <h2 className={styles.sectionTitle}>{s.title}</h2>
                <p className={styles.body}>{s.body}</p>
            </div>
            </section>
        ))}
        </main>
    );
}
