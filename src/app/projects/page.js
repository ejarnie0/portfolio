"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function NavBar({ title, backHref = "/dashboard" }) {

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Projects</h1>
        </div>
    );
    }
