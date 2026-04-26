import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import richardPortrait from '@/assets/images/richard-brown.jpg'
import logoImage from '@/assets/images/gtalk.jpeg'

export function Hero() {
    const heroRef = useRef<HTMLElement>(null)
    const portraitRef = useRef<HTMLDivElement>(null)

    // Mouse parallax — desktop only
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current || !portraitRef.current) return
            if (window.innerWidth < 960) return
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const dx = ((clientX / innerWidth) - 0.5) * 24
            const dy = ((clientY / innerHeight) - 0.5) * 12
            portraitRef.current.style.transform = `translate(${dx}px, ${dy}px)`
        }
        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section
            ref={heroRef}
            id="hero"
            style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '7rem',
                paddingBottom: '5rem',
                paddingLeft: '2.5rem',
                paddingRight: '2.5rem',
                maxWidth: '100%',
            }}
            className="hero-section"
        >
            {/* ── Background portrait with gradient overlay ── */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} ref={portraitRef}>
                <img
                    src={richardPortrait}
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'right bottom',
                    }}
                    loading="eager"
                />
                {/* Gradient fades portrait left → transparent right */}
                <div
                    className="bg-hero-veil"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, #f5efe6 0%, rgba(245,239,230,0.92) 30%, rgba(245,239,230,0.6) 60%, rgba(245,239,230,0.25) 100%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(245,239,230,0.8) 100%)',
                    }}
                />
            </div>

            {/* ── Left column — Text ── */}
            <div style={{ position: 'relative', zIndex: 10, maxWidth: '580px' }}>
                {/* Eyebrow */}
                <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
                    A movement by Richard Brown III
                </p>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontWeight: 300,
                        fontSize: 'clamp(2.75rem, 6vw, 5.25rem)',
                        lineHeight: 0.98,
                        color: 'var(--ink, #1f1612)',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Where silence ends and{' '}
                    <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>healing</em>{' '}
                    begins™
                </h1>

                {/* Lede */}
                <p
                    style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontWeight: 300,
                        fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                        lineHeight: 1.6,
                        color: 'var(--ink-soft, #3a2a22)',
                        maxWidth: '32em',
                        marginBottom: '2.5rem',
                    }}
                >
                    A trauma-informed, faith-rooted movement equipping individuals, families, and communities with tools for grief, healing, and restoration.
                </p>

                {/* Action buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <Link
                        to="/contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.85rem 2rem',
                            borderRadius: '999px',
                            background: 'var(--ink, #1f1612)',
                            color: 'var(--cream, #f5efe6)',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                            transition: 'background 0.25s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink, #1f1612)')}
                    >
                        Begin the Work
                    </Link>
                    <Link
                        to="/podcast"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.85rem 2rem',
                            borderRadius: '999px',
                            background: 'transparent',
                            color: 'var(--ink, #1f1612)',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                            border: '1.5px solid rgba(31,22,18,0.25)',
                            transition: 'border-color 0.25s, color 0.25s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ember, #c8541e)'; e.currentTarget.style.color = 'var(--ember, #c8541e)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(31,22,18,0.25)'; e.currentTarget.style.color = 'var(--ink, #1f1612)' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                            <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                        </svg>
                        Listen to the Podcast
                    </Link>
                </div>
            </div>

            {/* ── Scroll indicator — logo replaces "Scroll" text ── */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.6rem',
                    zIndex: 10,
                    opacity: 0.75,
                }}
                className="scroll-indicator"
            >
                {/* Logo circle matching nav */}
                <div
                    style={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        boxShadow: '0 2px 10px rgba(31,22,18,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
                        border: '1.5px solid rgba(200,84,30,0.3)',
                        flexShrink: 0,
                    }}
                    className="scroll-logo-pulse"
                >
                    <img
                        src={logoImage}
                        alt=""
                        aria-hidden="true"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div
                    className="scroll-indicator-line"
                    style={{
                        width: 1,
                        height: 40,
                        background: 'linear-gradient(to bottom, var(--ember, #c8541e), transparent)',
                    }}
                />
            </div>

            {/* Responsive padding */}
            <style>{`
                @media (max-width: 960px) {
                    .hero-section {
                        padding-top: 6rem !important;
                        padding-left: 1.5rem !important;
                        padding-right: 1.5rem !important;
                    }
                    .scroll-indicator {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    )
}
