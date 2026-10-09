import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { CRAFT_STAGES } from "@/data/craft";

export const metadata = {
  title: "Craft & Technical Monograph · From Cocoon to Silk",
  description: "Detailed technical monograph of Mysore Silk production. Integrated sericulture, T. Narasipura filature reeling, 26-28 denier twist chemistry, and 24K gold zari weaving.",
};

export default function CraftPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* Header */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional reveal-up">
          <span className="editorial-label">TECHNICAL MONOGRAPH</span>
          <h1 className="display-hero" style={{ marginTop: "12px", marginBottom: "24px" }}>
            FROM COCOON TO SILK.
          </h1>
          <p className="subheadline" style={{ maxWidth: "800px" }}>
            An integrated state process commanded entirely under one roof—from mulberry sericulture on the Cauvery basin to Swiss Jacquard power-weaving in Mysuru.
          </p>
        </div>
      </section>

      {/* 7 Stages Deep Dive */}
      <section className="section-spacing" style={{ backgroundColor: "var(--color-bg-primary)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
            {CRAFT_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={stage.step}
                  id={`stage-${stage.step}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: isEven ? "1.1fr 1fr" : "1fr 1.1fr",
                    gap: "64px",
                    alignItems: "center",
                  }}
                >
                  <div className={isEven ? "reveal-left" : "reveal-right"} style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "8px" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "3.2rem", color: "var(--color-burgundy)", lineHeight: 1 }}>
                        {stage.step}
                      </span>
                      {stage.kannadaName && (
                        <span style={{ fontFamily: "var(--font-kannada)", fontSize: "1.2rem", color: "var(--color-gold)" }}>
                          {stage.kannadaName}
                        </span>
                      )}
                    </div>

                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--color-text-primary)", marginBottom: "16px" }}>
                      {stage.title}
                    </h2>

                    <p style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-burgundy)", marginBottom: "18px" }}>
                      {stage.summary}
                    </p>

                    <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                      {stage.details}
                    </p>

                    <div style={{ padding: "16px 20px", backgroundColor: "var(--color-bg-secondary)", borderLeft: "2px solid var(--color-gold)", fontSize: "0.85rem", color: "var(--color-text-primary)" }}>
                      <strong>Technical Spec: </strong>
                      {stage.technicalSpec}
                    </div>
                  </div>

                  <div className="reveal-scale" style={{ order: isEven ? 2 : 1, position: "relative", aspectRatio: "4/3", border: "1px solid rgba(23, 21, 19, 0.15)", backgroundColor: "#201A15" }}>
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", bottom: "16px", left: "16px", backgroundColor: "rgba(24, 19, 15, 0.9)", padding: "6px 14px", color: "var(--color-gold-bright)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>
                      STAGE {stage.step} · {stage.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pure Zari Metallurgy Section */}
      <section className="section-spacing" id="zari" style={{ backgroundColor: "var(--color-bg-paper)", borderBottom: "var(--border-rule)" }}>
        <div className="container-institutional">
          <div className="reveal-up" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "56px" }}>
            <span className="editorial-label" style={{ justifyContent: "center" }}>METALLURGY OF PRESTIGE</span>
            <h2 className="display-section">THE PURE GOLD ZARI STANDARD</h2>
            <p style={{ marginTop: "12px", color: "var(--color-text-secondary)" }}>
              Why genuine KSIC Mysore Silk retains its rich royal gleam for over a generation without tarnishing.
            </p>
          </div>

          <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            <div className="hover-lift" style={{ padding: "32px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid rgba(23, 21, 19, 0.12)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", color: "var(--color-burgundy)", marginBottom: "8px" }}>
                65%
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "12px" }}>
                Pure Silver Ribbon
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                Fine silver is precision drawn into microscopic wires and flattened into an ultra-thin laminar metallic ribbon that wraps tightly around a natural core silk yarn.
              </p>
            </div>

            <div className="hover-lift" style={{ padding: "32px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid rgba(23, 21, 19, 0.12)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", color: "var(--color-gold)", marginBottom: "8px" }}>
                0.65%
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "12px" }}>
                24-Carat Gold Electroplate
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                The silver-wound silk filament passes through continuous electroplating baths of pure 24-carat gold, bonding an unadulterated gold casing that will never flake or oxidize.
              </p>
            </div>

            <div className="hover-lift" style={{ padding: "32px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid rgba(23, 21, 19, 0.12)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", color: "var(--color-text-primary)", marginBottom: "8px" }}>
                100%
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "12px" }}>
                Natural Silk Core
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                Unlike market imitations that use synthetic copper, plastic polyester, or cotton cores, KSIC zari uses high-tensile Mulberry silk as the core yarn, ensuring unmatched softness and zero stiff creasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Silk Identification & Burning Test */}
      <section className="section-spacing" id="authenticity" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="container-institutional">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "64px", alignItems: "center" }}>
            <div className="reveal-left">
              <span className="editorial-label">TESTING PROTOCOL</span>
              <h2 className="display-section" style={{ marginBottom: "20px" }}>
                HOW TO IDENTIFY PURE SILK: THE BURNING TEST
              </h2>
              <p style={{ marginBottom: "16px" }}>
                All that shines is not silk. What is commonly marketed as &ldquo;art silk&rdquo; or synthetic satin is polyester or rayon. Pure silk is a natural animal protein derived from the mulberry silkworm cocoon.
              </p>
              <p style={{ marginBottom: "24px" }}>
                To carry out the authentic test at home: take a minute thread from the fringe or warp edge and apply a flame.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <strong>Burning Odor: </strong>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Pure silk burns slowly with the characteristic smell of burning hair. Synthetic silk smells of burning plastic or paper.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <strong>Residue Examination: </strong>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Pure silk leaves a dark, brittle bead that crumbles completely to fine ash between the fingertips. Synthetic fibers melt into a hard, sticky plastic bead.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <strong>Embroidered Pallu Code: </strong>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      Every genuine KSIC saree features an embroidered code number with the year of manufacture on the inner seam, backed by the optical GI-11 hologram.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-scale" style={{ padding: "40px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid rgba(23, 21, 19, 0.15)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-burgundy)", marginBottom: "16px" }}>
                Preservation Guidelines
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                <li>• Always dry clean luxury zari sarees or wash in neutral soft water.</li>
                <li>• Wrap zari pallus in pure unbleached muslin/cotton to avoid oxidation.</li>
                <li>• Never spray perfume or water directly on gold zari ribbons.</li>
                <li>• Iron on low to medium heat on the reverse fabric side while slightly damp.</li>
                <li>• Periodically unfold and air in mild shade to preserve natural fiber elasticity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
