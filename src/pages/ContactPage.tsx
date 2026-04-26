import { Contact } from '@/components/Contact'
import { SubPageHero } from '@/components/SubPageHero'

export function ContactPage() {
  return (
    <div>
      <SubPageHero
        eyebrow="Get in Touch"
        title={<>You don't have to walk this <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>alone</em></>}
        subtitle="Whether you need support, want to book Richard, or have questions — we're here for you."
      />
      <Contact />
    </div>
  )
}
