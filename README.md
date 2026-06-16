# The Generals AICONS — Design System

> **"Lead. Conquer. Dominate."**

## About

**The Generals AICONS** is a network marketing leadership team led by Commander Ryan Jay Bullas. The brand is built around military-grade leadership, financial freedom, and a duplication-first system for team growth. The visual identity is bold, premium, and unapologetically commanding — gold crowns, deep reds, and dark backgrounds signal authority and ambition.

### Sources Provided
- `uploads/Generals_AICONS_Brand_Guidelines_1.pdf` — Official brand guidelines PDF
- `uploads/Generals 2.mp4`, `uploads/Generals 1.mov` — Brand/team video reels
- `uploads/c703bd01-8285-4173-b439-780c21eaac27.jpg` — Primary logo (black bg, gold crown + stars)
- `uploads/ryan_jay_bullas.png`, `uploads/merlinda_rodriguez.png`, `uploads/juanito_tabuzo.png`, `uploads/leonard_caguicla.png`, `uploads/jay_faderogaya.png` — Leadership portraits

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Commanding, motivational, aspirational** — like a military commander inspiring troops before battle
- **Bold declaratives.** Short punchy sentences. No hedging, no softening language.
- **Action-first.** Every headline and CTA uses verbs: Join. Lead. Conquer. Dominate. Rise. Build.
- **We and You.** "We are The Generals" + direct address "You have what it takes."
- **Uppercase for identity.** Brand name, rank titles, and taglines always uppercase.

### Casing
- **UI labels, nav, eyebrows, buttons:** ALL CAPS with wide tracking (0.25–0.5em)
- **Headlines/titles:** Title Case or ALL CAPS
- **Body copy, quotes, descriptions:** Sentence case
- **Rank names:** Title Case — Commander, Diamond Rank, Gold Rank

### Copywriting Patterns
- Eyebrow → Title → Subhead → Body → CTA (consistent section structure)
- Tagline: **"Lead · Conquer · Dominate"** — used at page/slide endings
- Section labels are short (2–3 words): "The Team", "Our Leaders", "Join Today"
- Star ★ used as bullet point / list divider (brand-aligned)
- Emoji: **not used** in primary brand content. Star ★ and · used as text symbols only.

### Examples
- ✓ "Join the Generals" / "Rise with the best" / "Proven. Duplicatable. Life-changing."
- ✗ "Come check us out 😊" / "We think you might want to..." / "explore our offerings"

---

## VISUAL FOUNDATIONS

### Colors
- **Primary:** Gold `#F5C842` (bright), `#C9961A` (mid), `#8B6310` (deep) — metallic gradient effect
- **Accent:** Crimson Red `#9B1A0A` (brand red), `#C0281A` (vivid red)
- **Background:** Near-black `#080808`, card `#0E0E0E`, lifted `#161616`
- **Text:** White `#FFFFFF` on dark, Warm ivory `#F4EEE1` as light-mode bg
- **Color vibe:** Warm, dark, premium. Think military medal + cinema gold. NOT neon, NOT cool blue.
- **Light mode:** Inverts to warm ivory bg, dark espresso text, deep gold accents

### Typography
- **Primary font:** Montserrat (weights 400–900) — all body, UI, nav, buttons
- **Display font:** Custom condensed slab (brand-specific, substituted with Oswald from Google Fonts — ⚠️ please provide original font files)
- **Type style:** UPPERCASE + wide tracking for all UI elements; tight tracking for headlines
- **Gradient text:** Gold gradient sweep on hero titles (`--gradient-gold-sweep`)

### Backgrounds
- **Dark sections:** `#080808` base with subtle gold mountain/terrain SVG scene (low opacity)
- **Cards:** `#0E0E0E` with `1px solid rgba(197,148,26,0.18)` gold-tinted border
- **No gradients as BG:** Dark flat + subtle texture; gradient used only on text and decorative elements
- **Grid texture:** Faint `repeating-linear-gradient` crosshatch at low opacity over hero

### Layout
- **Max content width:** 1200px centered
- **Section padding:** 80px vertical, 40px horizontal
- **Grid:** CSS Grid with gap-based spacing; no floats
- **Fixed nav:** Sticky top, `backdrop-filter: blur(8px)`, gold-bordered bottom line
- **Hero:** 2-column grid (copy left, video/image right); stacks on mobile

### Borders & Cards
- **Corner style:** SHARP (border-radius: 0) — military precision aesthetic. No rounded corners on cards.
- **Border:** 1px gold-tinted (`rgba(197,148,26,0.18)`), brightens on hover to `0.45`
- **Gold bracket corners:** Decorative `::before`/`::after` corner marks on key cards (video frame, photo cells)
- **Card hover:** `translateY(-4px)` lift + brightened border + subtle gold glow

### Shadows
- **Inner/outer:** `box-shadow: 0 8px 24px rgba(0,0,0,0.4)` for card elevation
- **Gold glow:** `0 0 24px rgba(197,148,26,0.28)` on featured/hero elements
- **No soft drop shadows** on text — gradient text-clip instead

### Animations & Motion
- **Entrance:** Fade + translate-up (`hero-rise`) for hero content; visibility-gated
- **Easing:** `cubic-bezier(0.22,1,0.36,1)` for spring-like exits/hovers
- **Scroll reel:** `cubic-bezier(0.65,0,0.35,1)` for column scrolling
- **Hover states:** Lift + brighten border; no color inversions on dark cards
- **Meteors:** Diagonal gold streak particles, site-wide ambient effect
- **Reduced motion:** All entrance/reel/meteor animations disabled via `@media (prefers-reduced-motion)`

