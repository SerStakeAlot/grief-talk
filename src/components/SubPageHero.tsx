interface SubPageHeroProps {
    eyebrow: string
    title: React.ReactNode
    subtitle?: string
}

export function SubPageHero({ eyebrow, title, subtitle }: SubPageHeroProps) {
    return (
        <section
            className="subpage-hero"
            style={{
                padding: '9rem 2.5rem 5rem',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, var(--cream, #f5efe6) 0%, var(--paper, #faf6ee) 100%)',
                borderBottom: '1px solid rgba(31,22,18,0.08)',
            }}
        >
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
                <p style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: '0.72rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ember, #c8541e)',
                    marginBottom: '1.25rem',
                }}>
                    {eyebrow}
                </p>
                <h1 style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 300,
                    fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
                    lineHeight: 1.05,
                    color: 'var(--ink, #1f1612)',
                    marginBottom: subtitle ? '1.5rem' : 0,
                    letterSpacing: '-0.01em',
                }}>
                    {title}
                </h1>
                {subtitle && (
                    <p style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontWeight: 400,
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        lineHeight: 1.6,
                        color: 'var(--ink-soft, #3a2a22)',
                        maxWidth: '50ch',
                        margin: '0 auto',
                    }}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
