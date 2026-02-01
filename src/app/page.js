"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./footer";


export default function Home() {

    return (
        <div className={styles.page}>
        <NavBar></NavBar>
        <main className={styles.main}>
            <div className={styles.description}>
              <h2 className={styles.h2}>Am I coming off as immature to you?</h2>
              <br></br>
              <p>
                I love the study of art and design, I find it fascinating how 
                humans interact with art, not only in our day to day lives,
                but how we make it a part of ourselves.
                <br></br>
                <br></br>
                I'm a Designer and Web Developer based in Vancouver, BC.
              
              </p>
            </div>
        </main>

        <Footer />
        </div>
    );
}
