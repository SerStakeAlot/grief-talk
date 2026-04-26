import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import { Logo } from '@/components/Logo'

interface NavigationProps {
    mobileMenuOpen: boolean
    setMobileMenuOpen: (open: boolean) => void
}

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Podcast', path: '/podcast' },
    { label: 'Library', path: '/library' },
    { label: 'Operational Trauma', path: '/operational-trauma' },
    { label: 'Contact', path: '/contact' },
]

export function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* ── Main navbar ── */}
            <nav
                role="navigation"
                aria-label="Main navigation"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    background: 'rgba(245, 239, 230, 0.85)',
                    backdropFilter: 'blur(14px) saturate(1.2)',
                    WebkitBackdropFilter: 'blur(14px) saturate(1.2)',
                    borderBottom: '1px solid rgba(31, 22, 18, 0.12)',
                    transition: 'padding 0.3s cubic-bezier(0.2,0.8,0.2,1)',
                    padding: scrolled ? '0.65rem 0' : '1.25rem 0',
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: '0 auto',
                        padding: '0 2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2rem',
                    }}
                >
                    {/* Brand mark */}
                    <NavLink
                        to="/"
                        className="flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ textDecoration: 'none' }}
                    >
                        <Logo showText />
                    </NavLink>

                    {/* Desktop nav links — hidden below 960px */}
                    <div
                        className="hidden"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2.25rem',
                        }}
                        id="desktop-nav"
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                onClick={() => setMobileMenuOpen(false)}
                                className="nav-link relative group"
                                style={({ isActive }) => ({
                                    color: isActive ? 'var(--ink, #1f1612)' : 'var(--ink-soft, #3a2a22)',
                                    textDecoration: 'none',
                                    paddingBottom: '2px',
                                })}
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.label}
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: -2,
                                                left: 0,
                                                height: '1.5px',
                                                background: 'var(--ember, #c8541e)',
                                                transition: 'width 0.25s cubic-bezier(0.2,0.8,0.2,1)',
                                                width: isActive ? '100%' : '0%',
                                            }}
                                            className="group-hover:!w-full"
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right side — CTA + hamburger */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {/* CTA button — desktop only */}
                        <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="nav-cta-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '999px',
                                background: 'var(--ink, #1f1612)',
                                color: 'var(--cream, #f5efe6)',
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.02em',
                                textDecoration: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background 0.25s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ink, #1f1612)')}
                        >
                            Begin the Work
                        </Link>

                        {/* Hamburger — mobile only, shown below 960px via CSS */}
                        <button
                            type="button"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--ink, #1f1612)',
                                padding: '0.35rem',
                            }}
                            className="hamburger-btn"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
                        </button>
                    </div>
                </div>

                {/* Responsive style — hide desktop nav links, show hamburger below 960px */}
                <style>{`
                    #desktop-nav { display: flex !important; }
                    .hamburger-btn { display: none; }
                    @media (max-width: 960px) {
                        #desktop-nav { display: none !important; }
                        .hamburger-btn { display: flex !important; align-items: center; }
                        .nav-cta-btn { display: none !important; }
                    }
                `}</style>
            </nav>

            {/* ── Mobile overlay menu ── */}
            {mobileMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 99,
                        background: 'var(--cream, #f5efe6)',
                        paddingTop: '5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                    }}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            onClick={() => setMobileMenuOpen(false)}
                            style={({ isActive }) => ({
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontSize: '2rem',
                                fontWeight: 300,
                                color: isActive ? 'var(--ember, #c8541e)' : 'var(--ink, #1f1612)',
                                textDecoration: 'none',
                            })}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            marginTop: '1.5rem',
                            padding: '0.75rem 2rem',
                            borderRadius: '999px',
                            background: 'var(--ink, #1f1612)',
                            color: 'var(--cream, #f5efe6)',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: '1rem',
                            fontWeight: 600,
                            textDecoration: 'none',
                        }}
                    >
                        Begin the Work
                    </Link>
                </div>
            )}
        </>
    )
}