### Iconography
- **No icon font or icon library used.** Iconography is primarily:
  - ★ star character (gold) — achievement, bullets, ratings
  - SVG inline icons (chevrons, quote marks, play button, social icons)
  - Emoji used sparingly and only in informal contexts (learning materials)
  - Gold corner brackets `┌ ┐ └ ┘` as decorative frame elements on images

### Imagery
- **Color treatment:** Desaturated portraits with gold sheen overlay (`mix-blend-mode: saturation + overlay`)
- **Photos:** Leadership team portraits, event photos, group shots — warm-toned originals
- **Videos:** Muted autoplay hero reel; 16:9 aspect ratio
- **No stock imagery.** All photos are authentic team shots.

### Hover & Interaction States
- **Links/buttons:** `color: var(--gold-bright)` on hover; no underline
- **Cards:** `translateY(-4px)` + border brightens
- **Buttons (glass):** `translateY(-3px)` spring lift + shadow disc widens
- **Images/portraits:** Scale or brightness on hover; color highlight on focused state
- **Press/active:** `scale(0.93)` or `translateY(0)` snap back

### Transparency & Blur
- **Nav bar:** `backdrop-filter: blur(8px)` frosted glass
- **Dropdowns:** `backdrop-filter: blur(16px)` heavy frost
- **Glass buttons:** `backdrop-filter: blur(14px)` + semi-transparent fill
- **Used sparingly** — only on overlaid UI surfaces, not decorative elements

---

## ICONOGRAPHY

The brand uses no third-party icon system. Icons are:
1. **Unicode symbols:** ★ (star), · (interpunct), → (arrow)
2. **Inline SVG:** Custom chevrons, quote glyphs, social logos
3. **Decorative brackets:** Gold L-shaped corner marks on media frames

If an icon system is needed for future components, recommend **Lucide Icons** (clean, 1.5px stroke, neutral style compatible with the brand's precision aesthetic).

---

## FILES & STRUCTURE

```
styles.css                      ← Design system entry point (import this)
tokens/
  colors.css                    ← All color custom properties
  typography.css                ← Font families, scale, tracking
  spacing.css                   ← Spacing, radius, shadows, motion
assets/
  logo-dark.jpg                 ← Primary logo (black background)
  logo.jpg                      ← Logo variant
  brand-photo.jpg               ← Brand photo
  generals-hero.mp4             ← Hero video reel
  team/                         ← Leadership portrait photos
    ryan_jay_bullas.png
    merlinda_rodriguez.png
    juanito_tabuzo.png
    leonard_caguicla.png
    jay_faderogaya.png
components/
  core/
    Button.jsx + Button.d.ts    ← Primary button variants
    Badge.jsx + Badge.d.ts      ← Rank/status badges
    Card.jsx + Card.d.ts        ← Base card container
guidelines/
  colors.card.html              ← Color palette specimen
  typography.card.html          ← Type scale specimen
  spacing.card.html             ← Spacing + radius specimen
  brand.card.html               ← Logo + brand identity specimen
The Generals Team.html          ← Full website / UI kit
SKILL.md                        ← Agent skill definition
README.md                       ← This file
```

### Leadership Team
| Name | Role | Rank |
|------|------|------|
| Ryan Jay Bullas | Commander | Top Team |
| Merlinda Rodriguez | Team Leader | Diamond |
| Juanito Tabuzo | Team Leader | Gold |
| Leonard Caguicla | Team Leader | Silver |
| Jay Faderogaya | Team Leader | Gold |

---

## FILE INDEX

| File | Purpose |
|------|---------|
| `styles.css` | Design system entry point — import this one file |
| `tokens/colors.css` | 135 color tokens, gold/red/neutral scales, gradients, semantic aliases |
| `tokens/typography.css` | Font families, type scale (8px–76px), weights, tracking, leading |
| `tokens/spacing.css` | 4px spacing scale, radii, shadows, motion easings/durations, z-index |
| `components/core/Button.jsx` | Glass pill CTA button — primary/ghost/red variants |
| `components/core/Badge.jsx` | Rank/status badge — gold/red/ghost/dark variants |
| `components/core/Card.jsx` | Base card container — sharp corners, gold border, hover lift |
| `guidelines/brand-logo.card.html` | Logo specimen |
| `guidelines/brand-motifs.card.html` | Stars, brackets, tagline, separators |
| `guidelines/brand-team.card.html` | Leadership team portrait card |
| `guidelines/colors-gold.card.html` | Gold palette swatches |
| `guidelines/colors-red.card.html` | Red palette swatches |
| `guidelines/colors-neutral.card.html` | Neutral/black/ivory swatches |
| `guidelines/colors-gradients.card.html` | Named gradient specimens |
| `guidelines/type-display.card.html` | Hero and section heading styles |
| `guidelines/type-body.card.html` | Body, UI, labels, nav type styles |
| `guidelines/spacing.card.html` | Spacing scale bar chart |
| `guidelines/radii.card.html` | Border radius + border weight specimens |
| `assets/logo-dark.jpg` | Primary logo (black background) |
| `assets/generals-hero.mp4` | Hero video reel |
| `assets/team/` | Leadership portraits (5 members) |
| `The Generals Team.html` | Full website UI kit — hero, team, events, training hub, media center |
| `SKILL.md` | Agent skill definition for Claude Code |
| `README.md` | This file |

---

## CAVEATS & NOTES

⚠️ **Font:** The brand's custom condensed display font is not available. **Oswald** (Google Fonts) is used as a substitution. Please provide the original `.ttf`/`.otf` file for production use.

⚠️ **Logo variants:** Only the dark-background logo is available. A transparent-background PNG version would be useful.

⚠️ **Brand guidelines PDF:** The PDF is image-encoded and could not be machine-read. Visual analysis of the logo and video was used to derive these guidelines.
