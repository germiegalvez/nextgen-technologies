"use client";

import { useState } from "react";
import Image from "next/image";

interface Flavor {
  id: string;
  name: string;
  tagline: string;
  notes: string[];
  color: string;
  accentBg: string;
  tagColor: string;
  cal: number;
  sugar: string;
  botanicals: string;
}

const FLAVORS: Flavor[] = [
  {
    id: "yuzu",
    name: "Yuzu Lemon",
    tagline: "Sharp, sun-ripened citrus with fresh lemon balm and coastal salt.",
    notes: ["Japanese Yuzu", "Lemon Verbena", "Maldon Sea Salt"],
    color: "#d8f830",
    accentBg: "rgba(216, 248, 48, 0.08)",
    tagColor: "#1a1f05",
    cal: 18,
    sugar: "3g agave",
    botanicals: "Cold-pressed whole fruit extraction",
  },
  {
    id: "orange",
    name: "Blood Orange",
    tagline: "Volcanic Sicilian orange pressed with ruby grapefruit and wild rosemary.",
    notes: ["Moro Blood Orange", "Wild Rosemary", "Ruby Grapefruit"],
    color: "#ff4a1c",
    accentBg: "rgba(255, 74, 28, 0.08)",
    tagColor: "#290c05",
    cal: 22,
    sugar: "4g pressed juice",
    botanicals: "Single-origin citrus orchards",
  },
  {
    id: "pear",
    name: "Prickly Pear",
    tagline: "Desert cactus fruit blended with tart hibiscus petals and gentle ginger root.",
    notes: ["Sonoran Cactus Fig", "Hibiscus Flower", "Ginger Root"],
    color: "#b05ff5",
    accentBg: "rgba(176, 95, 245, 0.08)",
    tagColor: "#1d082c",
    cal: 15,
    sugar: "2g fruit sugars",
    botanicals: "Sun-dried wild botanicals",
  },
];

