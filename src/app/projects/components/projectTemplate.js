import Image from "next/image";
import styles from "./projectTemplate.module.css";

function renderParagraphs(value, className) {
    if (!value) return null;

    if (Array.isArray(value)) {
        return value.map((text, idx) => (
        <p key={idx} className={className}>
            {text}
        </p>
        ));
    }

    return <p className={className}>{value}</p>;
    }

    export default function ProjectTemplate({ project }) {
    return (
        <main className={styles.page}>
        {/* subtitle paper */}
        <div className={styles.topRow}>
            <div className={styles.subtitlePaper}>
            <h1 className={styles.h1}>{project.title}</h1>
            {project.subtitle && (
                <p className={styles.subtitle}>{project.subtitle}</p>
            )}
            </div>
        </div>

        {/* hero */}
        <section className={styles.hero}>
            <div className={styles.paper}>
            <h2 className={styles.sectionTitle}>
                {project.overviewTitle ?? "Overview"}
            </h2>

            {renderParagraphs(project.overview, styles.body)}
            </div>

            <div className={styles.media}>
            <Image
                src={project.heroImage}
                alt={project.heroAlt ?? ""}
                fill
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
            />
            </div>
        </section>

        {/* optional gallery */}
        {project.gallery?.length > 0 && (
            <section className={styles.gallery}>
            <h2 className={styles.galleryTitle}>Images of Final Project</h2>
            <div className={styles.galleryGrid}>
                {project.gallery.map((src, i) => (
                <div key={src + i} className={styles.galleryItem}>
                    <Image
                    src={src}
                    alt=""
                    fill
                    className={styles.image}
                    sizes="300px"
                    />
                </div>
                ))}
            </div>
            </section>
        )}

        {/* sections */}
        {project.sections?.map((s, i) => (
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

                {renderParagraphs(s.body, styles.body)}
            </div>
            </section>
        ))}
        </main>
    );
}
