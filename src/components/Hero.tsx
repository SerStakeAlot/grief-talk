import { Button } from '@/components/ui/button'
import logoImage from '@/assets/images/gtalk.jpeg'
import { Link } from 'react-router-dom'

export function Hero() {
    const podcastUrl = 'https://example.com/podcast'

    return (
        <section
            id="hero"
            className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-12 sm:pb-16"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_oklch(0.85_0_0)_0%,_oklch(1_0_0)_60%)] opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-muted/90 to-background" />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
                    <div className="w-full space-y-6 text-center lg:text-left">
                        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-secondary">
                            A Movement by Richard Brown III
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight">
                            GRIEF Talk™ – Where Silence Ends and Healing Begins
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                            A movement envisioned by Richard Brown III, America’s Grief & Trauma-Informed Coach, equipping individuals, families, and communities with tools for grief, trauma, faith, and healing.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg w-full lg:min-w-[220px]"
                                >
                                    Start Your Healing Journey
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg w-full sm:w-auto lg:min-w-[220px]"
                                onClick={() => window.open(podcastUrl, '_blank')}
                            >
                                Listen to the Podcast
                            </Button>
                        </div>
                    </div>

                    <div className="w-full flex justify-center lg:justify-end">
                        <div className="relative p-4 rounded-[2.5rem] bg-primary/5 shadow-2xl ring-1 ring-primary/15 max-w-[260px] sm:max-w-sm">
                            <div className="absolute inset-0 blur-3xl bg-primary/10" aria-hidden />
                            <img
                                src={logoImage}
                                alt="Grief Talk - Where the Silence Ends and Healing Begins"
                                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
