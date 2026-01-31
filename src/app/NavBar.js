"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function NavBar({ title, backHref = "/dashboard" }) {

    return (
        <div className={styles.header}>
            <img
                src="/emma_logo.png"
                alt="Emma Jennings Logo"
                className={styles.logo}
                height="80px"
                />
            {/* <h1 className={styles.title}
                style={{ 
                color: '#5C82B9', 
                fontWeight: 700, 
                fontSize: '3rem', 
                margin: '0.8rem'
                }}>
                Hi there, I'm Emma!
            </h1> */}
            <div className={styles.nav}>
                <a href="/about" className={styles.link}>About</a>
                <a href="/contactMe" className={styles.link}>Contact Me</a>
                <a href="/projects" className={styles.link}>Projects</a>
            </div>
        </div>
    );
    }
