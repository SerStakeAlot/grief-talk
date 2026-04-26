import { SubPageHero } from '@/components/SubPageHero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Microphone, Play } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

interface Episode {
  id: string
  title: string
  description: string
  pubDate: string
  duration: string
  audioUrl: string
  episodeNumber?: number
}

export function PodcastPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [loading, setLoading] = useState(true)
  const rssFeedUrl = 'https://rss.buzzsprout.com/2515323.rss'

  useEffect(() => {
    const fetchPodcastFeed = async () => {
      try {
        let xmlText: string

        // Try direct fetch first — Buzzsprout sends CORS headers
        try {
          const res = await fetch(rssFeedUrl)
          if (!res.ok) throw new Error('direct fetch failed')
          xmlText = await res.text()
        } catch {
          // Fall back to corsproxy.io
          const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(rssFeedUrl)}`)
          xmlText = await res.text()
        }

        const parser = new DOMParser()
        const xml = parser.parseFromString(xmlText, 'text/xml')
        const items = xml.querySelectorAll('item')
        const parsedEpisodes: Episode[] = Array.from(items).map((item, index) => ({
          id: `episode-${index}`,
          title: item.querySelector('title')?.textContent || 'Untitled Episode',
          description: (item.querySelector('description')?.textContent || '').replace(/<[^>]*>/g, ''),
          pubDate: new Date(item.querySelector('pubDate')?.textContent || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          duration: item.getElementsByTagName('itunes:duration')[0]?.textContent || '',
          audioUrl: item.querySelector('enclosure')?.getAttribute('url') || '',
          episodeNumber: items.length - index,
        }))
        setEpisodes(parsedEpisodes)
      } catch (error) {
        console.error('Error fetching podcast feed:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPodcastFeed()
  }, [])

  const applePodcastsUrl = 'https://podcasts.apple.com/us/podcast/grief-talk-unfiltered/id1865849991'

  return (
    <div style={{ background: 'var(--cream, #f5efe6)', minHeight: '100vh' }}>
      <SubPageHero
        eyebrow="GRIEF Talk Podcast"
        title={<>Where the silence ends and <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>healing</em> begins</>}
        subtitle="Raw, real conversations about grief, trauma, and healing. Join Richard Brown III as he guides you from pain to purpose."
      />

      {/* Platform CTA */}
      <section style={{ padding: '3rem 2.5rem', textAlign: 'center', background: 'var(--paper, #faf6ee)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Button
            size="lg"
            style={{ borderRadius: '999px', background: 'var(--ink, #1f1612)', color: 'var(--cream, #f5efe6)', gap: '0.5rem' }}
            onClick={() => window.open(applePodcastsUrl, '_blank')}
          >
            <Microphone size={20} weight="fill" />
            Listen on Apple Podcasts
          </Button>
        </div>
      </section>

      {/* Buzzsprout embed */}
      <section data-animate="fade-up" style={{ padding: '3rem 2.5rem', background: 'var(--cream, #f5efe6)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Card style={{ background: 'var(--paper, #faf6ee)', border: '1px solid rgba(31,22,18,0.12)', borderRadius: 20, overflow: 'hidden' }}>
            <CardHeader style={{ textAlign: 'center' }}>
              <CardTitle style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300, fontSize: '1.75rem', color: 'var(--ink, #1f1612)' }}>
                Listen Now
              </CardTitle>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.9rem', color: 'var(--ink-soft, #3a2a22)', opacity: 0.7 }}>
                Stream episodes directly from this page
              </p>
            </CardHeader>
            <CardContent style={{ padding: 0 }}>
              <div style={{ aspectRatio: '21/9' }}>
                <iframe
                  src="https://www.buzzsprout.com/2515323?client_source=small_player&iframe=true&referrer=https://www.buzzsprout.com/2515323.js?container_id=buzzsprout-player-2515323&player=small"
                  loading="lazy"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  title="GRIEF Talk Podcast"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Episodes list */}
      <section data-animate="fade-up" style={{ padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>All Episodes</p>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--ink, #1f1612)' }}>
              Healing conversations
            </h2>
          </div>

          {loading ? (
            <p style={{ textAlign: 'center', color: 'var(--ink-soft, #3a2a22)', opacity: 0.6, fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic' }}>
              Loading episodes…
            </p>
          ) : episodes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(200,84,30,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}>
                <Microphone size={28} style={{ color: 'var(--ember, #c8541e)' }} weight="fill" />
              </div>
              <h3 style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
                color: 'var(--ink, #1f1612)',
                marginBottom: '0.75rem',
              }}>
                Episodes dropping <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>soon</em>
              </h3>
              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: '0.95rem',
                color: 'var(--ink-soft, #3a2a22)',
                opacity: 0.7,
                maxWidth: '38ch',
                margin: '0 auto 2rem',
                lineHeight: 1.6,
              }}>
                Subscribe on Apple Podcasts to be the first notified when Richard drops a new episode.
              </p>
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '999px',
                  background: 'var(--ink, #1f1612)',
                  color: 'var(--cream, #f5efe6)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.25s',
                }}
                onClick={() => window.open(applePodcastsUrl, '_blank')}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink, #1f1612)')}
              >
                <Microphone size={18} weight="fill" />
                Subscribe on Apple Podcasts
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {episodes.map((episode) => (
                <Card
                  key={episode.id}
                  style={{
                    background: 'var(--paper, #faf6ee)',
                    border: '1px solid rgba(31,22,18,0.1)',
                    borderRadius: 20,
                    transition: 'box-shadow 0.25s, border-color 0.25s',
                  }}
                  className="intake-card"
                >
                  <CardHeader>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                          {episode.episodeNumber && (
                            <Badge variant="secondary" style={{ background: 'rgba(200,84,30,0.1)', color: 'var(--ember, #c8541e)', border: 'none', fontSize: '0.72rem', letterSpacing: '0.05em' }}>
                              Ep. {episode.episodeNumber}
                            </Badge>
                          )}
                          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.8rem', color: 'var(--ink-soft, #3a2a22)', opacity: 0.6 }}>{episode.pubDate}</span>
                          {episode.duration && <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.8rem', color: 'var(--ink-soft, #3a2a22)', opacity: 0.6 }}>· {episode.duration}</span>}
                        </div>
                        <CardTitle style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400, fontSize: '1.15rem', color: 'var(--ink, #1f1612)', lineHeight: 1.35 }}>
                          {episode.title}
                        </CardTitle>
                      </div>
                      {episode.audioUrl && (
                        <button
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: 'var(--ember, #c8541e)',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#f5efe6',
                            flexShrink: 0,
                            transition: 'background 0.2s',
                          }}
                          onClick={() => window.open(episode.audioUrl, '_blank')}
                          aria-label={`Play ${episode.title}`}
                          onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember-deep, #a8421a)')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                        >
                          <Play size={18} weight="fill" aria-hidden />
                        </button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.9rem', color: 'var(--ink-soft, #3a2a22)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {episode.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section data-animate="fade-up" style={{ padding: '5rem 2.5rem', background: 'var(--ink, #1f1612)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p className="eyebrow" style={{ color: 'var(--gold, #d4a445)', marginBottom: '1rem' }}>Never Miss an Episode</p>
          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 300, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--cream, #f5efe6)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
            Subscribe and <em style={{ fontStyle: 'italic', color: 'var(--gold, #d4a445)' }}>stay connected</em>
          </h3>
          <Button
            size="lg"
            style={{ borderRadius: '999px', background: 'var(--ember, #c8541e)', color: '#f5efe6', gap: '0.5rem', boxShadow: '0 6px 24px rgba(200,84,30,0.35)' }}
            onClick={() => window.open(applePodcastsUrl, '_blank')}
          >
            <Microphone size={20} weight="fill" />
            Subscribe on Apple Podcasts
          </Button>
        </div>
      </section>
    </div>
  )
}
