import { cn } from '@/lib/utils'
import logoImage from '@/assets/images/gtalk.jpeg'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <img
        src={logoImage}
        alt="GRIEF Talk — Where the silence ends and healing begins"
        className="h-10 w-10 object-contain"
        loading="lazy"
      />
      {showText && (
        <span className="text-xl font-serif font-bold text-primary">
          GRIEF Talk
          <span className="sr-only"> — Where the silence ends and healing begins</span>
        </span>
      )}
    </div>
  )
}
