import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X } from '@phosphor-icons/react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7COGGazlQIs3fS-uO8DBn-UllwLmpeELp5s3OvaZAlhfljQ/viewform'

interface WelcomeDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function WelcomeDialog({ open, onOpenChange }: WelcomeDialogProps) {
    const openSubscriptionForm = () => {
        if (typeof window !== 'undefined') {
            window.open(GOOGLE_FORM_URL, '_blank', 'noreferrer')
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                style={{
                    maxWidth: 560,
                    width: '100%',
                    maxHeight: '90dvh',
                    background: 'var(--paper, #faf6ee)',
                    border: '1px solid rgba(31,22,18,0.12)',
                    borderRadius: 24,
                    padding: '3rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    boxShadow: '0 40px 100px rgba(31,22,18,0.25)',
                }}
                className="welcome-dialog-content"
            >
                {/* Close button */}
                <button
                    onClick={() => onOpenChange(false)}
                    aria-label="Close welcome dialog"
                    style={{
                        position: 'absolute',
                        top: '1.25rem',
                        right: '1.25rem',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--ink-soft, #3a2a22)',
                        opacity: 0.55,
                        padding: '0.25rem',
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <X size={20} />
                </button>

                <DialogHeader style={{ gap: '0.5rem', textAlign: 'left' }}>
                    <p
                        style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: 'var(--ember, #c8541e)',
                        }}
                    >
                        Welcome to GRIEF Talk™
                    </p>
                    <DialogTitle
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 300,
                            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                            lineHeight: 1.1,
                            color: 'var(--ink, #1f1612)',
                        }}
                    >
                        A safe space for{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--ember-deep, #a8421a)' }}>truth</em>,
                        grief, and healing
                    </DialogTitle>
                    <DialogDescription
                        style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 400,
                            fontSize: '1rem',
                            color: 'var(--ink-soft, #3a2a22)',
                            lineHeight: 1.6,
                        }}
                    >
                        A personal invitation from Richard Brown III to step into a space built not in comfort, but in the middle of real struggle.
                    </DialogDescription>
                </DialogHeader>

                <div
                    style={{
                        flex: 1,
                        minHeight: 0,
                        overflowY: 'auto',
                        paddingRight: '0.25rem',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.9rem',
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 400,
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            color: 'var(--ink-soft, #3a2a22)',
                            paddingBottom: '1rem',
                        }}
                    >
                        <p>Welcome to GRIEF Talk — a space birthed in the middle of trauma, isolation, depression, pain, misfortune, humiliation, shame, and yes… more tears than I could ever count.</p>
                        <p>But as the old saying goes, the darkest hour is just before the day. And today, this is my day — and I pray it becomes yours too.</p>
                        <p>Over the past several months, I discovered my true and authentic voice… not the filtered version, not the surviving version, but the honest version. Out of that journey came GRIEF Talk — a movement, a mission, and now a digital home.</p>
                        <p>This site serves as a tool for education, self-awareness, and transformative healing. As you journey through these pages, my hope is that you find something that speaks directly to the part of you you've learned to hide.</p>
                        <p>GRIEF Talk was created because grief shouldn't be whispered about. Trauma shouldn't be carried alone. And healing shouldn't feel like a secret.</p>
                        <p>I want to normalize the conversation around grief and trauma — because until you can name it, you will never be able to heal from it.</p>
                        <p>So take your time. Look around. Let this space meet you where you are — not where others expected you to be.</p>

                        {/* CTA inline card */}
                        <div
                            style={{
                                borderRadius: 16,
                                border: '1px solid rgba(200,84,30,0.3)',
                                background: 'rgba(200,84,30,0.05)',
                                padding: '1.5rem',
                                textAlign: 'center',
                                marginTop: '0.5rem',
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Fraunces', Georgia, serif",
                                    fontWeight: 500,
                                    fontSize: '1.1rem',
                                    color: 'var(--ink, #1f1612)',
                                    marginBottom: '0.4rem',
                                }}
                            >
                                Ready to journey with us weekly?
                            </p>
                            <p
                                style={{
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    fontSize: '0.875rem',
                                    color: 'var(--ink-soft, #3a2a22)',
                                    marginBottom: '1rem',
                                    opacity: 0.75,
                                }}
                            >
                                Receive every new resource, teaching, and gathering invitation.
                            </p>
                            <button
                                onClick={openSubscriptionForm}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '999px',
                                    background: 'var(--ember, #c8541e)',
                                    color: '#f5efe6',
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background 0.25s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember-deep, #a8421a)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                            >
                                Join the weekly subscription list
                            </button>
                        </div>

                        <div style={{ marginTop: '0.5rem' }}>
                            <p>Welcome to GRIEF Talk — Where the Silence Ends and Healing Begins.</p>
                            <p style={{ fontFamily: "'Fraunces', Georgia, serif", color: 'var(--ink, #1f1612)', marginTop: '0.35rem' }}>
                                Until Every Silence Breaks,
                            </p>
                            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, color: 'var(--ink, #1f1612)' }}>
                                Richard Brown III
                            </p>
                        </div>
                    </div>
                </div>

                <DialogFooter style={{ display: 'flex', gap: '0.75rem', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                        onClick={() => onOpenChange(false)}
                        style={{
                            background: 'transparent',
                            border: '1.5px solid rgba(31,22,18,0.2)',
                            borderRadius: '999px',
                            padding: '0.6rem 1.5rem',
                            color: 'var(--ink-soft, #3a2a22)',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            transition: 'border-color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(31,22,18,0.45)')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(31,22,18,0.2)')}
                    >
                        Continue exploring
                    </button>
                    <button
                        onClick={openSubscriptionForm}
                        style={{
                            padding: '0.65rem 1.5rem',
                            borderRadius: '999px',
                            background: 'var(--ember, #c8541e)',
                            color: '#f5efe6',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background 0.25s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember-deep, #a8421a)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                    >
                        Join the subscription list
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
