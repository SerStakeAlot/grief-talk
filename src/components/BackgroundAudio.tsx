import { useEffect, useRef, useState } from 'react'
import { Play, Pause, SpeakerHigh, SpeakerSimpleX } from '@phosphor-icons/react'

const AUDIO_SRC = `${import.meta.env.BASE_URL}audio/healing-loop.mp3`

type BackgroundAudioProps = {
    hidden?: boolean
}

/**
 * Floating audio chip — fixed bottom-right pill per spec (Section 13).
 * Collapsed on mobile (icon-only), expanded on desktop (icon + text).
 * On click expands to show mute/pause controls.
 */
export function BackgroundAudio({ hidden = false }: BackgroundAudioProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        audio.loop = true
        const tryPlay = async () => {
            try {
                await audio.play()
                setIsPlaying(true)
            } catch {
                setIsPlaying(false)
                setError(true)
            }
        }
        tryPlay()
        return () => { audio.pause() }
    }, [])

    useEffect(() => {
        const audio = audioRef.current
        if (audio) audio.muted = isMuted
    }, [isMuted])

    const togglePlay = async () => {
        const audio = audioRef.current
        if (!audio) return
        if (isPlaying) {
            audio.pause()
            audio.currentTime = 0
            setIsPlaying(false)
        } else {
            try {
                await audio.play()
                setIsPlaying(true)
                setError(false)
            } catch {
                setError(true)
            }
        }
    }

    if (hidden) return <audio ref={audioRef} src={AUDIO_SRC} preload="auto" aria-hidden="true" />

    return (
        <>
            {/* Collapsed chip */}
            {!expanded && (
                <button
                    type="button"
                    aria-label="Play healing frequencies"
                    aria-pressed={isPlaying}
                    onClick={() => setExpanded(true)}
                    className="audio-chip"
                    style={{ cursor: 'pointer' }}
                >
                    <div className="audio-chip__icon">
                        {isPlaying ? <Pause size={16} weight="fill" aria-hidden /> : <Play size={16} weight="fill" aria-hidden />}
                    </div>
                    <div className="audio-chip__text">
                        <span style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 700,
                            fontSize: '0.65rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--ink, #1f1612)',
                        }}>
                            Healing Hz
                        </span>
                        <span style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: '0.72rem',
                            color: 'var(--ink-soft, #3a2a22)',
                            opacity: 0.7,
                        }}>
                            {error ? 'Tap to play' : isPlaying ? 'Playing now' : 'Tap for calm atmosphere'}
                        </span>
                    </div>
                </button>
            )}

            {/* Expanded player */}
            {expanded && (
                <div
                    role="region"
                    aria-label="Healing frequency controls"
                    aria-live="polite"
                    style={{
                        position: 'fixed',
                        bottom: '1.5rem',
                        right: '1.5rem',
                        zIndex: 9999,
                        background: 'var(--paper, #faf6ee)',
                        border: '1px solid rgba(31,22,18,0.12)',
                        borderRadius: 20,
                        boxShadow: '0 16px 48px rgba(31,22,18,0.18)',
                        backdropFilter: 'blur(14px)',
                        padding: '1rem 1.25rem',
                        minWidth: 240,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.85rem',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    background: 'var(--ember, #c8541e)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#f5efe6',
                                    flexShrink: 0,
                                }}
                            >
                                {isPlaying ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
                            </div>
                            <div>
                                <p style={{
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    fontWeight: 700,
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: 'var(--ink, #1f1612)',
                                    lineHeight: 1.2,
                                }}>
                                    Healing Frequencies
                                </p>
                                <p style={{
                                    fontFamily: "'Inter', system-ui, sans-serif",
                                    fontSize: '0.75rem',
                                    color: 'var(--ink-soft, #3a2a22)',
                                    opacity: 0.65,
                                    lineHeight: 1.2,
                                }}>
                                    Gentle Hz — calm atmosphere
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setExpanded(false)}
                            aria-label="Minimize player"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--ink-soft, #3a2a22)',
                                opacity: 0.5,
                                fontSize: '1.1rem',
                                lineHeight: 1,
                                padding: '0.2rem',
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    {error && (
                        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--ember, #c8541e)' }}>
                            Tap Play to enable sound in your browser.
                        </p>
                    )}

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            onClick={togglePlay}
                            style={{
                                flex: 1,
                                padding: '0.5rem',
                                borderRadius: '999px',
                                background: 'var(--ink, #1f1612)',
                                color: 'var(--cream, #f5efe6)',
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontWeight: 600,
                                fontSize: '0.8rem',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.35rem',
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember, #c8541e)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink, #1f1612)')}
                        >
                            {isPlaying ? <><Pause size={14} weight="fill" /> Pause</> : <><Play size={14} weight="fill" /> Play</>}
                        </button>
                        <button
                            onClick={() => setIsMuted(m => !m)}
                            disabled={!isPlaying}
                            style={{
                                flex: 1,
                                padding: '0.5rem',
                                borderRadius: '999px',
                                background: 'transparent',
                                color: 'var(--ink, #1f1612)',
                                fontFamily: "'Inter', system-ui, sans-serif",
                                fontWeight: 600,
                                fontSize: '0.8rem',
                                border: '1.5px solid rgba(31,22,18,0.2)',
                                cursor: isPlaying ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.35rem',
                                opacity: isPlaying ? 1 : 0.4,
                            }}
                        >
                            {isMuted ? <><SpeakerSimpleX size={14} /> Unmute</> : <><SpeakerHigh size={14} /> Mute</>}
                        </button>
                    </div>
                </div>
            )}

            <audio ref={audioRef} src={AUDIO_SRC} preload="auto" aria-hidden="true" />
        </>
    )
}
