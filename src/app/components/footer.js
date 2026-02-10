"use client";

import styles from "./footer.module.css";

export default function Footer({
    name = "Call me, Beep me!",
    email = "emmabruce.jennings@gmail.com",
    linkedinUrl = "https://www.linkedin.com/in/emma-jennings0/",
    instagramUrl = "https://www.instagram.com/ebj.arts/",
    githubUrl = "https://github.com/ejarnie0",
}) {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                {/* Left column */}
                <div className={styles.footerLeft}>
                    <div className={styles.footerName}>{name}</div>
                        <a className={styles.footerEmail} href={`mailto:${email}`}>
                            {email}
                        </a>
                    </div>

                {/* Right column */}
                <nav className={styles.footerRight} aria-label="Social links">
                    <a className={styles.footerLink} href={linkedinUrl} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a className={styles.footerLink} href={instagramUrl} target="_blank" rel="noreferrer">
                        Instagram
                    </a>
                    <a className={styles.footerLink} href={githubUrl} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </nav>
            </div>
        </footer>
    );
}
