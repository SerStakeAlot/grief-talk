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

export function Home() {
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
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link to="/books" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Purchase Your Copy of Closure
              </Button>
            </Link>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => window.open(academyUrl, '_blank')}
            >
              Join the Academy
            </Button>
            <Button 
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto text-primary hover:text-primary/80"
              onClick={() => window.open(podcastUrl, '_blank')}
            >
              Subscribe to the Podcast
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
