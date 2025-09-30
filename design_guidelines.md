# BlockSub Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from Stripe's clean professionalism + Solana's vibrant Web3 aesthetics + Linear's sharp typography. This creates a fintech-meets-crypto visual language that feels both trustworthy and cutting-edge.

**Key Principles**:
- Motion-first design: Smooth scroll animations, card reveals, hover states
- Technical sophistication through restraint and precision
- Web3 energy with enterprise credibility

## Color Palette

**Primary Colors**:
- Deep Purple: 260 95% 35% (main brand, CTAs)
- Electric Blue: 220 90% 60% (accents, interactive elements)
- Dark Navy: 230 30% 12% (backgrounds, cards in dark mode)

**Supporting Colors**:
- Subtle Gray: 220 15% 85% (light mode surfaces)
- Success Green: 150 70% 45% (active subscriptions, positive metrics)
- Warning Amber: 40 95% 60% (alerts, retry states)

**Gradients**: Use sparingly for hero section and key CTAs - Purple to Blue diagonal gradients (260 95% 35% → 220 90% 60%)

## Typography

**Font Stack**:
- Headlines: Inter (700-800 weight) - sharp, modern
- Body: Inter (400-500) - excellent readability
- Code/Technical: JetBrains Mono - for API keys, code snippets

**Hierarchy**:
- Hero: text-6xl to text-8xl, font-bold, tracking-tight
- Section Headers: text-4xl to text-5xl, font-bold
- Subheadings: text-xl to text-2xl, font-semibold
- Body: text-base to text-lg, leading-relaxed

## Layout System

**Spacing Units**: Consistently use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for predictable rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card spacing: p-8 to p-12
- Element gaps: gap-4, gap-8, gap-12

**Container Strategy**:
- Full-width sections with inner max-w-7xl
- Content sections: max-w-6xl
- Documentation viewer: max-w-4xl for optimal reading

## Component Library

### Navigation
- Sticky header with blur backdrop (backdrop-blur-lg)
- Logo + horizontal nav links + "Get API Key" CTA button
- Mobile: hamburger menu with slide-in drawer

### Hero Section
- Full-viewport height (min-h-screen)
- Large headline with gradient text effect
- Animated code snippet showing 1-line integration
- Video player with custom controls (16:9 aspect ratio)
- Floating card UI elements with parallax depth

### Feature Showcase
- 3-column grid on desktop (grid-cols-3)
- Each feature card: icon, title, description
- Hover states: lift effect (translate-y-2) + shadow enhancement
- Staggered entrance animations on scroll

### API Key Management Dashboard
- Card-based layout with subtle shadows
- Generate new key button (prominent, primary color)
- Key display with copy-to-clipboard interaction
- Usage metrics: bar charts showing request counts
- Revoke key option (destructive, red color)

### Pricing Section
- 2-column comparison (Free vs Paid)
- Highlight "Free 2 Months" with badge
- Feature checklist with checkmark icons
- Gradient border on recommended plan

### API Documentation Viewer
- 2-column layout: sidebar navigation + content area
- Syntax-highlighted code blocks with copy buttons
- Expandable/collapsible sections
- Search functionality at top
- Language selector tabs (JavaScript, Python, cURL)

### Merchant Dashboard Mockup
- 4-metric cards grid: MRR, Active Subs, Churn, Failed Payments
- Line chart placeholder for revenue over time
- Recent subscriptions table with status badges
- Empty state illustrations with placeholder content

### Protocol Animation Section
- Center-stage animated diagram showing:
  - Wallet → Vault → Merchant flow
  - Token icons moving along paths
  - Timed withdrawal triggers
- Interactive timeline slider to control animation
- Labels with hover tooltips explaining each step

## Animations & Interactions

**Scroll Animations**:
- Fade-in-up for cards (opacity + translateY)
- Stagger delays: 100ms between elements
- Scale entrance for metric counters
- Parallax backgrounds (subtle, 0.3-0.5 speed)

**Hover States**:
- Cards: scale(1.02) + shadow-2xl
- Buttons: brightness(1.1) + slight scale
- Links: underline animation (left to right)

**Micro-interactions**:
- Copy button: checkmark feedback on click
- API key generation: loading spinner → success animation
- Form validation: shake on error, slide-in success message
- Metric counters: count-up animation on viewport enter

**Page Transitions**:
- Smooth scroll behavior
- Section fade-ins at 20% viewport visibility
- Navigation link active states with bottom border

## Images & Visual Assets

**Hero Section**: 
- Large illustration or abstract visual representing blockchain/payments network
- Floating UI elements (cards, tokens) with depth and shadows
- Consider using gradient mesh backgrounds

**Feature Icons**: 
- Use Heroicons for consistency (outline style)
- Size: w-10 h-10 to w-12 h-12
- Primary color with hover state transitions

**Dashboard Mockups**:
- High-fidelity screenshots or SVG representations
- Show actual data visualizations (charts, graphs)
- Device frames (browser window chrome) for context

**Protocol Diagram**:
- Custom SVG illustration showing subscription flow
- Animated paths connecting wallet, vault, merchant
- Token icons (USDC logo) moving along paths

## Page Structure

1. **Hero** - Full viewport, video demo, headline, CTA
2. **Problem Statement** - 2-column: Web2 vs Web3 comparison
3. **Solution Overview** - Animated protocol explanation
4. **Features Grid** - 3-4 columns, icon-driven cards
5. **API Showcase** - Live code example with syntax highlighting
6. **Dashboard Preview** - Merchant analytics mockup
7. **Pricing** - 2-column comparison table
8. **API Documentation** - Embedded docs viewer or link to dedicated page
9. **Roadmap** - Timeline visualization with phases
10. **CTA Section** - Get started, sign up for API key
11. **Footer** - Links, social, newsletter signup

## Responsive Behavior

- Desktop (lg): Multi-column grids, side-by-side layouts
- Tablet (md): 2-column maximum, reduced spacing
- Mobile: Single column, increased touch targets (min 44px), simplified navigation

## Dark Mode Implementation

All components must support dark mode with:
- Dark navy backgrounds (230 30% 12%)
- Lighter text (gray-100 to gray-200)
- Reduced shadow intensities
- Adjusted gradient opacities
- Form inputs with dark borders and fills

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support (focus states visible)
- Color contrast ratios meeting WCAG AA
- Alt text for all images and icons
- Skip navigation link for screen readers