---
name: Coastal Editorial
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#43474d'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4c6078'
  primary: '#000e1d'
  on-primary: '#ffffff'
  primary-container: '#0e2439'
  on-primary-container: '#778ca5'
  inverse-primary: '#b3c8e4'
  secondary: '#805521'
  on-secondary: '#ffffff'
  secondary-container: '#fec485'
  on-secondary-container: '#794f1b'
  tertiary: '#000f0d'
  on-tertiary: '#ffffff'
  tertiary-container: '#002823'
  on-tertiary-container: '#009b8b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e4ff'
  primary-fixed-dim: '#b3c8e4'
  on-primary-fixed: '#061d31'
  on-primary-fixed-variant: '#34485f'
  secondary-fixed: '#ffddbb'
  secondary-fixed-dim: '#f5bc7e'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#653e0b'
  tertiary-fixed: '#71f8e4'
  tertiary-fixed-dim: '#4fdbc8'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '500'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '500'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4.5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system expresses high-end tropical coastal hospitality. It bridges the effortless, sun-drenched soul of Balinese surf heritage with the poised discipline of a luxury editorial publication. 

The aesthetic is **Warm Minimalist Editorial**:
- **Atmosphere:** Grounded, breezy, discerning, and cinematic. It evokes salt spray, weathered teak, linen, and deep ocean swells without resorting to tropical clichés or kitsch surf tropes.
- **Imagery & Surface:** Expansive photography anchors every view, surrounded by generous unhurried whitespace and tactile, paper-soft surfaces. Textures mimic sand-washed canvas and warm limestone.
- **Graphic Posture:** Crisp hairline borders, structured modular grids, refined small-caps micro-typography, and restrained status accents. The visual tone speaks directly to cultured travelers who value craft, ocean literacy, and elevated leisure.

## Colors

The palette draws directly from the natural conditions of coastal Bali at dawn and golden hour:

- **Primary (`#0E2439` / Deep Ocean Navy):** Used for commanding headlines, structural text, authoritative actions, and solid high-contrast sections (such as night mode banners or footer blocks).
- **Secondary (`#E0A96D` / Sunlit Amber Sand):** Used selectively for focal accents, luxury badges, active indicators, and subtle highlights. It brings golden-hour warmth against cool deep sea tones.
- **Tertiary (`#14B8A6` / Tropical Sea-Glass):** Used with strict restraint for availability badges, live ocean conditions (swell, tide, wind), and positive alerts.
- **Neutral Background (`#FAF8F5` / Warm Sand Off-White):** The foundational canvas for the entire experience. It avoids clinical digital white in favor of a soft, tactile, sun-bleached linen tone.
- **Slate Support (`#1E293B`):** Secondary text, subtle borders, and contextual body copy.

### Color Hierarchy Rules
- Never use neon or high-saturation fills.
- High-contrast text must sit over `#FAF8F5` or `#F3EFEA` to ensure effortless reading in bright daylight.
- Accent tones (`#E0A96D` and `#14B8A6`) should occupy less than 8% of the viewport at any time.

## Typography

The typographical cadence contrasts an editorial serif with crisp geometric utilitarian typography:

- **Editorial Headings (`Playfair Display`):** Carries the legacy of boutique travel and literary surf memoirs. Applied strictly to hero displays, narrative titles, and editorial quotes.
- **Narrative & Body (`Plus Jakarta Sans`):** Warm, contemporary geometry with open apertures that ensure supreme legibility on mobile devices under direct sunlight.
- **Metrics & Utility (`Inter`):** Reserved for metadata, surf report metrics (tide, swell direction, wind speed), navigation markers, and form labels. Often set in tracked uppercase (`label-caps`) for an archival, precision aesthetic.

## Layout & Spacing

The layout is built on a 12-column fluid grid system paired with deliberate structural breathing room:

