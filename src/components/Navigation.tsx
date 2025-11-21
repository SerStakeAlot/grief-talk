import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { NavLink } from 'react-router-dom'

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

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Books', path: '/books' },
        { label: 'Contact', path: '/contact' },
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
                        <NavLink
                            to="/"
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Logo showText />
                        </NavLink>

                        <div className="hidden md:flex items-center gap-10">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `nav-link relative group ${isActive ? 'text-secondary' : 'text-foreground hover:text-secondary'}`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full group-focus-visible:w-full" />
                                </NavLink>
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
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-2xl nav-link transition-colors ${isActive ? 'text-secondary' : 'text-foreground hover:text-secondary'}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
