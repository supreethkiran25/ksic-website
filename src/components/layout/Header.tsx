"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShieldCheck, Globe } from "lucide-react";
import styles from "./Header.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.navHeritage, href: "/heritage" },
    { label: t.navCraft, href: "/craft" },
    { label: t.navCollection, href: "/collection" },
    { label: t.navInstitution, href: "/institution" },
    { label: t.navStores, href: "/stores" },
  ];

  return (
    <header className={`${styles.headerContainer} ${scrolled ? styles.headerScrolled : ""}`}>
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

      {/* 2. Primary Navigation Bar */}
      <nav className={styles.navMain} aria-label="Main Navigation">
        {/* Left Brand Identity: Official KSIC Mysore Silk Seal */}
        <Link href="/" className={styles.brandGroup} aria-label="KSIC Mysore Silk Home">
          <Image
            src="/assets/brand/ksic-logo.png"
            alt="KSIC Mysore Silk Seal Estd 1912"
            width={140}
            height={38}
            priority
            className={styles.brandLogoImg}
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <ul className={styles.navLinksList}>
          {navItems.map((item) => {
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

        {/* Right Action: Language Switcher (EN | ಕನ್ನಡ) */}
        <div className={styles.actionsGroup}>
          <div className={styles.langToggleWrap} role="group" aria-label="Language selector">
            <Globe size={13} className={styles.langGlobeIcon} />
            <button
              type="button"
              className={`${styles.langPill} ${lang === "en" ? styles.langPillActive : ""}`}
              onClick={() => setLang("en")}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className={styles.langDivider}>|</span>
            <button
              type="button"
              className={`${styles.langPill} ${lang === "kn" ? styles.langPillActive : ""}`}
              onClick={() => setLang("kn")}
              aria-label="ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ"
            >
              ಕನ್ನಡ
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Edge-to-Edge Navigation Ribbon (Always accessible, no menu click needed) */}
      <div className={styles.mobileNavRibbon} aria-label="Mobile Navigation">
        <div className={styles.mobileNavScroller}>
          {navItems.map((item) => {
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
