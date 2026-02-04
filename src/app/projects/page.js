"use client";

import Image from "next/image";
import styles from "./project.module.css";


const PROJECTS = [
    {
        id: "p1",
        title: "Got It",
        subtitle: "Website",
        image: "/projects/gotit.png", // put your image in /public/projects/
        alt: "Got It project screenshot",
        description:
        "A short paragraph about what this project is, what you built, and what you’re proud of. Mention tools/skills, goals, and one standout feature.",
    },
    {
        id: "p2",
        title: "DayBreak",
        subtitle: "Web Browser Game",
        image: "/projects/daybreak.png",
        alt: "DayBreak game screenshot",
        description:
        "Explain the concept, your role, and what the player does. Add any technical highlights (state management, animation, assets, etc.).",
    },
    {
        id: "p3",
        title: "Sailing Brochure",
        subtitle: "InDesign & Photoshop",
        image: "/projects/sailing.png",
        alt: "Sailing brochure preview",
        description:
        "Talk about design goals, typographic/layout decisions, and how you approached the visual system. Mention constraints and outcomes.",
    },
    {
        id: "p4",
        title: "Skiing Posters",
        subtitle: "Illustrator & Photoshop",
        image: "/projects/skiing.png",
        alt: "Skiing poster preview",
        description:
        "Describe the poster series, the style direction, and your workflow. What did you explore? What did you learn?",
    },
    {
        id: "p5",
        title: "Realism Drawing",
        subtitle: "Photoshop",
        image: "/projects/realism.png",
        alt: "Realism drawing preview",
        description:
        "Describe the technique/process and what makes it special. You can also mention any reference study, shading work, or iterations.",
    },
    {
        id: "p6",
        title: "Project Six",
        subtitle: "Subtitle goes here",
        image: "/projects/project6.png",
        alt: "Project six preview",
        description:
        "Placeholder copy. Replace with your project story: goal → process → result. Keep it 2–5 sentences for readability.",
    },
];

export default function ProjectsPage() {
    return (
        <main className={styles.page}>
        <header className={styles.header}>
            <h2 className={styles.subtitle}>
            A few things I’ve designed and built. Click into any project later if you want
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

                    {/* Optional buttons you can wire up later */}
                    <div className={styles.actions}>
                    <button className={styles.button} type="button">
                        View details
                    </button>
                    <button className={styles.buttonSecondary} type="button">
                        Live link
                    </button>
                    </div>
                </div>
                </article>
            );
            })}
        </section>
        </main>
    );
}
