"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section
      id="hero-section"
      className={styles.heroSection}
      aria-label="Official Karnataka Mysore Silk Heritage"
    >
      {/* 1. Full-Bleed Responsive Background Images (Blush Rose Mysore Silk Saree with Gold Zari) */}
      <div className={styles.heroBackground}>
        {/* Desktop Landscape (16:9) */}
        <Image
          src="/assets/heritage/ksic-rose-hero-desktop.jpg"
          alt="Exquisite blush rose pure Mysore Silk saree with authentic pure gold zari border draped on travertine marble plinth with fresh Mysore Mallige jasmine flowers"
          fill
          priority
          sizes="(max-width: 768px) 1px, 100vw"
          className={styles.heroBackgroundImageDesktop}
        />
        {/* Dedicated Mobile Portrait (9:16) */}
        <Image
          src="/assets/heritage/ksic-rose-hero-mobile.jpg"
          alt="Exquisite blush rose pure Mysore Silk saree with authentic pure gold zari border draped on travertine marble plinth with fresh Mysore Mallige jasmine flowers"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1px"
          className={styles.heroBackgroundImageMobile}
        />
        {/* Ambient luminous scrim behind left editorial text for pristine legibility */}
        <div className={styles.heroTextBackdropScrim} aria-hidden="true" />
        {/* Soft bottom transition into parchment section */}
        <div className={styles.bottomTransitionFade} aria-hidden="true" />
      </div>

      {/* 2. Main Hero Editorial Content Overlay */}
      <div className={styles.heroInnerContainer}>
        {/* Left Editorial Narrative Block */}
        <div className={styles.leftEditorialBlock}>
          {/* Subtitle / Kicker */}
          <div className={styles.kickerGroup}>
            <span className={styles.kickerText}>
              {lang === "kn" ? t.heroKickerKn : t.heroKickerEn}
            </span>
          </div>

          {/* Stately High-Fashion Display Headline: MYSORE SILK */}
          <h1 className={styles.editorialTitle}>
            {lang === "kn" ? (
              <span className={styles.titleLine}>ಮೈಸೂರು ಸಿಲ್ಕ್</span>
            ) : (
              <>
                <span className={styles.titleLine}>MYSORE</span>
                <span className={styles.titleLine}>SILK</span>
              </>
            )}
          </h1>

          {/* Tagline */}
          <p className={styles.tagline}>
            {lang === "kn" ? t.heroTagline : t.heroTagline}
          </p>

          {/* Vertical Accent Rule */}
          <div className={styles.verticalRule} aria-hidden="true" />

          {/* Body Description */}
          <p className={styles.bodyText}>
            {lang === "kn" ? t.heroDesc : t.heroDesc}
          </p>

          {/* Action CTA Link */}
          <div className={styles.actionContainer}>
            <Link href="/heritage" className={styles.exploreLink}>
              <span className={styles.exploreText}>{t.heroExploreBtn}</span>
              <ArrowRight size={16} className={styles.exploreArrow} />
            </Link>
          </div>

          {/* 3 Trust Badges Row */}
          <div className={styles.trustBadgesRow}>
            {/* Badge 1: 100+ Years Heritage */}
            <div className={styles.badgeItem}>
              <div className={styles.badgeIconWrap}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.badgeIcon}
                  aria-hidden="true"
                >
                  <path d="M3 21h18M5 21V11M19 21V11M9 21V14h6v7M4 11h16M12 3l8 8H4z" />
                  <path d="M10 7.5h4v3.5h-4z" />
                </svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <span className={styles.badgeLinePrimary}>100+ YEARS</span>
                <span className={styles.badgeLineSecondary}>OF HERITAGE</span>
              </div>
            </div>

            <div className={styles.badgeDivider} aria-hidden="true" />

            {/* Badge 2: GI Certified */}
            <div className={styles.badgeItem}>
              <div className={styles.badgeIconWrap}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.badgeIcon}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9.5" />
                  <circle cx="12" cy="12" r="7.5" strokeDasharray="1.5 2" />
                  <text
                    x="12"
                    y="15.2"
                    textAnchor="middle"
                    fontSize="7"
                    fontWeight="700"
                    fill="currentColor"
                    stroke="none"
                    fontFamily="var(--font-serif)"
                    letterSpacing="0.05em"
                  >
                    GI
                  </text>
                </svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <span className={styles.badgeLinePrimary}>GI CERTIFIED</span>
                <span className={styles.badgeLineSecondary}>MYSORE SILK</span>
              </div>
            </div>

            <div className={styles.badgeDivider} aria-hidden="true" />

            {/* Badge 3: Pure Silk Pure Zari */}
            <div className={styles.badgeItem}>
              <div className={styles.badgeIconWrap}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.badgeIcon}
                  aria-hidden="true"
                >
                  <path d="M12 3.5c1.8 3 4 6 4 9 0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5c0-3 2.2-6 4-9z" />
                  <path d="M12 17c-3.2 0-6.8-1.5-8-4.5 2.5 0 5.5 1 8 4.5z" />
                  <path d="M12 17c3.2 0 6.8-1.5 8-4.5-2.5 0-5.5 1-8 4.5z" />
                  <path d="M6 19.5c3.5-.8 8.5-.8 12 0" />
                </svg>
              </div>
              <div className={styles.badgeTextWrap}>
                <span className={styles.badgeLinePrimary}>PURE SILK</span>
                <span className={styles.badgeLineSecondary}>PURE ZARI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Left Pinned "SCROLL ↓" Indicator */}
      <div className={styles.scrollExploreBlock} aria-hidden="true">
        <span className={styles.scrollExploreLabel}>{t.heroScroll}</span>
        <svg
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          className={styles.scrollArrow}
        >
          <path
            d="M6 1v12M1.5 8.5L6 13l4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};