export default function Home() {
  const [activeFlavor, setActiveFlavor] = useState<Flavor>(FLAVORS[0]);
  const [packSize, setPackSize] = useState<"12-can" | "24-can">("12-can");
  const [isOrdered, setIsOrdered] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0f12] text-[#e8ebed] flex flex-col justify-between selection:bg-[#ff4a1c] selection:text-white">
      {/* Top Header */}
      <header className="border-b border-[#21272f] px-6 lg:px-16 py-5 flex items-center justify-between sticky top-0 bg-[#0c0f12]/90 backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 rounded-full bg-[#d8f830] inline-block animate-pulse" />
          <span className="font-extrabold tracking-tighter text-2xl text-white">BRIO</span>
          <span className="text-xs text-[#8a95a5] border-l border-[#2d3540] pl-3 ml-1 hidden sm:inline">
            Cold-pressed botanical soda
          </span>
        </div>

        <nav className="flex items-center gap-8 text-sm font-medium text-[#a0abb8]">
          <a href="#flavors" className="hover:text-white transition-colors">
            Flavors
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            Process
          </a>
          <a href="#nutrition" className="hover:text-white transition-colors">
            Ingredients
          </a>
        </nav>

        <a
          href="#order"
          className="bg-white text-black font-semibold text-xs px-4 py-2.5 rounded-full hover:bg-[#d8f830] transition-colors"
        >
          Order 12-pack
        </a>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="px-6 lg:px-16 pt-12 pb-16 lg:py-20 border-b border-[#21272f]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2d3540] text-xs text-[#a0abb8] bg-[#14181e]">
                <span>Batch #04</span>
                <span className="text-[#556170]">•</span>
                <span>Fresh seasonal pressing</span>
              </div>

              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.04]">
                Pure juice.
                <br />
                Wild herbs.
                <br />
                Fine bubbles.
              </h1>

              <p className="text-lg text-[#95a1b1] max-w-xl leading-relaxed">
                We craft soda like high-grade sparkling wine. Real unpasteurized cold-pressed fruit, zero refined
                sugar, micro-carbonated for a crisp, biting finish without soda syrupy guilt.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#order"
                  className="bg-[#d8f830] text-[#0c0f12] px-7 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Taste the trio box
                </a>
                <a
                  href="#flavors"
                  className="px-6 py-3.5 rounded-full border border-[#2d3540] text-sm text-[#cbd4de] hover:border-[#4d5b6e] transition-colors"
                >
                  Explore recipes
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1d232b]">
                <div>
                  <div className="text-2xl font-bold text-white">&lt; 25</div>
                  <div className="text-xs text-[#7b8797] mt-0.5">Calories per can</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">0g</div>
                  <div className="text-xs text-[#7b8797] mt-0.5">Added cane sugar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-[#7b8797] mt-0.5">Cold-pressed fruit</div>
                </div>
              </div>
            </div>

            {/* Right Hero Product Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#262e38] bg-[#141920] shadow-2xl">
                <Image
                  src="/soda-cans.jpg"
                  alt="Three cans of Brio Botanical Soda on pedestal with condensation droplets"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0c0f12]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between text-xs text-[#cbd4de]">
                  <div>
                    <span className="font-semibold text-white block">Tasting Trio Edition</span>
                    <span>Yuzu Lemon · Blood Orange · Prickly Pear</span>
                  </div>
                  <span className="px-2.5 py-1 bg-white/10 rounded text-[11px] font-mono text-[#d8f830]">
                    330ml Aluminum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Flavor Showcase */}
        <section id="flavors" className="px-6 lg:px-16 py-20 border-b border-[#21272f]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#738294]">
                  Three Distinct Expressions
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
                  Formula engineered for taste, not sweetness
                </h2>
              </div>
              <p className="text-sm text-[#8f9cae] max-w-sm">
                Each profile balances real fruit acidity, aromatics, and fine carbonation.
              </p>
            </div>

            {/* Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {FLAVORS.map((flavor) => {
                const isSelected = activeFlavor.id === flavor.id;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => setActiveFlavor(flavor)}
                    className={`text-left p-6 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "border-white bg-[#161c24] ring-1 ring-white/20"
                        : "border-[#21272f] bg-[#11151b] hover:border-[#384352]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: flavor.color }}
                      />
                      <span className="text-xs font-mono text-[#738294]">{flavor.cal} kcal</span>
                    </div>
                    <div className="font-bold text-xl text-white">{flavor.name}</div>
                    <div className="text-xs text-[#8f9cae] mt-1">{flavor.notes.join(" · ")}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Flavor Detail Card */}
            <div
              className="rounded-2xl p-8 lg:p-12 border border-[#2b3542] transition-colors"
              style={{ backgroundColor: activeFlavor.accentBg }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div
                    className="inline-block px-3 py-1 rounded text-xs font-bold"
                    style={{ backgroundColor: activeFlavor.color, color: activeFlavor.tagColor }}
                  >
                    Selected Tasting Profile
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    {activeFlavor.name}
                  </h3>
                  <p className="text-[#cbd4de] text-base leading-relaxed">
                    {activeFlavor.tagline}
                  </p>

                  <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-[#0c0f12]/80 p-3.5 rounded-lg border border-white/5">
                      <div className="text-[11px] text-[#738294]">Botanical Process</div>
                      <div className="text-xs font-semibold text-white mt-1">{activeFlavor.botanicals}</div>
                    </div>
                    <div className="bg-[#0c0f12]/80 p-3.5 rounded-lg border border-white/5">
                      <div className="text-[11px] text-[#738294]">Sugar Content</div>
                      <div className="text-xs font-semibold text-white mt-1">{activeFlavor.sugar}</div>
                    </div>
                    <div className="bg-[#0c0f12]/80 p-3.5 rounded-lg border border-white/5">
                      <div className="text-[11px] text-[#738294]">Carbonation Level</div>
                      <div className="text-xs font-semibold text-white mt-1">3.4 bar (Fine beads)</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0c0f12] rounded-xl p-6 border border-[#262f3a] space-y-4">
                  <h4 className="text-sm font-semibold text-white">Palate & Tasting Notes</h4>
                  <ul className="space-y-2.5">
                    {activeFlavor.notes.map((note, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-[#cbd4de]">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: activeFlavor.color }}
                        />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-[#1d232c] flex items-center justify-between text-xs">
                    <span className="text-[#8492a3]">Serving recommendation</span>
                    <span className="text-white font-medium">Chilled over hand-carved ice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Manifesto */}
        <section id="process" className="px-6 lg:px-16 py-20 border-b border-[#21272f]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#738294]">
                Production Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
                How we solved the artificial soda problem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#12161d] p-7 rounded-xl border border-[#202731]">
                <div className="text-xs font-mono text-[#d8f830] mb-3">01 / EXTRACTION</div>
                <h3 className="text-lg font-bold text-white mb-2">Cold-press hydraulic juicing</h3>
                <p className="text-xs text-[#8f9cae] leading-relaxed">
                  Heat breaks down natural fruit esters and delicate terpenes. We press our citrus and desert botanicals
                  under inert nitrogen cold pressure within 6 hours of harvest.
                </p>
              </div>

              <div className="bg-[#12161d] p-7 rounded-xl border border-[#202731]">
                <div className="text-xs font-mono text-[#ff4a1c] mb-3">02 / EXTRACTS</div>
                <h3 className="text-lg font-bold text-white mb-2">Slow whole-herb maceration</h3>
                <p className="text-xs text-[#8f9cae] leading-relaxed">
                  Instead of lab-formulated &quot;natural flavorings&quot;, we steep genuine whole herbs, rosemary, and
                  hibiscus blooms to extract deep foundational bitter-sweet notes.
                </p>
              </div>

              <div className="bg-[#12161d] p-7 rounded-xl border border-[#202731]">
                <div className="text-xs font-mono text-[#b05ff5] mb-3">03 / TEXTURE</div>
                <h3 className="text-lg font-bold text-white mb-2">Champagne-grade carbonation</h3>
                <p className="text-xs text-[#8f9cae] leading-relaxed">
                  Commercial sodas use aggressive big bubbles that blow out your palate. We inject microscopic carbonation
                  at 1.2°C for champagne velvet texture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Section */}
        <section id="order" className="px-6 lg:px-16 py-20">
          <div className="max-w-4xl mx-auto bg-[#141920] border border-[#2d3644] rounded-2xl p-8 sm:p-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#d8f830]">
                Direct from the Cannery
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
                Stock your fridge with Brio
              </h2>
              <p className="text-xs sm:text-sm text-[#8f9cae] mt-2">
                Delivered refrigerated to your doorstep in 100% recyclable insulated cardboard packaging.
              </p>
            </div>

            {/* Pack Selector */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setPackSize("12-can")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  packSize === "12-can"
                    ? "bg-white text-black"
                    : "border border-[#343e4e] text-[#8f9cae] hover:border-white"
                }`}
              >
                12-Can Tasting Pack ($34)
              </button>
              <button
                onClick={() => setPackSize("24-can")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  packSize === "24-can"
                    ? "bg-white text-black"
                    : "border border-[#343e4e] text-[#8f9cae] hover:border-white"
                }`}
              >
                24-Can Cellar Case ($62 · Save 15%)
              </button>
            </div>

            <div className="bg-[#0c0f12] rounded-xl p-6 border border-[#262f3a] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-white font-bold text-lg">
                  {packSize === "12-can" ? "12-Can Tasting Variety Box" : "24-Can Variety Cellar Case"}
                </div>
                <div className="text-xs text-[#8f9cae] mt-1">
                  Contains balanced split: 4x Yuzu Lemon, 4x Blood Orange, 4x Prickly Pear
                </div>
              </div>

              <button
                onClick={() => setIsOrdered(true)}
                className="w-full sm:w-auto bg-[#d8f830] text-[#0c0f12] font-bold text-xs px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
              >
                {isOrdered ? "Added to Cart ✓" : `Checkout — ${packSize === "12-can" ? "$34.00" : "$62.00"}`}
              </button>
            </div>

            {isOrdered && (
              <div className="mt-4 p-3 bg-[#d8f830]/10 border border-[#d8f830]/30 rounded-lg text-center text-xs text-[#d8f830]">
                Success! Your tasting pack has been reserved for the next weekly cold dispatch.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#21272f] px-6 lg:px-16 py-8 text-xs text-[#6e7b8c] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 BRIO Botanical Beverages Inc. All ingredients sustainably sourced.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-white transition-colors cursor-pointer">Nutritional Specs</span>
          <span className="hover:text-white transition-colors cursor-pointer">Wholesale Inquiries</span>
          <span className="hover:text-white transition-colors cursor-pointer">Privacy & Terms</span>
        </div>
      </footer>
    </div>
  );
}