- **Grid Geometry:**
  - **Desktop (1024px+):** 12 columns with 2.5rem gutters and generous 4.5rem canvas margins. Maximum container width capped at `1440px`.
  - **Tablet (768px - 1023px):** 8 columns with 1.5rem gutters and 2.5rem side margins.
  - **Mobile (< 768px):** 4 columns with 1rem gutters and 1.25rem outer margins.
- **Rhythm & Cadence:** Alternates tight data modules (surf condition matrices, booking pickers) with spacious editorial spreads. White space functions as a luxury material; sections should never feel stacked or hurried.

## Elevation & Depth

This design system dismisses synthetic blur effects and glossy glassmorphism in favor of **Tonal Layers & Tactile Outlines**:

- **Surfaces & Layers:** Depth is created by shifting from base sand (`#FAF8F5`) to raised warm parchment (`#F3EFEA`), bounded by fine hairline borders (`#E2DDD5` or rgba(14, 36, 57, 0.08)).
- **Shadow Profile:** Shadows are rarely applied. When essential (e.g., sticky booking bars or floating navigation over photo heroes), use a single warm, diffused ambient shadow:
  - `box-shadow: 0 16px 36px -10px rgba(14, 36, 57, 0.07);`
- **Photography Integration:** Imagery is framed flush with hairline borders or paired edge-to-edge against contrasting natural slate planes to produce architectural presence rather than simulated digital float.

## Shapes

The design system maintains a **Soft Architectural (`roundedness: 1`)** silhouette:

- Base corner radius is `0.25rem` (4px), lending an understated, hand-crafted feel akin to fine printed paper or custom architectural millwork.
- Large containers, image frames, and cards use `rounded-lg` (`0.5rem` / 8px).
- Strict rule: No circular or pill-shaped buttons (`rounded-full`) for core actions, as they diminish the architectural rigor. Pills are reserved strictly for compact surf status indicators and live tide badges.

## Components

### Buttons
- **Primary:** Solid Deep Navy (`#0E2439`) background, sand off-white (`#FAF8F5`) text, `0.25rem` radius, subtle hover transition shifting to `#1E293B`. Uses `label-caps` typography with tracking.
- **Secondary / Ghost:** Transparent background with a `1px` border in `#0E2439` (or `#FAF8F5` over hero photography), text color matching border.
- **Accent Link:** Understated inline text in `#0E2439` with a persistent warm amber (`#E0A96D`) baseline accent that expands on hover.

### Cards (Accommodations & Surf Packages)
- Built on `#F3EFEA` or clean `#FAF8F5` backgrounds with a `1px solid rgba(14, 36, 57, 0.08)` border.
- Images feature fixed ratios (3:2 or 4:5 editorial portrait) with no internal padding around the perimeter.
- Content padding is generous (`space-lg`), separating package details with crisp horizontal hairlines.

### Input Fields & Selectors
- Background set to pure `#FAF8F5` with a baseline `1px` border in `#D4CDC5`.
- Active focus transitions the border to `#0E2439` with no loud outer glow rings.
- Placeholder text in muted slate (`#64748B`), styled in `body-md`.

### Surf Condition Badges & Chips
- Subtle micro-tags with `0.25rem` radius or discreet pill framing.
- Sea-glass green (`#14B8A6`) or warm amber (`#E0A96D`) tinted backgrounds at 10% opacity, paired with full-strength text tokens for crisp readability.
- Monospaced numerical values set in `Inter` (`label-caps`) for swell height, period, and wind bearing.

### Checkboxes & Selection Toggles
- Custom square selectors (`0.125rem` radius) outlined in `#1E293B`. Checked state fills with `#0E2439` displaying an off-white geometric checkmark.

### Additional Domain Components
- **Live Tide & Swell Gauge:** A refined horizontal telemetry component displaying wave height, period, and tide curve with hairline vector strokes and small-caps labels.
- **Instructor & Board Dossier:** Split-screen editorial layout highlighting shaper specifications, board volume, and guide credentials.