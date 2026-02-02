"use client";
import styles from "./projectNode.module.css";
import Link from "next/link";

export default function ProjectNode({ data }) {
    const { label, subtitle, href, bgUrl, iconUrl } = data;

    return (
        <div className={styles.node} style={{ backgroundImage: `url(${bgUrl})` }}>
        <div className={styles.text}>
            <div className={styles.topRow}>
            <div className={styles.label}>{label}</div>

            {iconUrl && (
                <img
                src={iconUrl}
                alt=""
                className={styles.icon}
                draggable={false}
                onPointerDown={(e) => e.stopPropagation()} // prevents drag starting on icon
                />
            )}
            </div>

            {subtitle && href && (
            <div className={styles.subtitle}>
                <Link
                href={href}
                onPointerDown={(e) => e.stopPropagation()} // click link without dragging node
                onDoubleClick={(e) => e.stopPropagation()}
                >
                {subtitle}
                </Link>
            </div>
            )}
        </div>
        </div>
    );
}
