import { Button } from '@/components/ui/button'
import { Flame } from '@phosphor-icons/react'

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="flex justify-center mb-8">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 bg-primary rounded-full flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                            <Flame size={64} weight="fill" className="text-secondary mx-auto mb-2" />
                            <div className="text-secondary font-serif font-bold text-3xl sm:text-4xl tracking-tight">
                                GRIEF<br/>TALK
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
                    Where the Silence Ends<br/>and Healing Begins
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                    Certified Grief Recovery Specialist, Trauma-informed coach, and certified death doula helping communities heal forward, not just move on.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                        onClick={() => scrollToSection('about')}
                    >
                        Learn More
                    </Button>
                    <Button 
                        size="lg"
                        variant="outline"
                        className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg"
                        onClick={() => scrollToSection('books')}
                    >
                        Shop Books
                    </Button>
                </div>
            </div>
        </section>
    )
}
