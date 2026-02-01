"use client";

import styles from "../page.module.css";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../footer";


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
        <NavBar></NavBar>

        <main className={styles.main}>
            <div >
                
            </div>
            <div className={styles.intro}>
            <img
                src="/emma1.jpeg"
                alt="Photo of Emma"
                height="300px"
                className={fadeInFirst ? styles["fade-in"] : ""}
                style={{ transform: 'rotate(-10deg)', 
                position: 'relative', 
                left: '45rem',
                }}
            />
            <img
                src="/kenai.JPG"
                alt="Photo of my dog Kenai"
                height="300px"
                className={fadeInSecond ? styles["fade-in"] : styles["hidden-until-fade"]}
                style={{ transform: 'rotate(10deg)',
                position: 'relative',
                left: '25rem',
                top: '-10rem',
                }}
            />
            </div>
        </main>

        <Footer />
        </div>
    );
    }
