"use client";
import styles from "./project.page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Projects() {

    return (
        <div className={styles.page}>
        <main className={styles.main}>
            <div className={styles.leftSide}>
                <Image
                    src="/"
                    width={500}
                    height={900}
                    alt=""
                    // style={{
                    // position: "absolute",
                    // top: "32.5rem",
                    // right: "1rem",
                    // zIndex: 2,
                    // }}
                />
            </div>
            <div className={styles.rightSide}>
                <h1>
                    Got It
                </h1>
            </div>
        </main>

        </div>
    );
}