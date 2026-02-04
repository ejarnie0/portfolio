"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.css";



const PROJECTS = [
    {
        id: "p1",
        slug: "got-it",
        title: "Got It",
        subtitle: "Website",
        liveUrl: "https://got-it-phi.vercel.app/",
        image: "/projects/gotit.png", // put your images in /public/projects/
        alt: "Got It logo",
        description:
        "A short paragraph about what this project is, what you built, and what you’re proud of. Mention tools/skills, goals, and one standout feature.",
    },
    {
        id: "p2",
        slug: "daybreak",
        title: "DayBreak",
        subtitle: "Web Browser Game",
        image: "/projects/daybreak.png",
        alt: "DayBreak game screenshot",
        description:
        "Explain the concept, your role, and what the player does. Add any technical highlights (state management, animation, assets, etc.).",
    },
    {
        id: "p3",
        slug: "sailing-brochure",
        title: "Sailing Brochure",
        subtitle: "InDesign & Photoshop",
        image: "/projects/sailing.png",
        alt: "Sailing brochure preview",
        description:
        "Talk about design goals, typographic/layout decisions, and how you approached the visual system. Mention constraints and outcomes.",
    },
    {
        id: "p4",
        slug: "skiing-posters",
        title: "Skiing Posters",
        subtitle: "Illustrator & Photoshop",
        image: "/projects/skiing.png",
        alt: "Skiing poster preview",
        description:
        "Describe the poster series, the style direction, and your workflow. What did you explore? What did you learn?",
    },
    {
        id: "p5",
        slug: "realism-drawing",
        title: "Realism Drawing",
        subtitle: "Photoshop",
        image: "/projects/realism.png",
        alt: "Realism drawing preview",
        description:
        "Describe the technique/process and what makes it special. You can also mention any reference study, shading work, or iterations.",
    },
    {
        id: "p6",
        slug: "deer-video",
        title: "A Doe In a Field",
        subtitle: "After Effects",
        image: "/projects/project6.png",
        alt: "Project six preview",
        description:
        "Maybe delete this one.",
    },
];

export default function ProjectsPage() {
    return (
        <main className={styles.page}>
        <header className={styles.header}>
            <h2 className={styles.subtitle}>
            A few things I've designed and built. Click into any project later if you want
            to add detail pages.
            </h2>
        </header>

        <section className={styles.grid}>
            {PROJECTS.map((p, idx) => {
            const flipped = idx % 2 === 1;

            return (
                <article
                key={p.id}
                className={`${styles.card} ${flipped ? styles.cardFlipped : ""}`}
                >
                <div className={styles.media}>
                    {/* If you don’t have images yet, keep the file path and add later */}
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
                    <p className={styles.description}>{p.description}</p>

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
