"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import styles from "./Header.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInHero, setIsInHero] = useState(true);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!isHome) {
      setIsInHero(false);
      setIsAtTop(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY <= 20);

      const heroEl = document.getElementById("hero-section");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // As long as the hero section bottom is > 90px from top, we are inside hero
        setIsInHero(rect.bottom > 90);
      } else {
        setIsInHero(scrollY < window.innerHeight - 90);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHome]);

  const navLeft = [
    { label: t.navHeritage, href: "/heritage" },
    { label: t.navCraft, href: "/craft" },
    { label: t.navCollection, href: "/collection" },
  ];

  const navRight = [
    { label: t.navInstitution, href: "/institution" },
    { label: t.navStores, href: "/stores" },
    { label: t.navContact, href: "/contact" },
  ];

  const allNavItems = [...navLeft, ...navRight];

  // Dynamic header state:
  // - In hero section at top: transparent
  // - In hero section while scrolling: subtle frosted glass
  // - Outside hero section or on inner pages: solid institutional parchment
  const headerStateClass = isHome && isInHero
    ? (isAtTop ? styles.headerTransparentTop : styles.headerTransparentScrolling)
    : styles.headerScrolled;

  return (
    <header className={`${styles.headerContainer} ${headerStateClass}`}>
      {/* 1. Official Institutional Top Credential Banner */}
      <div className={styles.topBadge}>
        <div className={styles.topBadgeWrap}>
          <span className={styles.topBadgeState}>
            <ShieldCheck size={12} style={{ display: "inline-block", flexShrink: 0 }} />
            <span className={styles.topBadgeDesktopText}>{t.topBannerGovt}</span>
            <span className={styles.topBadgeMobileText}>
              {lang === "kn" ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ · 1912 ರಿಂದ · GI-11" : "Govt. of Karnataka · Estd. 1912 · GI-11"}
            </span>
          </span>
          <div className={styles.topBadgeRight}>
            <span>{t.topBannerState}</span>
            <span>{t.topBannerCities}</span>
          </div>
        </div>
      </div>

      {/* 2. Primary Navigation Bar with Centered Royal Brand Logo */}
      <nav className={styles.navMain} aria-label="Main Navigation">
        {/* Left Navigation Group */}
        <ul className={`${styles.navLinksList} ${styles.navGroupLeft}`}>
          {navLeft.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className={styles.navLinkItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className={styles.activeDot} />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Center Brand Identity: Official KSIC Mysore Silk Seal */}
        <Link href="/" className={styles.brandGroupCenter} aria-label="KSIC Mysore Silk Home">
          <Image
            src="/assets/brand/ksic-logo.png"
            alt="KSIC Mysore Silk Seal Estd 1912"
            width={160}
            height={44}
            priority
            className={styles.brandLogoImg}
          />
        </Link>

        {/* Right Navigation Group */}
        <ul className={`${styles.navLinksList} ${styles.navGroupRight}`}>
          {navRight.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className={styles.navLinkItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className={styles.activeDot} />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 3. Mobile Edge-to-Edge Navigation Ribbon (Always accessible, no menu click needed) */}
      <div className={styles.mobileNavRibbon} aria-label="Mobile Navigation">
        <div className={styles.mobileNavScroller}>
          {allNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
