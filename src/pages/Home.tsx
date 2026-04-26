import { Hero } from '@/components/Hero'
import { Link } from 'react-router-dom'

/* ── Reusable Section wrapper ── */
const W = 1200
const sectionBase: React.CSSProperties = {
    maxWidth: W,
    margin: '0 auto',
    padding: '7rem 2.5rem',
}

/* ── Pillar data ── */
const pillars = [
    {
        letter: 'G',
        name: 'GRIEF',
        tagline: 'Grief · Recovery · Intervention · Education · Freedom',
        items: [
            { key: 'G – Grief', val: 'The honest acknowledgement of loss in all its forms — not just death.' },
            { key: 'R – Recovery', val: 'A compassionate journey of rebuilding and returning to yourself.' },
            { key: 'I – Intervention', val: 'Tools, support, and conversations that interrupt harmful cycles.' },
            { key: 'E – Education', val: 'Learning the language of grief and trauma to heal with intention.' },
            { key: 'F – Freedom', val: 'Living no longer imprisoned by what happened.' },
        ],
    },
    {
        letter: 'T',
        name: 'TALK',
        tagline: 'Truth-Telling · Awareness · Listening · Knowledge',
        items: [
            { key: 'T – Truth-Telling', val: 'Honest speech about what happened and how it lives in the body.' },
            { key: 'A – Awareness', val: 'Noticing emotions, triggers, and patterns with clarity instead of shame.' },
            { key: 'L – Listening', val: 'Hearing your own story and others without judgment.' },
            { key: 'K – Knowledge', val: 'Applying wisdom and tools that move people toward restoration.' },
        ],
    },
    {
        letter: 'T',
        name: 'TRAUMA',
        tagline: 'Triggered Pain · Responses · Avoidance · Unresolved Emotions · Memories · Acceptance',
        items: [
            { key: 'T – Triggered Pain', val: 'Emotional flashpoints that reveal unresolved wounds.' },
            { key: 'R – Responses', val: 'Present behaviors shaped by earlier painful events.' },
            { key: 'A – Avoidance', val: 'Survival responses: coping around pain rather than through it.' },
            { key: 'U – Unresolved Emotions', val: 'Feelings buried or never safely expressed, still impacting today.' },
            { key: 'M – Memories', val: 'Experiences that continue to shape identity and relationships.' },
            { key: 'A – Acceptance', val: 'The healing movement: accept, become aware, take courageous action.' },
        ],
    },
]

/* ── Intake data ── */
const intakeCards = [
    {
        numeral: 'I',
        title: 'Purpose of the Intake Session',
        items: [
            'Understand your story, your needs, and what brought you here.',
            'Identify the grief, trauma, or transition you are navigating.',
            'Assess the emotional, spiritual, and practical impact on daily life.',
            'Determine whether grief coaching or another resource is the best fit.',
            'Establish clear goals for the next 3–6 months.',
        ],
    },
    {
        numeral: 'II',
        title: 'Why the Intake Matters',
        items: [
            'You are placed on the right coaching path from day one.',
            'Support is tailored to your unique situation and pace.',
            'Coach B and you begin with clarity, alignment, and shared expectations.',
            'Emotional safety is prioritized before deeper coaching work begins.',
            'Breakthrough moments happen sooner because of intentional preparation.',
        ],
    },
    {
        numeral: 'III',
        title: 'What Happens During the Intake',
        items: [
            'Share the loss, life event, or emotional burden you carry.',
            'Explore how it is affecting your day-to-day experience.',
            'Identify focus areas for the next several months of coaching.',
            'Discuss preferred coaching style and session rhythm.',
            'Review the structure of the six-month coaching journey.',
        ],
    },
    {
        numeral: 'IV',
        title: 'After the Intake Session',
        items: [
            'Receive a personalized coaching recommendation and timeline.',
            'Review a proposed 3–6 month healing and growth plan.',
            'Confirm suggested session frequency (weekly or biweekly).',
            'Understand coaching expectations, boundaries, and next steps.',
            'Lock in the official start date for your recurring sessions.',
        ],
    },
]

interface HomeProps {
    onOpenAssessment?: () => void
}

