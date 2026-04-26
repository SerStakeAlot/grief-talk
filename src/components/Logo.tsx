import { cn } from '@/lib/utils'
import logoImage from '@/assets/images/gtalk.jpeg'

interface LogoProps {
  className?: string
  showText?: boolean
}

/**
 * Nav brand mark per spec:
 * 38×38px sphere-effect circle containing the logo image.
 * "GRIEF" in Inter 600, 0.78rem uppercase ember.
 * "Talk" in Fraunces 500, 1.35rem, --ink.
 * Logo image is kept per user instruction.
 */
export function Logo({ className, showText }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* 38×38 sphere-effect circle with logo image */}
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(31,22,18,0.18), inset 0 1px 0 rgba(255,255,255,0.2)',
          flexShrink: 0,
          background: '#1f1612',
        }}
      >
        <img
          src={logoImage}
          alt="GRIEF Talk"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>
      {showText && (
        <span className="flex items-baseline gap-1 leading-none select-none">
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ember, #c8541e)',
            }}
          >
            GRIEF
          </span>
          <span
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 500,
              fontSize: '1.35rem',
              color: 'var(--ink, #1f1612)',
              lineHeight: 1,
            }}
          >
            Talk
          </span>
        </span>
      )}
      <span className="sr-only">GRIEF Talk — Where the silence ends and healing begins</span>
    </div>
  )
}
