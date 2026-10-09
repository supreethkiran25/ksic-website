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
    <section id="hero-section" className={styles.heroSection} aria-label="Official Karnataka Mysore Silk Heritage">
      {/* 1. Full-Bleed Luminous Background Image */}
      <div className={styles.heroBackground}>
        <Image
          src="/assets/heritage/ksic-pastel-hero.jpg"
          alt="Authentic Mysore Silk pure crepe saree draped over limestone plinth with Mysore Mallige jasmine flowers"
          fill
          priority
          sizes="100vw"
          className={styles.heroBackgroundImage}
        />
        {/* Soft bottom transition into parchment section */}
        <div className={styles.bottomTransitionFade} aria-hidden="true" />
      </div>

      {/* 2. Main Hero Editorial Content Overlay */}
      <div className={styles.heroInnerContainer}>
        {/* Left Editorial Narrative Block / Mobile Floating Royal Cartouche */}
        <div className={styles.leftEditorialBlock}>
          {/* Mobile-Only Royal Crest Crown Medallion */}
          <div className={styles.mobileCrestCrown} aria-hidden="true">
            <Image
              src="/assets/brand/gandaberunda-crest.png"
              alt="Official Royal Mysore Wadiyar Gandaberunda Emblem"
              width={76}
              height={55}
              priority
              className={styles.mobileCrestImg}
            />
          </div>

          {/* Top Heritage Kicker */}
          <div className={styles.kickerGroup}>
            <span className={styles.kickerEnglish}>
              {lang === "kn" ? "ರಾಜಪರಂಪರೆ · 1912 ರಿಂದ" : t.heroKickerEn}
            </span>
            <span className={styles.kickerKannada}>{t.heroKickerKn}</span>
          </div>

          {/* Stately High-Fashion Display Headline */}
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

          {/* Rich Crimson Zari-Matched Accent Line */}
          <div className={styles.crimsonAccentRule} aria-hidden="true" />

          {/* 3-Beat Poetic Editorial Stanza */}
          <div className={styles.poeticStanza}>
            <p className={styles.poeticLine}>{t.heroPoetic1}</p>
            <p className={styles.poeticLine}>{t.heroPoetic2}</p>
            <p className={styles.poeticLine}>{t.heroPoetic3}</p>
          </div>

          {/* Understated Quiet-Luxury Action Link */}
          <div className={styles.actionContainer}>
            <Link href="/collection" className={styles.exploreLink}>
              <span className={styles.exploreText}>{t.heroExploreBtn}</span>
              <ArrowRight size={14} className={styles.exploreArrow} />
            </Link>
          </div>
        </div>

        {/* Right Royal Insignia Plaque (Authentic Mysore Wadiyar Ganda Berunda Vector Crest) */}
        <div className={styles.rightInsigniaBlock}>
          {/* Framed Medallion with vertical accent hairline */}
          <div className={styles.medallionFrame}>
            <div className={styles.verticalHairline} aria-hidden="true">
              <span className={styles.hairlineDiamond} />
            </div>

            <div className={styles.medallionBody}>
              <div className={styles.crestWrap}>
                <Image
                  src="/assets/brand/gandaberunda-crest.png"
                  alt="Official Royal Mysore Wadiyar Gandaberunda Emblem"
                  width={140}
                  height={102}
                  priority
                  className={styles.crestImg}
                />
              </div>

              <div className={styles.medallionLabels}>
                <span className={styles.gandaTitle}>{t.gandaberundaTitle}</span>
                <span className={styles.gandaSubtitle}>{t.gandaberundaSubtitle}</span>
              </div>
            </div>
          </div>

          {/* Far Right Edge Vertical Kannada & Loom Needle Accent */}
          <aside className={styles.farRightEdge} aria-hidden="true">
            <div className={styles.verticalKannadaChars}>
              <span>ಕ</span>
              <span>ರ್ನಾ</span>
              <span>ಟ</span>
              <span>ಕ</span>
            </div>
            <div className={styles.loomNeedleOrnament}>
              <svg width="10" height="56" viewBox="0 0 10 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="0" x2="5" y2="40" stroke="#7A664E" strokeWidth="1" strokeDasharray="3 3" />
                <polygon points="5,48 2,40 8,40" fill="#7A664E" />
                <circle cx="5" cy="52" r="1.5" fill="#7A664E" />
              </svg>
            </div>
          </aside>
        </div>
      </div>

      {/* Editorial Scroll Prompt Indicator */}
      <div className={styles.scrollPrompt} aria-hidden="true">
        <span className={styles.scrollPromptText}>
          {lang === "kn" ? "ಅನ್ವೇಷಿಸಲು ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ" : "SCROLL TO DISCOVER"}
        </span>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollBar} />
        </div>
      </div>
    </section>
  );
};
