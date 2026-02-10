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

    function WrapSection({ title, tag, body, image, alt, flipped = false, priority = false }) {
    return (
        <section className={styles.wrapSection}>
            <div className={styles.paper}>
                {tag && <div className={styles.tag}>{tag}</div>}
                <h2 className={styles.sectionTitle}>{title}</h2>

                <div
                className={`${styles.floatMedia} ${
                    flipped ? styles.floatLeft : styles.floatRight
                }`}
                >
                    <Image
                        src={image}
                        alt={alt ?? ""}
                        fill
                        className={styles.image}
                        sizes="(max-width: 900px) 100vw, 520px"
                        priority={priority}
                    />
                </div>

                {renderParagraphs(body, styles.body)}
            </div>
        </section>
    );
    }

    export default function ProjectTemplate({ project }) {
    return (
        <main className={styles.page}>
            <div className={styles.topRow}>
                <div className={styles.subtitlePaper}>
                <h1 className={styles.h1}>{project.title}</h1>
                {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
                </div>
            </div>

            <WrapSection
                title={project.overviewTitle ?? "Overview"}
                body={project.overview}
                image={project.heroImage}
                alt={project.heroAlt ?? ""}
                flipped={false}
                priority
            />

            {/* sections (alternate left/right) */}
            {project.sections?.map((s, i) => (
                <WrapSection
                key={`${s.title}-${i}`}
                tag={s.tag}
                title={s.title}
                body={s.body}
                image={s.image}
                alt={s.alt ?? ""}
                flipped={i % 2 === 1} // alternating
                />
            ))}

            {/* gallery */}
            {project.gallery?.length > 0 && (
                <section className={styles.gallery}>
                <h2 className={styles.galleryTitle}>Images of Final Project</h2>
                <div className={styles.galleryGrid}>
                    {project.gallery.map((src, i) => (
                    <div key={src + i} className={styles.galleryItem}>
                        <Image src={src} alt="" fill className={styles.image} sizes="700px" />
                    </div>
                    ))}
                </div>
            </section>
            )}
        </main>
    );
}
