"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import styles from "./cardNav.module.css";

export default function CardNav({
    items = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" }, // Maybe get rid of this??
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contactMe" },
    ],
    logoSrc = "/emma_logo.png",
    logoAlt = "Emma Jennings Logo",
    }) {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);
    const linksRef = useRef([]);
    const tlRef = useRef(null);

    const setLinkRef = (i) => (el) => {
        if (el) linksRef.current[i] = el;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: "hidden" });
        gsap.set(linksRef.current, { y: 12, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
        height: "auto",
        duration: 0.35,
        ease: "power3.out",
        });

        tl.to(
        linksRef.current,
        { y: 0, opacity: 1, duration: 0.25, stagger: 0.05, ease: "power3.out" },
        "-=0.15"
        );

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
        tl?.kill();
        tlRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items.length]);

    const toggle = () => {
        const tl = tlRef.current;
        if (!tl) return;

        if (!open) {
        setOpen(true);
        tl.play(0);
        } else {
        tl.eventCallback("onReverseComplete", () => setOpen(false));
        tl.reverse();
        }
    };

    return (
        <div className={styles.container}>
        <nav ref={navRef} className={`${styles.nav} ${open ? styles.open : ""}`}>
            <div className={styles.top}>
            <div className={styles.brand}>
                <Image
                src={logoSrc}
                alt={logoAlt}
                width={46}
                height={46}
                className={styles.logo}
                priority
                />
                <span className={styles.brandText}>Menu</span>
            </div>

            <button
                type="button"
                className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
                onClick={toggle}
                aria-label={open ? "Close menu" : "Open menu"}
            >
                <span className={styles.line} />
                <span className={styles.line} />
            </button>
            </div>

            <div className={styles.panel} aria-hidden={!open}>
            {items.map((item, idx) => (
                <Link
                key={item.href}
                href={item.href}
                className={styles.link}
                ref={setLinkRef(idx)}
                onClick={() => {
                    // close after click
                    if (open) toggle();
                }}
                >
                {item.label}
                </Link>
            ))}
            </div>
        </nav>
        </div>
    );
}
