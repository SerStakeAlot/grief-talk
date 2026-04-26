import { Library } from '@/components/Library'
import { SubPageHero } from '@/components/SubPageHero'

export function LibraryPage() {
  return (
    <div>
      <SubPageHero
        eyebrow="Library & Resources"
        title={<>Ebooks, guides, and free <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>tools</em> for healing</>}
        subtitle="Curated resources designed to give language to your grief, tools for your trauma, and a path forward."
      />
      <Library />
    </div>
  )
}
