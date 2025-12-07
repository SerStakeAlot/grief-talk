import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7COGGazlQIs3fS-uO8DBn-UllwLmpeELp5s3OvaZAlhfljQ/viewform'

interface WelcomeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WelcomeDialog({ open, onOpenChange }: WelcomeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-hidden border-secondary/40 bg-background/95 backdrop-blur-xl">
        <DialogHeader className="space-y-2 text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-secondary">Welcome to GRIEF Talk™</p>
          <DialogTitle className="text-3xl font-serif text-primary">
            WELCOME TO GRIEF Talk™
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            A personal invitation from Richard Brown III to step into a safe, unfiltered space for grief, trauma, and healing justice.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[55vh] pr-3">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Welcome to GRIEF Talk — a space that was not built in comfort, but birthed in the middle of trauma, isolation, depression, pain, misfortune, humiliation, shame, and yes… more tears than I could ever count.
            </p>
            <p>
              But as the old saying goes, the darkest hour is just before the day. And today, this is my day — and I pray it becomes yours too.
            </p>
            <p>
              Because today, I welcome you into a safe space.
            </p>
            <p>
              Over the past several months, I discovered my true and authentic voice… not the filtered version, not the surviving version, but the honest version. Out of that journey came GRIEF Talk — a movement, a mission, and now a digital home.
            </p>
            <p>
              This website serves as a tool for education, self-awareness, and transformative healing. As you journey through these pages — exploring the articles, ebooks, resources, trainings, courses, and conversations — my hope is that you will find something here that speaks directly to the part of you you’ve learned to hide.
            </p>
            <p>
              GRIEF Talk was created because grief shouldn’t be whispered about. Trauma shouldn’t be carried alone. And healing shouldn’t feel like a secret.
            </p>
            <p>
              This site will be updated weekly with fresh tools, teachings, and resources designed to strengthen your understanding of grief — not just the grief of death, but the grief of disappointment, betrayal, transition, identity loss, and the life you thought you would be living by now.
            </p>
            <p>
              I want to normalize the conversation around grief and trauma, because until you can name it, you will never be able to heal from it.
            </p>
            <p>
              So take your time. Look around. Let this space meet you where you are — not where others expected you to be.
            </p>
            <p>
              Make yourself comfortable… and more importantly, join the movement by subscribing to our email list — where you’ll receive updates on upcoming masterclasses, workshops, webinars, and podcast episodes, along with new resources created to support your healing journey.
            </p>
            <div className="space-y-1">
              <p>Welcome to GRIEF Talk — Where the Silence Ends and Healing Begins.</p>
              <p className="font-serif text-primary">Until Every Silence Breaks,</p>
              <p className="font-serif text-primary">I remain,</p>
              <p className="font-serif text-primary font-semibold">Richard Brown III</p>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="sm:flex-row sm:items-center sm:justify-between gap-3">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Continue exploring
          </Button>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              Join the weekly subscription list
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
