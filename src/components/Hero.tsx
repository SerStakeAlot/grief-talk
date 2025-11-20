import { Button } from '@/components/ui/button'
import logoImage from '@/assets/images/gtalk.jpeg'
import { Link } from 'react-router-dom'

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="flex justify-center mb-8">
                    <img 
                        src={logoImage} 
                        alt="Grief Talk - Where the Silence Ends and Healing Begins" 
                        className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                    />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
                    Where the Silence Ends<br/>and Healing Begins
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl font-serif text-primary/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Certified Grief Recovery Specialist, Trauma-informed coach, and Certified Death Doula helping communities heal forward, not just move on.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/about">
                        <Button 
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg w-full"
                        >
                            Learn More
                        </Button>
                    </Link>
                    <Link to="/books">
                        <Button 
                            size="lg"
                            variant="outline"
                            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg w-full"
                        >
                            Shop Books
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
