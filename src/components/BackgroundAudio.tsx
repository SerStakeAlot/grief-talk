import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Waves, SpeakerHigh, SpeakerSimpleX, CaretDown, CaretUp } from '@phosphor-icons/react'
import { useIsMobile } from '@/hooks/use-mobile'

const AUDIO_SRC = `${import.meta.env.BASE_URL}audio/healing-loop.mp3`

export function BackgroundAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.loop = true
        const tryAutoPlay = async () => {
            try {
                await audio.play()
                setIsPlaying(true)
                setError(null)
            } catch {
                setIsPlaying(false)
                setError('Tap play to enable sound in your browser.')
            }
        }

        tryAutoPlay()

        return () => {
            audio.pause()
        }
    }, [])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        audio.muted = isMuted
    }, [isMuted])

    const handlePlayToggle = async () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.pause()
            audio.currentTime = 0
            setIsPlaying(false)
            return
        }

        try {
            await audio.play()
            setIsPlaying(true)
            setError(null)
        } catch {
            setIsPlaying(false)
            setError('Tap play to enable sound in your browser.')
        }
    }

    const handleMuteToggle = () => {
        const audio = audioRef.current
        if (audio) {
            audio.muted = !isMuted
        }
        setIsMuted(prev => !prev)
    }

    const controllerVisible = !isMobile || !isCollapsed

    return (
        <>
            {isMobile && isCollapsed && (
                <button
                    type="button"
                    className="audio-controller__toggle focus-outline"
                    onClick={() => setIsCollapsed(false)}
                    aria-label="Show healing frequencies controller"
                >
                    <CaretUp size={16} />
                    <span>Healing Frequencies</span>
                </button>
            )}

            {controllerVisible && (
                <div className="audio-controller" aria-live="polite" role="region" aria-label="Healing frequency controls">
                    {isMobile && (
                        <button
                            type="button"
                            className="audio-controller__hide focus-outline"
                            onClick={() => setIsCollapsed(true)}
                            aria-label="Hide healing frequencies controller"
                        >
                            Hide <CaretDown size={14} />
                        </button>
                    )}

                    <div className="audio-controller__content">
                        <div className="icon-wrap">
                            <Waves size={22} className="text-primary" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                Healing Frequencies
                            </p>
                            <p className="text-sm text-foreground">
                                Gentle Hz sounds to set a calm atmosphere. You’re always in control.
                            </p>
                            {error && (
                                <p className="text-xs text-destructive font-medium">
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="audio-controller__actions">
                        <Button
                            size="sm"
                            className="audio-btn primary"
                            onClick={handlePlayToggle}
                        >
                            {isPlaying ? 'Pause Audio' : 'Play Audio'}
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="audio-btn secondary"
                            onClick={handleMuteToggle}
                            disabled={!isPlaying}
                        >
                            {isMuted ? (
                                <>
                                    <SpeakerSimpleX size={16} /> Unmute
                                </>
                            ) : (
                                <>
                                    <SpeakerHigh size={16} /> Mute
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            )}

            <audio ref={audioRef} src={AUDIO_SRC} preload="auto" aria-hidden="true" />
        </>
    )
}
