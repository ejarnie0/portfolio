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
        image: "/projects/gotIt/homepage.png", // put your images in /public/projects/
        alt: "Got It homepage",
        description:
        "Supporting neurodiverse Electrical Apprentices with an approachable study tool by combining clean UI, guided study sessions, and trustworthy AI sandboxed with the user's own academic material",
    },
    {
        id: "p2",
        slug: "daybreak",
        title: "DayBreak",
        subtitle: "Web Browser Game",
        image: "/projects/daybreak/splashScreen.jpg",
        alt: "DayBreak game splashScreen",
        description:
        "A fast-paced, story-driven multiplayer game where players can make meaningful and strategic decisions that lead to exciting, balanced outcomes, keeping them coming back again and again",
    },
    {
        id: "p3",
        slug: "sailing-brochure",
        title: "Sailing Brochure",
        subtitle: "InDesign & Photoshop",
        image: "/projects/sailingBrochure/sailingBrochure2.jpg",
        alt: "Sailing Brochure preview",
        description:
        "A travel brochure ",
    },
    {
        id: "p4",
        slug: "skiing-posters",
        title: "Skiing Posters",
        subtitle: "Illustrator & Photoshop",
        image: "/projects/skiingPosters/skiingPosterSnip.jpg",
        alt: "Skiing Poster preview",
        description:
        "Posters designed for a ski resort named Howling Heights. Made with a vintage poster design in mind using images and graphic illustrations.",
    },
    {
        id: "p5",
        slug: "realism-drawing",
        title: "Realism Drawing",
        subtitle: "Photoshop",
        image: "/projects/realisticPhoto/realisticPhotoSnip.png",
        alt: "Realism drawing preview",
        description:
        "Realistic drawing using Photoshop to recreate an image of a model.",
    },
];

export default function ProjectsPage() {
    return (
        <main className={styles.page}>
        <header className={styles.header}>
            <h2 className={styles.subtitle}>
            A few things I've designed and drawn! Click 'Go to Project' to see my design process and images from the project!
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