export function Home({ onOpenAssessment }: HomeProps) {
    return (
        <div>
            {/* ──────────────────────────────────────── HERO ── */}
            <Hero />

            {/* ──────────────────────────────── QUOTE BAND ── */}
            <section
                style={{
                    background: 'var(--paper, #faf6ee)',
                    padding: '7rem 2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative blobs */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-4rem',
                        left: '-4rem',
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(200,84,30,0.07) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-4rem',
                        right: '-4rem',
                        width: 280,
                        height: 280,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(212,164,69,0.08) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                />
                <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <span
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontStyle: 'italic',
                            fontSize: '6rem',
                            lineHeight: 0.7,
                            color: 'var(--ember, #c8541e)',
                            display: 'block',
                            marginBottom: '1rem',
                            opacity: 0.4,
                        }}
                        aria-hidden="true"
                    >
                        "
                    </span>
                    <p
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 300,
                            fontStyle: 'italic',
                            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                            lineHeight: 1.25,
                            color: 'var(--ink, #1f1612)',
                            maxWidth: '28ch',
                            margin: '0 auto 1.5rem',
                        }}
                    >
                        You don't have to heal in silence.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--ink-soft, #3a2a22)',
                        }}
                    >
                        — Richard Brown III, GRIEF Talk™
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────── STORY ── */}
            <section
                data-animate="fade-up"
                style={{ background: 'var(--cream, #f5efe6)', padding: '7rem 0' }}
            >
                <div
                    style={{
                        maxWidth: W,
                        margin: '0 auto',
                        padding: '0 2.5rem',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.4fr',
                        // mobile handled by .story-grid media query
                        gap: '5rem',
                        alignItems: 'start',
                    }}
                    className="story-grid"
                >
                    {/* Sticky heading */}
                    <div className="story-sticky" style={{ position: 'sticky', top: '7rem' }}>
                        <p className="eyebrow" style={{ marginBottom: '1rem' }}>01 — The Movement</p>
                        <h2
                            style={{
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontWeight: 300,
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                lineHeight: 1.1,
                                color: 'var(--ink, #1f1612)',
                            }}
                        >
                            Where truth is spoken and{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>wounds</em>{' '}
                            are named
                        </h2>
                    </div>

                    {/* Body copy */}
                    <div
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 400,
                            fontSize: '1.1rem',
                            lineHeight: 1.75,
                            color: 'var(--ink-soft, #3a2a22)',
                        }}
                    >
                        <p className="drop-cap">
                            For too long, grief and trauma have been pushed into the shadows. At GRIEF Talk™, we believe healing begins when truth is spoken, wounds are named, and hope is reclaimed.
                        </p>
                        <p style={{ marginTop: '1.25rem' }}>
                            Richard Brown III founded Brown Legacy Memorial and the GRIEF in Action Academy — building spaces where aftercare, education, and truth-telling converge. From that vision grew the GRIEF Talk Podcast, a public teaching platform extending the mission far beyond the funeral home.
                        </p>
                        <p style={{ marginTop: '1.25rem' }}>
                            Through the Podcast, books, and the Academy, Richard provides bold, trauma-informed, faith-rooted resources to help you move from pain to purpose. Whether you're navigating personal loss, unresolved grief, or the weight of operational trauma — GRIEF Talk is a safe space designed for truth-telling and transformation.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link
                                to="/about"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '0.65rem 1.5rem',
                                    borderRadius: '999px',
                                    background: 'var(--ink, #1f1612)',
                                    color: 'var(--cream, #f5efe6)',
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    fontWeight: 600,
                                    fontSize: '0.88rem',
                                    letterSpacing: '0.02em',
                                    textDecoration: 'none',
                                    transition: 'background 0.25s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink, #1f1612)')}
                            >
                                Read the Full Story
                            </Link>
                        </div>
                    </div>
                </div>
                <style>{`
                    .story-grid { grid-template-columns: 1fr 1.4fr; }
                    @media (max-width: 960px) {
                        .story-grid { grid-template-columns: 1fr !important; }
                    }
                `}</style>
            </section>

            {/* ─────────────────────────── FRAMEWORK PILLARS ── */}
            <section
                data-animate="fade-up"
                style={{
                    background: 'linear-gradient(to bottom, var(--cream, #f5efe6), var(--cream-deep, #ede4d3))',
                    padding: '7rem 0',
                }}
            >
                <div style={{ ...sectionBase, padding: '0 2.5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Framework</p>
                        <h2
                            style={{
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontWeight: 300,
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                color: 'var(--ink, #1f1612)',
                                lineHeight: 1.1,
                            }}
                        >
                            GRIEF · TALK ·{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>TRAUMA</em>
                        </h2>
                        <p
                            style={{
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontWeight: 400,
                                fontSize: '1.05rem',
                                color: 'var(--ink-soft, #3a2a22)',
                                maxWidth: '52ch',
                                margin: '1rem auto 0',
                                lineHeight: 1.65,
                            }}
                        >
                            A trauma-informed framework that gives language to what you feel, what you've survived, and how you can move toward healing.
                        </p>
                        {onOpenAssessment && (
                            <button
                                onClick={onOpenAssessment}
                                style={{
                                    marginTop: '1.5rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '0.65rem 1.75rem',
                                    borderRadius: '999px',
                                    background: 'var(--ember, #c8541e)',
                                    color: '#f5efe6',
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    fontWeight: 600,
                                    fontSize: '0.88rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    letterSpacing: '0.02em',
                                    transition: 'background 0.25s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember-deep, #a8421a)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                            >
                                Take the GRIEF Talk™ Assessment
                            </button>
                        )}
                    </div>

                    {/* Three-column pillar cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }} className="pillars-grid">
                        {pillars.map(pillar => (
                            <div
                                key={pillar.name}
                                className="pillar-card"
                                style={{
                                    background: 'var(--paper, #faf6ee)',
                                    borderRadius: 24,
                                    border: '1px solid rgba(31,22,18,0.12)',
                                    padding: '2rem',
                                    boxShadow: '0 2px 12px rgba(31,22,18,0.06)',
                                }}
                            >
                                {/* Giant letter */}
                                <div
                                    style={{
                                        fontFamily: "'Fraunces', Georgia, serif",
                                        fontWeight: 300,
                                        fontSize: '6.5rem',
                                        lineHeight: 0.9,
                                        color: 'var(--ember, #c8541e)',
                                        marginBottom: '0.5rem',
                                        opacity: 0.25,
                                        userSelect: 'none',
                                    }}
                                    aria-hidden="true"
                                >
                                    {pillar.letter}
                                </div>
                                <p
                                    style={{
                                        fontFamily: "'Fraunces', Georgia, serif",
                                        fontWeight: 500,
                                        fontSize: '1.5rem',
                                        color: 'var(--ink, #1f1612)',
                                        marginBottom: '0.35rem',
                                    }}
                                >
                                    {pillar.name}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "'Inter', system-ui, sans-serif",
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: 'var(--ink-soft, #3a2a22)',
                                        marginBottom: '1.25rem',
                                        opacity: 0.7,
                                    }}
                                >
                                    {pillar.tagline}
                                </p>
                                {/* Hairline rule */}
                                <div style={{ height: 1, background: 'rgba(31,22,18,0.1)', marginBottom: '1.25rem' }} />
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                    {pillar.items.map(item => (
                                        <li key={item.key} style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                                            <span
                                                style={{
                                                    fontFamily: "'Fraunces', Georgia, serif",
                                                    fontStyle: 'italic',
                                                    fontWeight: 500,
                                                    fontSize: '0.9rem',
                                                    color: 'var(--ink, #1f1612)',
                                                    flexShrink: 0,
                                                    minWidth: '12ch',
                                                }}
                                            >
                                                {item.key}
                                            </span>
                                            <span
                                                style={{
                                                    fontFamily: "'Inter', system-ui, sans-serif",
                                                    fontSize: '0.88rem',
                                                    color: 'var(--ink-soft, #3a2a22)',
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                — {item.val}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
                    .pillars-grid { grid-template-columns: repeat(3, 1fr); }
                    @media (max-width: 960px) {
                        .pillars-grid { grid-template-columns: 1fr !important; }
                    }
                `}</style>
            </section>

            {/* ──────────────────────────── INTAKE PROCESS ── */}
            <section
                data-animate="fade-up"
                style={{ background: 'var(--paper, #faf6ee)', padding: '7rem 0' }}
            >
                <div style={{ ...sectionBase, padding: '0 2.5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Coaching Intake</p>
                        <h2
                            style={{
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontWeight: 300,
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                color: 'var(--ink, #1f1612)',
                                lineHeight: 1.1,
                            }}
                        >
                            The GRIEF Talk™{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>Intake</em>{' '}
                            Process
                        </h2>
                        <p
                            style={{
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontWeight: 400,
                                fontSize: '1.05rem',
                                color: 'var(--ink-soft, #3a2a22)',
                                maxWidth: '52ch',
                                margin: '1rem auto 0',
                                lineHeight: 1.65,
                            }}
                        >
                            A required 45–60 minute intake session before your coaching journey begins — because intentional preparation leads to breakthrough.
                        </p>
                    </div>

                    {/* 2×2 intake cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="intake-grid">
                        {intakeCards.map(card => (
                            <div
                                key={card.numeral}
                                className="intake-card"
                                style={{
                                    background: 'var(--paper, #faf6ee)',
                                    borderRadius: 20,
                                    border: '1px solid rgba(31,22,18,0.12)',
                                    padding: '2rem',
                                    boxShadow: '0 2px 8px rgba(31,22,18,0.05)',
                                }}
                            >
                                {/* Roman numeral */}
                                <p
                                    style={{
                                        fontFamily: "'Fraunces', Georgia, serif",
                                        fontStyle: 'italic',
                                        fontSize: '2rem',
                                        fontWeight: 400,
                                        color: 'var(--ember, #c8541e)',
                                        marginBottom: '0.5rem',
                                        lineHeight: 1,
                                    }}
                                >
                                    {card.numeral}
                                </p>
                                <h3
                                    style={{
                                        fontFamily: "'Fraunces', Georgia, serif",
                                        fontWeight: 500,
                                        fontSize: '1.2rem',
                                        color: 'var(--ink, #1f1612)',
                                        marginBottom: '1rem',
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    {card.items.map(item => (
                                        <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                            <span
                                                style={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: '50%',
                                                    background: 'var(--ember, #c8541e)',
                                                    marginTop: '0.45rem',
                                                    flexShrink: 0,
                                                }}
                                                aria-hidden="true"
                                            />
                                            <span
                                                style={{
                                                    fontFamily: "'Inter', system-ui, sans-serif",
                                                    fontSize: '0.88rem',
                                                    color: 'var(--ink-soft, #3a2a22)',
                                                    lineHeight: 1.55,
                                                }}
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p
                            style={{
                                fontFamily: "'Fraunces', Georgia, serif",
                                fontStyle: 'italic',
                                fontWeight: 300,
                                fontSize: '1.25rem',
                                color: 'var(--ink, #1f1612)',
                                marginBottom: '1.75rem',
                                maxWidth: '50ch',
                                margin: '0 auto 1.75rem',
                            }}
                        >
                            "This is the moment we lay the groundwork — not for perfection, but for progress."
                        </p>
                        <div className="btn-row" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link
                                to="/contact"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '999px',
                                    background: 'var(--ink, #1f1612)',
                                    color: 'var(--cream, #f5efe6)',
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.02em',
                                    textDecoration: 'none',
                                    transition: 'background 0.25s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink, #1f1612)')}
                            >
                                Schedule Your Intake Session
                            </Link>
                            {onOpenAssessment && (
                                <button
                                    onClick={onOpenAssessment}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '0.75rem 2rem',
                                        borderRadius: '999px',
                                        background: 'transparent',
                                        color: 'var(--ember, #c8541e)',
                                        fontFamily: "'Inter', system-ui, sans-serif",
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        border: '1.5px solid var(--ember, #c8541e)',
                                        cursor: 'pointer',
                                        letterSpacing: '0.02em',
                                        transition: 'background 0.25s, color 0.25s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--ember, #c8541e)'; e.currentTarget.style.color = '#f5efe6' }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ember, #c8541e)' }}
                                >
                                    Take the Assessment
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <style>{`
                    .intake-grid { grid-template-columns: repeat(2, 1fr); }
                    @media (max-width: 960px) {
                        .intake-grid { grid-template-columns: 1fr !important; }
                    }
                `}</style>
            </section>

            {/* ────────────────────────────── CTA DARK BAND ── */}
            <section
                data-animate="fade-up"
                style={{
                    background: 'var(--ink, #1f1612)',
                    padding: '8rem 2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                }}
            >
                {/* Atmospheric glows */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-6rem',
                        left: '-6rem',
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(200,84,30,0.18) 0%, transparent 65%)',
                        pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-6rem',
                        right: '-6rem',
                        width: 350,
                        height: 350,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(212,164,69,0.12) 0%, transparent 65%)',
                        pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                />

                <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <p
                        style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--gold, #d4a445)',
                            marginBottom: '1.25rem',
                        }}
                    >
                        Begin the Work
                    </p>
                    <h2
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 300,
                            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                            lineHeight: 1.1,
                            color: 'var(--cream, #f5efe6)',
                            marginBottom: '1.5rem',
                        }}
                    >
                        It's time to stop carrying grief in{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--gold, #d4a445)' }}>silence</em>
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 400,
                            fontSize: '1.1rem',
                            color: 'rgba(245,239,230,0.75)',
                            lineHeight: 1.65,
                            marginBottom: '2.5rem',
                            maxWidth: '50ch',
                            margin: '0 auto 2.5rem',
                        }}
                    >
                        Join the GRIEF Talk movement today and discover resources that help you release, heal, and move forward.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link
                            to="/contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.85rem 2.25rem',
                                borderRadius: '999px',
                                background: 'var(--ember, #c8541e)',
                                color: '#f5efe6',
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                letterSpacing: '0.02em',
                                textDecoration: 'none',
                                boxShadow: '0 6px 24px rgba(200,84,30,0.35)',
                                transition: 'background 0.25s, box-shadow 0.25s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ember-deep, #a8421a)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(200,84,30,0.45)' }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ember, #c8541e)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(200,84,30,0.35)' }}
                        >
                            Start Your Healing Journey
                        </Link>
                        <Link
                            to="/library"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.85rem 2.25rem',
                                borderRadius: '999px',
                                background: 'transparent',
                                color: 'var(--cream, #f5efe6)',
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                letterSpacing: '0.02em',
                                textDecoration: 'none',
                                border: '1.5px solid rgba(245,239,230,0.35)',
                                transition: 'border-color 0.25s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,239,230,0.7)')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,239,230,0.35)')}
                        >
                            Browse the Library
                        </Link>
                        <Link
                            to="/podcast"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.85rem 2.25rem',
                                borderRadius: '999px',
                                background: 'transparent',
                                color: 'rgba(245,239,230,0.65)',
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                letterSpacing: '0.02em',
                                textDecoration: 'none',
                                border: '1.5px solid rgba(245,239,230,0.2)',
                                transition: 'border-color 0.25s, color 0.25s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,239,230,0.5)'; e.currentTarget.style.color = 'rgba(245,239,230,0.9)' }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,239,230,0.2)'; e.currentTarget.style.color = 'rgba(245,239,230,0.65)' }}
                        >
                            Subscribe to the Podcast
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Testimonial quote ── */}
            <section
                data-animate="fade-up"
                className="testimonial-section"
            style={{ background: 'var(--cream, #f5efe6)', padding: '5rem 2.5rem' }}
            >
                <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
                    <p
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontStyle: 'italic',
                            fontWeight: 300,
                            fontSize: 'clamp(1.35rem, 2.8vw, 1.85rem)',
                            lineHeight: 1.45,
                            color: 'var(--ink, #1f1612)',
                            marginBottom: '1rem',
                        }}
                    >
                        "GRIEF Talk gave me permission to heal. Richard's words and resources helped me find closure I didn't know was possible."
                    </p>
                    <p
                        style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--ink-soft, #3a2a22)',
                            opacity: 0.65,
                        }}
                    >
                        — Podcast Listener
                    </p>
                </div>
            </section>
        </div>
    )
}
