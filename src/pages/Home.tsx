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

const intakeHighlights = [
  {
    title: 'Purpose of the Intake Session',
    items: [
      'Understand your story, your needs, and what brought you here.',
      'Identify the grief, trauma, or transition you are navigating.',
      'Assess the emotional, spiritual, and practical impact on daily life.',
      'Determine whether grief coaching, trauma-informed support, or another resource is the best fit.',
      'Establish clear goals for the next 3–6 months and outline your roadmap.'
    ]
  },
  {
    title: 'Why the Intake Matters',
    items: [
      'You are placed on the right coaching path from day one.',
      'Support is tailored to your unique situation and pace.',
      'Coach B and you begin with clarity, alignment, and shared expectations.',
      'Emotional safety is prioritized before deeper coaching work begins.',
      'Breakthrough moments happen sooner because of intentional preparation.'
    ]
  },
  {
    title: 'What Happens During the Intake',
    items: [
      'Share the loss, life event, or emotional burden you are carrying.',
      'Explore how it is affecting your day-to-day experience.',
      'Identify focus areas for the next several months of coaching.',
      'Discuss preferred coaching style, accountability, and session rhythm.',
      'Review the structure of the six-month coaching journey and ask questions.'
    ]
  },
  {
    title: 'After the Intake Session',
    items: [
      'Receive a personalized coaching recommendation and timeline.',
      'Review a proposed 3–6 month healing and growth plan.',
      'Confirm suggested session frequency (weekly or biweekly).',
      'Understand coaching expectations, boundaries, and next steps.',
      'Lock in the official start date for your recurring sessions.'
    ]
  }
]

interface HomeProps {
  onOpenAssessment?: () => void
}

