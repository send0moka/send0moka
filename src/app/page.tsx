"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Background glow fade in
    tl.fromTo(
      ".glow-bg",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" }
    );

    // Top left text reveal
    tl.fromTo(
      ".top-text",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=1.8"
    );

    // Name reveal (staggered from bottom)
    tl.fromTo(
      ".name-part",
      { opacity: 0, y: 80, rotationX: -20 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: "expo.out", stagger: 0.15 },
      "-=1.5"
    );

    // Bottom nav reveal
    tl.fromTo(
      ".bottom-nav",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=1.2"
    );

    // Liquid morphing animation for the single blob
    gsap.to(".glow-bg", {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      rotation: 360,
      duration: 15,
      ease: "none",
      repeat: -1,
    });

    // Mouse move interaction for the glow (parallax effect)
    const xTo = gsap.quickTo(".glow-bg", "x", { duration: 1.5, ease: "power3" });
    const yTo = gsap.quickTo(".glow-bg", "y", { duration: 1.5, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      // Move relative to the center of the screen, scaled down for subtlety
      const x = (e.clientX - window.innerWidth / 2) * 0.15;
      const y = (e.clientY - window.innerHeight / 2) * 0.15;
      xTo(x);
      yTo(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, { scope: containerRef });

  return (
    <div className={styles.hero} ref={containerRef}>
      {/* Liquid Single Glow Background */}
      <div className={`${styles.glow} glow-bg`}></div>
      
      <div className={styles.content}>

        <div className={`${styles.topLeft} top-text`}>
          Quiet creator, <span className={styles.italic}>bringing ideas to life</span>,<br />
          through motion, detail and softness.
        </div>

        <h1 className={styles.centerName}>
          <div className={`${styles.firstName} name-part`}>Jehian</div>
          <div className={`${styles.lastName} name-part`}>Athaya.</div>
        </h1>

        <div className={`${styles.bottomNav} bottom-nav`}>
          <div className={styles.navLeft}>
            <span>&rarr; V1.0</span>
          </div>
          <div className={styles.navCenter}>
            <a href="#">BEHANCE</a>
            <span>/</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <span>/</span>
            <a href="https://github.com/send0moka" target="_blank" rel="noopener noreferrer">GITHUB</a>
          </div>
          <div className={styles.navRight}>
            <a href="#">WORK</a>
            <a href="#">INFO</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
}
