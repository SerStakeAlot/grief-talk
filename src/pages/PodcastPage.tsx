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
        // Using a CORS proxy to fetch the RSS feed
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssFeedUrl)}`
        const response = await fetch(proxyUrl)
        const data = await response.json()
        
        // Parse the RSS XML
        const parser = new DOMParser()
        const xml = parser.parseFromString(data.contents, 'text/xml')
        const items = xml.querySelectorAll('item')
        
        const parsedEpisodes: Episode[] = Array.from(items).map((item, index) => {
          const title = item.querySelector('title')?.textContent || 'Untitled Episode'
          const description = item.querySelector('description')?.textContent || ''
          const pubDate = item.querySelector('pubDate')?.textContent || ''
          const audioUrl = item.querySelector('enclosure')?.getAttribute('url') || ''
          const duration = item.querySelector('duration')?.textContent || ''
          
          return {
            id: `episode-${index}`,
            title,
            description: description.replace(/<[^>]*>/g, ''), // Strip HTML tags
            pubDate: new Date(pubDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            duration,
            audioUrl,
            episodeNumber: items.length - index
          }
        })
        
        setEpisodes(parsedEpisodes)
      } catch (error) {
        console.error('Error fetching podcast feed:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPodcastFeed()
  }, [])

  const applePodcastsUrl = 'https://podcasts.apple.com/us/podcast/grief-talk/id1234567890'
  const spotifyUrl = 'https://open.spotify.com/show/YOUR_SHOW_ID'

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        data-animate="fade-up" 
        className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-muted/30 via-background to-background"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-secondary justify-center">
            <Microphone size={32} weight="duotone" />
            <span className="uppercase tracking-[0.3em] text-xs">GRIEF Talk Podcast</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary">
            Where the Silence Ends and Healing Begins
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Raw, real conversations about grief, trauma, and healing. Join Richard Brown III as he guides you through 
            trauma-informed, faith-rooted resources to help you move from pain to purpose.
          </p>

          {/* Platform Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              onClick={() => window.open(applePodcastsUrl, '_blank')}
            >
              <Microphone size={24} weight="fill" />
              Apple Podcasts
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
              onClick={() => window.open(spotifyUrl, '_blank')}
            >
              <Microphone size={24} weight="fill" />
              Spotify
            </Button>
          </div>
        </div>
      </section>

      {/* Buzzsprout Embed Player */}
      <section data-animate="fade-up" className="py-12 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-serif text-primary">Listen Now</CardTitle>
              <p className="text-muted-foreground text-sm">
                Stream episodes directly from this page
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[16/9] sm:aspect-[21/9]">
                <iframe 
                  src="https://www.buzzsprout.com/2515323?client_source=small_player&iframe=true&referrer=https://www.buzzsprout.com/2515323.js?container_id=buzzsprout-player-2515323&player=small" 
                  loading="lazy" 
                  width="100%" 
                  height="100%"
                  frameBorder="0" 
                  scrolling="no" 
                  title="GRIEF Talk Podcast"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Episodes List */}
      <section data-animate="fade-up" className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">Episodes</h2>
            <p className="text-muted-foreground">
              Explore our collection of healing conversations
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading episodes...</p>
            </div>
          ) : episodes.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="p-10 text-center space-y-3">
                <Microphone size={32} className="text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">
                  Episodes will appear here. Check back soon or subscribe on your favorite platform.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {episodes.map((episode) => (
                <Card key={episode.id} className="bg-card border-border hover:border-secondary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {episode.episodeNumber && (
                            <Badge variant="secondary" className="text-xs">
                              Episode {episode.episodeNumber}
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{episode.pubDate}</span>
                          {episode.duration && (
                            <span className="text-xs text-muted-foreground">• {episode.duration}</span>
                          )}
                        </div>
                        <CardTitle className="text-xl font-serif text-primary leading-snug">
                          {episode.title}
                        </CardTitle>
                      </div>
                      {episode.audioUrl && (
                        <Button 
                          size="icon" 
                          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0"
                          onClick={() => window.open(episode.audioUrl, '_blank')}
                        >
                          <Play size={20} weight="fill" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
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
      <section data-animate="fade-up" className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-3xl font-serif text-primary">Never Miss an Episode</h3>
          <p className="text-lg text-muted-foreground">
            Subscribe on your favorite podcast platform to get notified when new episodes are released.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              onClick={() => window.open(applePodcastsUrl, '_blank')}
            >
              <Microphone size={24} weight="fill" />
              Subscribe on Apple Podcasts
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
              onClick={() => window.open(spotifyUrl, '_blank')}
            >
              <Microphone size={24} weight="fill" />
              Subscribe on Spotify
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
