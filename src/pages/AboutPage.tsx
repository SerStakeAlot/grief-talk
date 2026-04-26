import { About } from '@/components/About'
import { SubPageHero } from '@/components/SubPageHero'

export function AboutPage() {
  return (
    <div>
      <SubPageHero
        eyebrow="About Richard Brown III"
        title={<>America's Grief &amp; <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>Trauma-Informed</em> Coach</>}
        subtitle="Founder of GRIEF Talk™ and the GRIEF in Action Academy — equipping families, churches, and communities to move from silence to strength."
      />
      <About />
    </div>
  )
}
