"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.css";
import { PROJECTS } from "./projectData";

const projectList = Object.entries(PROJECTS).map(([slug, p]) => ({
    id: slug,
    slug,
    title: p.title,
    subtitle: p.subtitle,
    // choose a nice preview image
    image: p.gallery?.[0] ?? p.heroImage,
    alt: p.heroAlt ?? p.title,
    liveUrl: p.liveUrl,
    description: Array.isArray(p.overview) ? p.overview[0] : p.overview,
}));

export default function ProjectsPage() {
    return (
        <main className={styles.page}>
        <header className={styles.header}>
            <h2 className={styles.subtitle}>
            A few things I've designed and drawn! Click 'Go to Project' to see my
            design process and images from the project!
            </h2>
        </header>

        <section className={styles.grid}>
            {projectList.map((p, idx) => {
            const flipped = idx % 2 === 1;

            return (
                <article
                key={p.id}
                className={`${styles.card} ${flipped ? styles.cardFlipped : ""}`}
                >
                <div className={styles.media}>
                    <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 900px) 100vw, 520px"
                    priority={idx < 2}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.kicker}>{p.subtitle}</div>
                    <h2 className={styles.cardTitle}>{p.title}</h2>

                    {p.description && (
                    <p className={styles.description}>{p.description}</p>
                    )}

                    <div className={styles.actions}>
                    <Link className={styles.button} href={`/projects/${p.slug}`}>
                        Go To Project
                    </Link>

                    {p.liveUrl && (
                        <a
                        className={styles.buttonSecondary}
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        >
                        Live link
                        </a>
                    )}
                    </div>
                </div>
                </article>
            );
            })}
        </section>
        </main>
    );
}
