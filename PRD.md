# Planning Guide

A professional website for Richard Brown III's "Grief Talk" practice, showcasing his work as a Certified Grief Recovery Specialist, Trauma-informed coach, certified death doula, author, and creator of "Grief Talks" - providing resources, book sales, and information to help communities heal forward.

**Experience Qualities**: 
1. **Warm & Compassionate** - The site should feel like a safe, welcoming space that acknowledges pain while offering hope and healing.
2. **Grounded & Professional** - Communicate credibility and expertise while maintaining accessibility and human connection.
3. **Purposeful & Clear** - Every element should guide visitors toward understanding Richard's mission and accessing the resources they need.

**Complexity Level**: Content Showcase (information-focused)
  - Primary focus on presenting Richard's credentials, mission, and published works with an integrated book store for purchases.

## Essential Features

**Hero Section**
- Functionality: Display site branding with logo, tagline, and primary call-to-action
- Purpose: Immediately communicate the site's mission and establish emotional tone
- Trigger: Page load
- Progression: Logo + headline → tagline "Where the Silence Ends and Healing Begins" → CTA buttons (About/Shop)
- Success criteria: Visitors understand the purpose within 3 seconds

**Navigation**
- Functionality: Global navigation menu with sections (Home, About, Books/Shop, Contact)
- Purpose: Provide clear wayfinding throughout the site
- Trigger: Always visible in header
- Progression: Click section → smooth scroll or navigation to section
- Success criteria: All sections easily accessible from any point

**About Section**
- Functionality: Detailed biography and credentials for Richard Brown III
- Purpose: Build trust and establish expertise
- Trigger: Navigation click or scroll
- Progression: Professional photo → credentials → bio → speaking topics
- Success criteria: Visitors understand Richard's qualifications and approach

**Book Store**
- Functionality: Display books with covers, descriptions, and purchase options
- Purpose: Showcase published works and enable purchases
- Trigger: Navigation to Books section
- Progression: Book grid display → click book → view details → external purchase link/modal
- Success criteria: Clear presentation of each book with accessible purchase paths

**Contact Section**
- Functionality: Contact information and inquiry form
- Purpose: Enable visitors to reach out for speaking engagements or coaching
- Trigger: Navigation or CTA
- Progression: Display contact options → form submission → confirmation
- Success criteria: Multiple ways to connect provided

## Edge Case Handling
- **No books yet**: Display coming soon message with newsletter signup
- **Long bio content**: Implement read more/collapse for mobile responsiveness
- **External purchase links**: Clear indication when leaving site
- **Form submission errors**: Graceful error handling with helpful messages
- **Slow image loading**: Skeleton states and optimized images

## Design Direction
The design should evoke warmth, safety, and professional compassion - using the rich earth tones from the logo (deep brown, warm orange, golden yellow) to create a grounded, hopeful atmosphere. The interface should be minimal yet welcoming, allowing Richard's message and credentials to take center stage while the warm color palette provides emotional resonance.

## Color Selection
Custom palette drawn directly from the provided logo, creating visual harmony and brand consistency.

- **Primary Color**: Deep Brown (oklch(0.25 0.04 40)) - Grounding, stability, and wisdom; conveys depth and seriousness appropriate for grief work
- **Secondary Colors**: 
  - Warm Orange (oklch(0.65 0.15 45)) - Hope, transformation, and warmth
  - Rich Terracotta (oklch(0.55 0.12 40)) - Compassion and connection
- **Accent Color**: Golden Yellow (oklch(0.80 0.12 85)) - Light, healing, and optimism breaking through darkness
- **Foreground/Background Pairings**:
  - Background (Cream/Warm White oklch(0.97 0.01 75)): Dark Brown text (oklch(0.20 0.02 40)) - Ratio 12.5:1 ✓
  - Card (Light Cream oklch(0.95 0.02 70)): Dark Brown text (oklch(0.20 0.02 40)) - Ratio 11.8:1 ✓
  - Primary (Deep Brown oklch(0.25 0.04 40)): Cream text (oklch(0.97 0.01 75)) - Ratio 12.5:1 ✓
  - Secondary (Warm Orange oklch(0.65 0.15 45)): Dark Brown text (oklch(0.20 0.02 40)) - Ratio 4.9:1 ✓
  - Accent (Golden Yellow oklch(0.80 0.12 85)): Dark Brown text (oklch(0.20 0.02 40)) - Ratio 7.8:1 ✓
  - Muted (Soft Tan oklch(0.85 0.03 65)): Dark Brown text (oklch(0.25 0.03 40)) - Ratio 8.2:1 ✓

## Font Selection
Typography should convey both warmth and professionalism, balancing accessibility with gravitas appropriate for grief and healing work.

- **Primary Font**: Lora (serif) - Elegant, warm serif with excellent readability; conveys thoughtfulness and established wisdom
- **Secondary Font**: Inter (sans-serif) - Clean, modern sans-serif for UI elements and body text; ensures clarity and professionalism

- **Typographic Hierarchy**:
  - H1 (Main Headline): Lora Bold/48px/tight letter-spacing - commanding presence
  - H2 (Section Headers): Lora SemiBold/36px/normal - clear hierarchy
  - H3 (Subsections): Lora Medium/24px/normal - supporting structure
  - Body Text: Inter Regular/16px/1.6 line-height - optimal readability
  - Small Text/Captions: Inter Regular/14px/1.5 line-height - supporting information
  - Buttons/CTAs: Inter SemiBold/16px/slight letter-spacing - clear actions

## Animations
Animations should be gentle and purposeful, reflecting the sensitive nature of grief work while maintaining professional polish - subtle enough to support without distraction, meaningful enough to guide attention and create moments of warmth.

- **Purposeful Meaning**: Gentle fades and slides communicate care and thoughtfulness; avoid abrupt transitions that might feel jarring
- **Hierarchy of Movement**: 
  - Hero section: Soft fade-in on load
  - Navigation: Smooth underline transitions on hover
  - Cards: Gentle lift on hover with subtle shadow increase
  - Buttons: Soft color transitions and slight scale on interaction
  - Scroll reveals: Fade up animations for sections as they enter viewport

## Component Selection
- **Components**: 
  - Button (primary/secondary variants for CTAs)
  - Card (for book displays and content sections)
  - Avatar (for Richard's professional photo)
  - Badge (for credentials display)
  - Separator (section dividers)
  - Form elements (Input, Textarea, Label) for contact form
  - Dialog (for book detail modals if needed)
  
- **Customizations**: 
  - Custom hero section with logo integration
  - Custom book card layout with hover states
  - Custom navigation with smooth scroll
  - Footer with social links and copyright
  
- **States**: 
  - Buttons: Default, Hover (slight lift + darker), Active (pressed), Focus (ring)
  - Cards: Default, Hover (lift + shadow), Focus
  - Inputs: Default, Focus (warm ring), Error (gentle red), Success (subtle)
  
- **Icon Selection**: 
  - Book icon for shop section
  - User icon for about section
  - Envelope/PaperPlane for contact
  - Flame icon to complement logo theme
  - Quote icon for testimonials if included
  
- **Spacing**: 
  - Generous padding: sections (py-20/24), cards (p-6/8), buttons (px-6 py-3)
  - Consistent gaps: grid layouts (gap-6/8), flex layouts (gap-4)
  - Breathing room around text blocks (mb-6 for paragraphs)
  
- **Mobile**: 
  - Single column layouts on mobile
  - Hamburger menu for navigation <768px
  - Stacked hero elements on mobile
  - Full-width cards on mobile with reduced padding
  - Touch-friendly button sizes (min-h-12)
  - Logo scales down appropriately
