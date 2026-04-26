import { Link } from 'react-router-dom'

const FOOTER_BG = '#14100d'
const GOLD = '#d4a445'
const CREAM = '#f5efe6'
const EMBER = '#c8541e'
const MUTED = 'rgba(245,239,230,0.55)'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const explore = [
        { label: 'About', path: '/about' },
        { label: 'Podcast', path: '/podcast' },
        { label: 'Library', path: '/library' },
        { label: 'Operational Trauma', path: '/operational-trauma' },
    ]

    const services = [
        'Grief Recovery Coaching',
        'Trauma-Informed Support',
        'Death Doula Services',
        'Speaking Engagements',
        'GRIEF in Action Academy',
    ]

    const connect = [
        { label: 'Contact', path: '/contact' },
        { label: 'grieftalkpodcast1@gmail.com', href: 'mailto:grieftalkpodcast1@gmail.com' },
    ]

    return (
        <footer style={{ background: FOOTER_BG, padding: '5rem 2.5rem 2rem', color: CREAM }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                {/* 4-column grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '3rem',
                        marginBottom: '3.5rem',
                    }}
                    className="footer-grid"
                >
                    {/* Col 1 — Brand + tagline */}
                    <div style={{ gridColumn: 'span 1' }}>
                        {/* Small flame SVG */}
                        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C12 2 7 7.5 7 13a5 5 0 0010 0C17 7.5 12 2 12 2z" fill={EMBER}/>
                                <path d="M12 8C12 8 9.5 11 9.5 13.5a2.5 2.5 0 005 0C14.5 11 12 8 12 8z" fill={GOLD}/>
                            </svg>
                            <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.35rem', fontWeight: 500, color: CREAM }}>
                                GRIEF Talk
                            </span>
                        </div>
                        <p style={{ color: MUTED, fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '18em' }}>
                            A movement equipping individuals, families, and communities with tools for grief, trauma, faith, and healing.
                        </p>
                    </div>

                    {/* Col 2 — Explore */}
                    <div>
                        <h4 style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: GOLD,
                            marginBottom: '1.25rem',
                        }}>
                            Explore
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {explore.map(item => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        style={{
                                            color: MUTED,
                                            textDecoration: 'none',
                                            fontSize: '0.92rem',
                                            fontFamily: "'Inter', system-ui, sans-serif",
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = EMBER)}
                                        onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Services */}
                    <div>
                        <h4 style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: GOLD,
                            marginBottom: '1.25rem',
                        }}>
                            Services
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {services.map(s => (
                                <li key={s} style={{ color: MUTED, fontSize: '0.92rem', fontFamily: "'Inter', system-ui, sans-serif" }}>{s}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Connect */}
                    <div>
                        <h4 style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: GOLD,
                            marginBottom: '1.25rem',
                        }}>
                            Connect
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                            {connect.map(item => (
                                <li key={item.label}>
                                    {'path' in item ? (
                                        <Link
                                            to={(item as { path: string; label: string }).path}
                                            style={{ color: MUTED, textDecoration: 'none', fontSize: '0.92rem', fontFamily: "'Inter', system-ui, sans-serif", transition: 'color 0.2s' }}
                                            onMouseEnter={e => (e.currentTarget.style.color = EMBER)}
                                            onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={(item as { href: string; label: string }).href}
                                            style={{ color: MUTED, textDecoration: 'none', fontSize: '0.92rem', fontFamily: "'Inter', system-ui, sans-serif", transition: 'color 0.2s' }}
                                            onMouseEnter={e => (e.currentTarget.style.color = EMBER)}
                                            onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom strip */}
                <div style={{
                    borderTop: '1px solid rgba(245,239,230,0.1)',
                    paddingTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                }}>
                    <p style={{ color: MUTED, fontSize: '0.82rem', fontFamily: "'Inter', system-ui, sans-serif" }}>
                        © {currentYear} GRIEF Talk by Richard Brown III. All rights reserved.
                    </p>
                    <p style={{
                        color: MUTED,
                        fontSize: '0.92rem',
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontStyle: 'italic',
                        fontWeight: 300,
                    }}>
                        You don't have to heal in silence.
                    </p>
                </div>
            </div>

            {/* Responsive: 2×2 grid below 960px */}
            <style>{`
                .footer-grid {
                    grid-template-columns: repeat(4, 1fr);
                }
                @media (max-width: 960px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 480px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </footer>
    )
}
