"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";

const NAV_ITEMS = [
    { href: "/", label: "Home", title: "Hi there, I'm Emma!" },
    { href: "/projects", label: "Projects", title: "Projects" },
    { href: "/about", label: "About", title: "About" },
    { href: "/contactMe", label: "Contact Me", title: "Contact Me" },
];

// Pick the “best match” for the current pathname (supports nested routes later)
function getActiveItem(pathname) {
    if (!pathname) return null;

    // exact match first
    let match = NAV_ITEMS.find((i) => i.href === pathname);
    if (match) return match;

    // then prefix match for nested routes like /projects/something
    match = NAV_ITEMS
        .slice()
        .sort((a, b) => b.href.length - a.href.length)
        .find((i) => pathname.startsWith(i.href + "/"));

    return match ?? null;
}

export default function NavBar() {
    const pathname = usePathname();
    const activeItem = getActiveItem(pathname);

    // Change this default title to whatever you want on the home page (/)
    const pageTitle = activeItem?.title ?? "Hi there, I'm Emma!";

    return (
        <header className={styles.header}>
        <div className={styles.brand}>
            <img
            src="/emma_logo.png"
            alt="Emma Jennings Logo"
            className={styles.logo}
            height="80"
            />
            <h1 className={styles.title}>{pageTitle}</h1>
        </div>

        <nav className={styles.nav} aria-label="Primary">
            {NAV_ITEMS.map((item) => {
            const isActive =
                pathname === item.href ||
                (pathname?.startsWith(item.href + "/") ?? false);

            return (
                <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
                >
                {item.label}
                </Link>
            );
            })}
        </nav>
        </header>
    );
}
