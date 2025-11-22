import { Hero } from '@/components/Hero'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const offerings = [
  {
    icon: '🎙️',
    title: 'Podcast',
    description: 'Raw, real conversations about grief, trauma, and healing.'
  },
  {
    icon: '📚',
    title: 'Books & Resources',
    description: 'Tools like Closure, The 24 Laws of Trauma, and Scandal: Handle with Care and Prayer.'
  },
  {
    icon: '🎓',
    title: 'GRIEF in Action Academy',
    description: 'Courses, certifications, and workshops equipping families, churches, and leaders.'
  },
  {
    icon: '🎤',
    title: 'Speaking & Coaching',
    description: 'Nationwide teaching with prophetic boldness and practical tools.'
  }
]

const podcastUrl = 'https://example.com/podcast'
const academyUrl = 'https://example.com/academy'

interface HomeProps {
  onOpenAssessment?: () => void
}

export function Home({ onOpenAssessment }: HomeProps) {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <p className="text-2xl sm:text-3xl font-serif text-primary">
            “You don’t have to heal in silence.”
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For too long, grief and trauma have been pushed into the shadows. At GRIEF Talk™, we believe healing begins when truth is spoken, wounds are named, and hope is reclaimed.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As the visionary of Brown Legacy Memorial (BLM), Richard Brown III built more than a funeral service — he created a parent company dedicated to pre-care, technology, and most importantly, aftercare. Out of that vision was born the GRIEF in Action Academy, the aftercare and educational subsidiary of BLM designed to equip families, churches, and leaders with trauma-informed tools for healing. From this Academy grew the GRIEF Talk Podcast, the public teaching platform that extends BLM’s mission far beyond the funeral home.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through the GRIEF Talk Podcast, books, and the GRIEF in Action Academy, Richard provides bold, trauma-informed, faith-rooted resources to help you move from pain to purpose. Whether you’re navigating personal loss, unresolved grief, or the weight of trauma, GRIEF Talk is a safe space designed for truth-telling and transformation.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs">The GRIEF Talk™ Framework</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">
              GRIEF Talk™ and TRAUMA
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              GRIEF Talk™ is more than a title — it is a trauma-informed framework that gives language to what you feel, what you have survived, and how you can move toward healing.
            </p>
            {onOpenAssessment && (
              <div className="pt-4 flex justify-center">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-auto px-8"
                  onClick={onOpenAssessment}
                >
                  Take the GRIEF Talk™ &amp; Trauma Assessment
                </Button>
              </div>
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="bg-card border-border card-elevated">
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-1">GRIEF</p>
                  <p className="text-sm text-muted-foreground mb-3">Grief • Recovery • Intervention • Education • Freedom</p>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold">G – Grief</p>
                    <p>
                      The honest acknowledgement of loss — emotional, relational, spiritual, personal, or identity-based. Grief is not just death; it is any moment where something in us, or around us, changes forever.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">R – Recovery</p>
                    <p>
                      The ongoing process of rebuilding, restoring, and reclaiming the parts of yourself that pain tried to silence. Recovery is not instant; it is a compassionate journey of coming back to yourself.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">I – Intervention</p>
                    <p>
                      The tools, support, practices, and conversations that interrupt harmful cycles — through coaching, community, therapy, faith, or truth-telling.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">E – Education</p>
                    <p>
                      Learning the language of grief and trauma so that healing becomes intentional and informed. Education removes shame, reveals patterns, and empowers people with knowledge.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">F – Freedom</p>
                    <p>
                      The emotional, mental, and spiritual liberation that comes when grief is named, processed, and transformed. Freedom is not forgetting — it is living without being imprisoned by what happened.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border card-elevated">
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-1">TALK</p>
                  <p className="text-sm text-muted-foreground mb-3">Truth-Telling • Awareness • Listening • Knowledge for Healing</p>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold">T – Truth-Telling</p>
                    <p>
                      Honesty about what happened, how it affected you, and what you still carry. Truth frees you from silence, suppression, and pretending you are okay when you are not.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">A – Awareness</p>
                    <p>
                      Becoming conscious of your emotions, triggers, patterns, and needs. Awareness is the beginning of clarity — and the gateway to transformation.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">L – Listening</p>
                    <p>
                      Hearing your own story, listening to others without judgment, and allowing emotions to speak without interruption. Listening makes healing communal instead of isolated.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">K – Knowledge for Healing</p>
                    <p>
                      Applying wisdom, strategies, tools, and insights that move people toward restoration. Knowledge is the bridge that turns pain into progress.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border card-elevated">
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-1">TRAUMA</p>
                  <p className="text-sm text-muted-foreground mb-3">Triggered Pain • Responses • Avoidance • Unresolved Emotions • Memories • Acceptance, Awareness, and Action</p>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold">T – Triggered Pain</p>
                    <p>
                      The emotional flashpoints that reveal unresolved wounds or unprocessed experiences.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">R – Responses Rooted in the Past</p>
                    <p>
                      Behaviors, reactions, fears, or protections that were formed during earlier painful events and still influence you today.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">A – Avoidance or Adaptation</p>
                    <p>
                      The ways people cope — either by avoiding pain or adapting around it. Both are survival responses, not failures.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">U – Unresolved Emotions</p>
                    <p>
                      Feelings that were buried, denied, or never safely expressed — but still impact the present.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">M – Memories That Still Speak</p>
                    <p>
                      Experiences that continue to shape identity, choices, relationships, and self-worth, even years later.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">A – Acceptance, Awareness, and Action</p>
                    <p>
                      The healing movement: accepting what happened, becoming aware of its impact, and taking active steps toward recovery, truth, and transformation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-2">
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Together, GRIEF Talk™ and this trauma framework position the movement as a place where grief becomes recovery, intervention becomes support, education becomes empowerment, and freedom becomes possible — through conversations grounded in truth, awareness, listening, and healing knowledge.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs">What We Offer</span>
            <p className="text-3xl font-serif text-primary">Tools for every step of your healing journey.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {offerings.map((item) => (
              <Card key={item.title} className="bg-card border-border text-left">
                <CardContent className="p-6 space-y-3">
                  <div className="text-3xl" aria-hidden>{item.icon}</div>
                  <h3 className="text-xl font-serif text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Explore Resources
          </Button>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-4 text-center">
              <p className="text-2xl font-serif text-primary leading-relaxed">
                “GRIEF Talk gave me permission to heal. Richard’s words and resources helped me find closure I didn’t know was possible.”
              </p>
              <p className="text-muted-foreground">— [Name], Podcast Listener</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-serif text-primary">It’s time to stop carrying grief in silence.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join the GRIEF Talk movement today and discover resources that help you release, heal, and move forward.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 items-center">
            {onOpenAssessment && (
              <div>
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8"
                  onClick={onOpenAssessment}
                >
                  Take the GRIEF Talk™ &amp; Trauma Assessment
                </Button>
              </div>
            )}
            <Link to="/books" className="w-full sm:w-auto max-w-xs sm:max-w-none">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Purchase Your Copy of Closure
              </Button>
            </Link>
            <div className="w-full sm:w-auto max-w-xs sm:max-w-none">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open(academyUrl, '_blank')}
              >
                Join the Academy
              </Button>
            </div>
            <div className="w-full sm:w-auto max-w-xs sm:max-w-none">
              <Button
                size="lg"
                variant="ghost"
                className="w-full text-primary hover:text-primary/80"
                onClick={() => window.open(podcastUrl, '_blank')}
              >
                Subscribe to the Podcast
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
