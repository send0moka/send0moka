"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      boxRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );
  }, []);

  return (
    <div className={styles.page} ref={containerRef}>
      <main className={styles.main}>
        <h1 ref={titleRef} className={styles.title}>
          Next.js + GSAP
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Animation Setup Complete
        </p>
        <div ref={boxRef} className={styles.box}>
          <span className={styles.boxText}>Ready</span>
        </div>
      </main>
    </div>
  );
}
