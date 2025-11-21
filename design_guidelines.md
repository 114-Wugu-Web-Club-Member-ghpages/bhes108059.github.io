# Design Guidelines: 二次元 (Anime) Photo Gallery Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from popular anime-style platforms like Pixiv, ArtStation (anime section), and modern Japanese web design aesthetics. The design will embrace playful, soft, and whimsical elements characteristic of anime/manga culture while maintaining modern web usability.

## Core Design Principles
1. **Soft & Playful**: Rounded corners, gentle shadows, and approachable UI elements
2. **Visual Hierarchy**: Clear focus on photos as primary content
3. **Anime Aesthetics**: Incorporate anime-inspired typography, icons, and spatial relationships
4. **Breathing Room**: Generous spacing to let photos shine

## Typography

**Primary Font**: "M PLUS Rounded 1c" or "Noto Sans JP" via Google Fonts (captures anime-style softness)
**Accent Font**: "Poppins" for English elements

- **Hero Title**: text-5xl md:text-7xl, font-bold, tracking-tight
- **Section Headers**: text-3xl md:text-4xl, font-semibold
- **Photo Titles**: text-xl md:text-2xl, font-medium
- **Body Text**: text-base md:text-lg, font-normal
- **Captions/Meta**: text-sm, font-light

## Layout System

**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Component padding: p-4, p-6, p-8
- Section spacing: py-12, py-16, py-24
- Grid gaps: gap-4, gap-6, gap-8

**Container Widths**:
- Max content width: max-w-7xl
- Photo grid: max-w-full with inner padding px-4 md:px-8

## Component Library

### Navigation
- **Floating Header**: Fixed top navigation with backdrop blur (backdrop-blur-md)
- Rounded container: rounded-full on desktop, full-width on mobile
- Height: h-16 md:h-20
- Inner padding: px-6 md:px-8
- Logo: Small anime-style character icon or text logo (h-8 md:h-10)
- Navigation links: Inline with hover scale effect (hover:scale-105 transition-transform)

### Hero Section
- **Layout**: Full viewport height (min-h-screen) with centered content
- **Structure**: 
  - Large hero image/illustration showing anime-style photo gallery concept
  - Overlay with gradient backdrop
  - Centered text: Main title + subtitle + CTA button
  - Floating photo cards arranged around edges (decorative)
- **CTA Button**: Large rounded button (rounded-full, px-8 py-4) with blurred background (backdrop-blur-md bg-white/20)
- **Height**: min-h-[90vh]

### Photo Grid (Main Gallery)
- **Layout**: Masonry grid using CSS Grid
- **Columns**: 
  - Mobile: grid-cols-1
  - Tablet: grid-cols-2 md:grid-cols-3
  - Desktop: lg:grid-cols-4
- **Gap**: gap-4 md:gap-6
- **Card Design**:
  - Rounded corners: rounded-2xl md:rounded-3xl
  - Overflow hidden for images
  - Subtle shadow: shadow-lg
  - Hover effect: hover:scale-105 transition-transform duration-300
  - Padding inside card: p-3 for meta info

### Photo Card Components
- **Image Container**: aspect-square or aspect-[3/4], overflow-hidden, rounded-xl
- **Meta Section**: p-4, flex justify-between items-center
- **Title**: Truncate with text-ellipsis
- **Icons**: Small circular badges (h-8 w-8, rounded-full) for likes/views

### Photo Detail Modal/Page
- **Layout**: Full screen overlay with max-w-6xl centered container
- **Image Display**: Max height 80vh, object-contain, rounded-2xl
- **Info Panel**: Side panel (lg:w-96) or bottom panel on mobile
- **Padding**: p-6 md:p-8
- **Close Button**: Floating top-right, rounded-full, backdrop-blur-md

### Upload Section
- **Drag & Drop Area**: Large rounded-3xl container (min-h-[400px])
- **Border**: Dashed border-2 with rounded corners
- **Icon**: Large upload icon (h-16 w-16) centered
- **Text**: Instructions below icon
- **Button**: Rounded-full primary button below text

### Footer
- **Layout**: Three columns on desktop, stacked on mobile
- **Content**: 
  - About/Bio column
  - Quick links column
  - Social media icons (rounded-full buttons, h-12 w-12)
- **Padding**: py-12 md:py-16

## Icons
**Library**: Heroicons via CDN
- Use outline style for navigation
- Use solid style for interactive elements (likes, shares)
- Consistent sizing: h-5 w-5 for inline, h-6 w-6 for standalone

## Interaction Patterns
- **Hover States**: Subtle scale transforms (scale-105), no transitions over 300ms
- **Click Feedback**: Brief scale-down effect (active:scale-95)
- **Image Loading**: Blur-up placeholder with skeleton screens
- **Scroll Behavior**: Smooth scrolling enabled

## Responsive Breakpoints
- **Mobile**: Base (< 768px) - Single column, stacked layout
- **Tablet**: md (768px+) - 2-3 column grid
- **Desktop**: lg (1024px+) - 4 column grid, side panels visible

## Images

### Hero Image
**Location**: Full-width background in hero section
**Description**: Anime-style illustration showing a collage of colorful photo frames floating in a dreamy space, with soft particle effects and a gentle gradient background. Should evoke a sense of creativity and sharing.
**Treatment**: Overlay with gradient (from transparent to semi-transparent) to ensure text readability

### Decorative Elements
- Small floating anime-style sticker illustrations around hero section
- Cute mascot character in footer or about section
- Decorative line art dividers between sections

### Photo Placeholders
Use diverse anime/manga-style artwork placeholders in the demo grid (landscape, portrait, character art, scenery)

## Unique Anime-Style Touches
- **Rounded Everything**: All cards, buttons, and containers use rounded-2xl or rounded-3xl
- **Soft Shadows**: Use shadow-lg with reduced opacity for depth without harshness
- **Playful Animations**: Gentle bounce on load, floating effects on decorative elements
- **Badge System**: Small circular badges for categories (rounded-full, px-3 py-1, text-xs)
- **Star Ratings**: Use star icons for featured photos
- **Emoticon Integration**: Include cute emoji/emoticon in empty states and loading screens