export function Home({ onOpenAssessment }: HomeProps) {
  return (
    <div className="space-y-16">
      <Hero />

      <section data-animate="fade-up" className="bg-background py-12 sm:py-16 lg:py-20">
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

      <section data-animate="fade-up" className="py-12 sm:py-16 lg:py-20 bg-background">
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

      <section data-animate="fade-up" className="py-12 sm:py-16 lg:py-20 bg-background/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs">Coaching Intake</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">GRIEF Talk™ Intake Process Overview</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Before beginning your 1:1 coaching journey, every client completes a required 45–60 minute Intake Session. This moment is not a coaching session and does not count toward package hours—it is a dedicated space where Coach B listens deeply, ensures emotional safety, and builds a personalized roadmap for your healing.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {intakeHighlights.map(({ title, items }) => (
              <Card key={title} className="bg-card border-border/70 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-serif text-primary">{title}</h3>
                  <ul className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg sm:text-xl font-serif text-primary">“This is the moment we lay the groundwork—not for perfection, but for progress. Not for quick fixes, but for transformation.”</p>
            <p className="text-base text-muted-foreground">Your intake sets the tone for a six-month coaching journey rooted in clarity, trust, and sustainable healing.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Schedule Your Intake Session
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={onOpenAssessment}
              >
                Explore the GRIEF Talk™ Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section data-animate="fade-up" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/40 via-background to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-5">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs">Extra GRIEF Care</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary leading-tight">
              Support for those carrying everyone else’s pain.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Operational Trauma™ shows up when helpers, leaders, and healers absorb the weight of another person’s crisis. This new self-assessment helps clergy, caregivers, medical professionals, first responders, educators, and service providers recognize hidden exhaustion before it turns into burnout or collapse.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore extended GRIEF care resources, track your trauma load, and receive language you can use with your teams, congregations, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link to="/operational-trauma" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                  Operational Trauma™ Assessment
                </Button>
              </Link>
              {onOpenAssessment && (
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={onOpenAssessment}
                >
                  GRIEF Talk™ Assessment
                </Button>
              )}
            </div>
          </div>

          <Card className="bg-card border-border/80 shadow-xl">
            <CardContent className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-serif text-primary">Inside the Tool</h3>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {[ 
                  'Five domains measuring emotional, cognitive, behavioral, physical, and relational strain.',
                  'Forty prompts with a simple 0–3 scale so you can assess progress over time.',
                  'Instant interpretation with recommendations for pastoral care, coaching, or clinical support.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 block h-2 w-2 rounded-full bg-secondary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground/80">
                Use it privately, with a supervisor, or as a reflective tool for your care team meetings.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section data-animate="fade-up" className="py-12 sm:py-16 lg:py-20 bg-muted/40">
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

      <section data-animate="fade-up" className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs">GRIEF Talk™ Coaching</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">Our Promise: Where Silence Ends. Healing Begins. Truth Stands Unfiltered.</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Each coaching relationship is a sacred trust. We enter fully present, deeply compassionate, and wholly committed to your transformation. These promises are the standards we uphold every time we meet with you.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: '1. We Promise to See You — Not Just Your Symptoms',
                description: (
                  <p>
                    We honor your humanity, your history, and the hidden weight you have carried. There is no minimizing, no judgment, and no assumptions—only presence, empathy, and deep listening.
                  </p>
                )
              },
              {
                title: '2. We Promise a Safe Space for Real, Raw, Honest Healing',
                description: (
                  <p>
                    You never have to perform or pretend. Bring tears, questions, or silence. Your story, voice, and emotions remain safe here.
                  </p>
                )
              },
              {
                title: '3. We Promise to Be Unfiltered',
                description: (
                  <p>
                    Truth without pretense ignites healing. We speak with clarity, candor, and courage—challenging you lovingly, confronting patterns bravely, and calling you forward boldly.
                  </p>
                )
              },
              {
                title: '4. We Promise Trauma-Informed Care',
                description: (
                  <p>
                    We recognize the layers of trauma and grief. Our coaching honors safety, pacing, agency, and empowerment so your nervous system can heal without being overwhelmed.
                  </p>
                )
              },
              {
                title: '5. We Promise Faith-Informed Compassion',
                description: (
                  <p>
                    Expect a God-conscious lens that centers dignity, hope, and restoration—not religious pressure, but sacred grounding for your journey.
                  </p>
                )
              },
              {
                title: '6. We Promise Confidentiality and Integrity',
                description: (
                  <p>
                    Your story stays with us. Your privacy is protected. Every conversation is held with integrity and respect.
                  </p>
                )
              },
              {
                title: '7. We Promise Transformation, Not Just Talk',
                description: (
                  <p>
                    This is deep work. We move with you from pain to clarity, from confusion to direction, from broken pieces to a rebuilt identity.
                  </p>
                )
              },
              {
                title: '8. We Promise Partnership, Not Performance',
                description: (
                  <p>
                    We coach with you, not at you. Your pace, your goals, your agency. We guide while you lead your healing.
                  </p>
                )
              },
              {
                title: '9. We Promise Accountability That Strengthens, Not Shames',
                description: (
                  <p>
                    Accountability is an act of love. We remind you of your power, hold you to your transformation, and never break you to build you.
                  </p>
                )
              },
              {
                title: '10. We Promise to Help You Become Whole — Not Perfect',
                description: (
                  <p>
                    Healing is integration, honesty, and freedom. We walk with you until your grief has a place to rest and your future has room to breathe.
                  </p>
                )
              }
            ].map(({ title, description }) => (
              <Card key={title} className="bg-card border-border/80 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-lg font-serif text-primary">{title}</h3>
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg sm:text-xl font-serif text-primary">“We do not rush your story, dismiss your pain, or dilute your truth. We walk with you—fully present, fully honest, fully committed.”</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                  Start Your Coaching Journey
                </Button>
              </Link>
              <Link to="/operational-trauma" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Explore Operational Trauma™ Care
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section data-animate="fade-up" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs">GRIEF Talk™ Coaching Creed</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">The Way We Walk With You</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Healing requires a space where truth has no filter and compassion has no limits. This creed anchors every session, every conversation, and every courageous step we take together.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-card border-border/70 shadow-lg">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-serif text-primary">Our Daily Commitments</h3>
                <ul className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {[
                    'We show up.',
                    'We stay present.',
                    'We speak truth.',
                    'We honor your pace.',
                    'We protect your story.',
                    'We champion your healing.',
                    'We guide you from pain to purpose — one courageous step at a time.'
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-primary/40 shadow-xl">
              <CardContent className="p-6 sm:p-8 space-y-5">
                <h3 className="text-xl font-serif">Real. Raw. Restorative.</h3>
                <p>
                  We tell the truth with clarity — not cruelty. We speak the unsaid with care — not chaos. We address the roots, not just the symptoms. In our sessions, you will never be blindsided, silenced, or sugarcoated.
                </p>
                <p>
                  We say the hard things with a soft heart because healing cannot happen where honesty is withheld. We stand with you, sit in the hard spaces with you, and walk with you until you can walk again.
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-secondary-foreground/90">This is the GRIEF Talk™ way.</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/80 shadow-lg p-8 sm:p-10 text-center space-y-4">
            <p className="text-lg sm:text-xl font-serif text-primary">Unfiltered truth. Unconditional compassion. Transformation without apology.</p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              This is our promise. This is our standard. This is the GRIEF Talk™ way.
            </p>
          </div>
        </div>
      </section>

      <section data-animate="fade-up" className="py-12 sm:py-16">
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

      <section data-animate="fade-up" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
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
