import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import logoImage from '@/assets/images/grief-talk-logo.png'

interface NavigationProps {
    mobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
}

export function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    const navItems = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Books', id: 'books' },
        { label: 'Contact', id: 'contact' },
    ]

    return (
        <>
            <nav 
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <button 
                            onClick={() => scrollToSection('hero')}
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src={logoImage} 
                                alt="Grief Talk" 
                                className="h-10 w-10 object-contain"
                            />
                            <span className="text-xl font-serif font-bold text-primary">
                                Grief Talk
                            </span>
                        </button>

                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-foreground hover:text-secondary transition-colors font-medium relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                                </button>
                            ))}
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
                        </Button>
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background md:hidden pt-16">
                    <div className="flex flex-col items-center gap-6 p-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-2xl font-serif text-foreground hover:text-secondary transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
