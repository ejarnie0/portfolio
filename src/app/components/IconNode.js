"use client";
import styles from "./iconNode.module.css";

export default function IconNode({ data }) {
  const { iconUrl, size = 48, alt = "" } = data; // default 48px ~ 3rem

    return (
        <div className={styles.iconNode} style={{ width: size, height: size }}>
        <img
            src={iconUrl}
            alt={alt}
            className={styles.iconImg}
            draggable={false}
        />
        </div>
    );
}
