"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function About() {
    const [fadeInFirst, setFadeInFirst] = useState(false);
    const [fadeInSecond, setFadeInSecond] = useState(false);

    useEffect(() => {
        setFadeInFirst(true);
        const timer = setTimeout(() => {
        setFadeInSecond(true);
        }, 1200); // matches the fade-in animation duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.page}>

            <main className={styles.main}>
                <div className={styles.description}>
                    <h2 className={styles.h2}>
                        My name is Emma and I am a Web Developer and Graphic Designer trying to break out on the scene!
                    </h2>
                    <p >
                        I am passionate about all kinds of art, including writing, painting, photography, sewing, and more.
                        <br></br>
                        <br></br>
                        A fun fact about me is that I started my own small business making handmade clothing and embroidery, I am also a trained professional makeup artist.
                        <br></br>
                        <br></br>
                        I love spending time with my dog, my friends and family too! Ask me about any kind of game, anime, or boats if you want me to talk your ear off. 
                        <br></br>
                        <br></br>
                        My dream is to one day start an indie game company with my sister!
                        <br></br>
                        <Link href={"/contact"} className={styles.link}>
                            Ask me about it :)
                        </Link>
                    </p>
                </div>
                <div className={styles.intro}>
                    <img
                        src="/emma1.jpeg"
                        alt="Photo of Emma (me!)"
                        height="300px"
                        className={fadeInFirst ? styles["fade-in"] : ""}
                        style={{ transform: 'rotate(-10deg)', 
                        position: 'relative', 
                        left: '50rem',
                        top: '-20rem',
                        }}
                    />
                    <img
                        src="/kenai.JPG"
                        alt="Photo of Kenai (my dog)"
                        height="300px"
                        className={fadeInSecond ? styles["fade-in"] : styles["hidden-until-fade"]}
                        style={{ transform: 'rotate(-10deg)',
                        position: 'relative',
                        left: '38rem',
                        top: '-20rem',
                        }}
                    />
                    <img
                        src="/emma_woods.jpeg"
                        alt="Photo of me hiking!"
                        height="300px"
                        className={fadeInSecond ? styles["fade-in"] : styles["hidden-until-fade"]}
                        style={{ transform: 'rotate(12deg)',
                        position: 'relative',
                        left: '60rem',
                        top: '-44rem',
                        }}
                    />
                    <img
                        src="/emma_syd.JPG"
                        alt="Photo of me and my sister!"
                        height="300px"
                        className={fadeInSecond ? styles["fade-in"] : styles["hidden-until-fade"]}
                        style={{ transform: 'rotate(10deg)',
                        position: 'relative',
                        left: '48rem',
                        top: '-44rem',
                        }}
                    />
                </div>
            </main>
        </div>
    );
    }
