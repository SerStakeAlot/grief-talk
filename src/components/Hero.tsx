import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import richardPortrait from '@/assets/images/richard-brown.jpg'

/** Full-podcast seal SVG — 240×240 per spec */
function PodcastSeal() {
    return (
        <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c8541e" />
                    <stop offset="100%" stopColor="#d4a445" />
                </linearGradient>
                <path id="topArc" d="M 110,110 m -80,0 a 80,80 0 1,1 160,0" />
                <path id="botArc" d="M 110,110 m -75,0 a 75,75 0 0,0 150,0" />
            </defs>

            {/* Outer ember ring */}
            <circle cx="110" cy="110" r="106" fill="none" stroke="#c8541e" strokeWidth="3" />
            {/* Inner gold ring */}
            <circle cx="110" cy="110" r="98" fill="none" stroke="#d4a445" strokeWidth="1.5" />

            {/* Curved top text */}
            <text fill="#d4a445" fontSize="10" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="3">
                <textPath href="#topArc" startOffset="10%">WHERE THE SILENCE ENDS</textPath>
            </text>
            {/* Curved bottom text */}
            <text fill="#d4a445" fontSize="10" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="3">
                <textPath href="#botArc" startOffset="12%">AND HEALING BEGINS</textPath>
            </text>

            {/* Centre flame */}
            <path d="M110 68 C110 68 92 88 92 102 a18 18 0 0 0 36 0 C128 88 110 68 110 68z" fill="url(#flameGrad)" />
            <path d="M110 82 C110 82 102 94 102 102 a8 8 0 0 0 16 0 C118 94 110 82 110 82z" fill="#faf6ee" opacity="0.3" />

            {/* Microphone icon */}
            <rect x="105" y="118" width="10" height="18" rx="5" fill="#d4a445" />
            <path d="M100 130 Q100 142 110 142 Q120 142 120 130" fill="none" stroke="#d4a445" strokeWidth="1.5" />
            <line x1="110" y1="142" x2="110" y2="148" stroke="#d4a445" strokeWidth="1.5" />
            <line x1="105" y1="148" x2="115" y2="148" stroke="#d4a445" strokeWidth="1.5" />

            {/* GRIEF TALK stacked text */}
            <text x="110" y="166" textAnchor="middle" fill="#c8541e" fontSize="14" fontFamily="'Fraunces', Georgia, serif" fontWeight="700">GRIEF</text>
            <text x="110" y="182" textAnchor="middle" fill="#c8541e" fontSize="14" fontFamily="'Fraunces', Georgia, serif" fontWeight="700">TALK</text>
        </svg>
    )
}

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
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr',
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
                        objectFit: 'cover',
                        objectPosition: 'center top',
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

            {/* ── Right column — Podcast card ── */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                }}
                className="hero-right"
            >
                {/* Top pill tag */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.4rem 1rem',
                        borderRadius: '999px',
                        background: 'rgba(245,239,230,0.85)',
                        border: '1px solid rgba(31,22,18,0.12)',
                        backdropFilter: 'blur(8px)',
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--ink, #1f1612)',
                        letterSpacing: '0.04em',
                    }}
                >
                    <span
                        className="pulse-dot"
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'var(--ember, #c8541e)',
                            flexShrink: 0,
                        }}
                    />
                    New episode weekly
                </div>

                {/* Podcast card */}
                <div
                    className="podcast-card"
                    style={{
                        width: 300,
                        height: 300,
                        borderRadius: 28,
                        background: 'linear-gradient(135deg, #2a1e18 0%, #1f1612 60%, #3a2a22 100%)',
                        boxShadow: '0 32px 80px rgba(31,22,18,0.45), 0 8px 20px rgba(200,84,30,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    <PodcastSeal />
                </div>

                {/* Bottom pill tag */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.4rem 1rem',
                        borderRadius: '999px',
                        background: 'rgba(245,239,230,0.85)',
                        border: '1px solid rgba(31,22,18,0.12)',
                        backdropFilter: 'blur(8px)',
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--ink-soft, #3a2a22)',
                        letterSpacing: '0.04em',
                    }}
                >
                    The Podcast · Available everywhere
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 10,
                    animationDelay: '1s',
                    opacity: 0.6,
                }}
                className="scroll-indicator"
            >
                <span
                    style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: '0.7rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--ink, #1f1612)',
                    }}
                >
                    Scroll
                </span>
                <div
                    className="scroll-indicator-line"
                    style={{
                        width: 1,
                        height: 40,
                        background: 'linear-gradient(to bottom, var(--ember, #c8541e), transparent)',
                    }}
                />
            </div>

            {/* Responsive stacking */}
            <style>{`
                .hero-section {
                    grid-template-columns: 1.1fr 0.9fr;
                    padding-left: 2.5rem;
                    padding-right: 2.5rem;
                }
                @media (max-width: 960px) {
                    .hero-section {
                        grid-template-columns: 1fr !important;
                        padding-top: 6rem !important;
                        padding-left: 1.5rem !important;
                        padding-right: 1.5rem !important;
                    }
                    .hero-right {
                        display: none !important;
                    }
                    .scroll-indicator {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    )
}
