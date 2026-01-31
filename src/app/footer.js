"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Footer({ title }) {

    return (
        <footer className={styles.footer}>
            <p>© 2026 Emma Jennings</p>
        </footer>
    );
    }
