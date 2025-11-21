import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Waves, SpeakerHigh, SpeakerSimpleX } from '@phosphor-icons/react'

const AUDIO_SRC = '/audio/healing-loop.mp3'

export function BackgroundAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.loop = true
        audio.muted = isMuted

        if (isPlaying) {
            audio.play()
                .then(() => setError(null))
                .catch(() => {
                    setIsPlaying(false)
                    setError('Tap play to enable sound in your browser.')
                })
        } else {
            audio.pause()
            audio.currentTime = 0
        }

        return () => {
            audio.pause()
        }
    }, [isPlaying, isMuted])

    return (
        <div className="audio-controller" aria-live="polite" role="region" aria-label="Healing frequency controls">
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
                    onClick={() => setIsPlaying(prev => !prev)}
                >
                    {isPlaying ? 'Pause Audio' : 'Play Audio'}
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    className="audio-btn secondary"
                    onClick={() => setIsMuted(prev => !prev)}
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

            <audio ref={audioRef} src={AUDIO_SRC} preload="auto" aria-hidden="true" />
        </div>
    )
}
