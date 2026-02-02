"use client";
import styles from "./projectNode.module.css";

export default function ProjectNode({ data }) {
    const { label, subtitle, bgUrl } = data;

    return (
        <div className={styles.node} style={{ backgroundImage: `url(${bgUrl})` }}>
        <div className={styles.text}>
            <div className={styles.label}>{label}</div>
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
        </div>
    );
}
