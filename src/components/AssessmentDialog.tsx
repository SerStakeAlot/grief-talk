import { useMemo, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface AssessmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AssessmentDialog({ open, onOpenChange }: AssessmentDialogProps) {
  const [scores, setScores] = useState<Record<string, number>>({})

  const handleChange = (id: string, value: string) => {
    const num = Number(value)
    if (Number.isNaN(num)) return
    if (num < 0 || num > 4) return
    setScores((prev) => ({ ...prev, [id]: num }))
  }

  const totalScore = useMemo(
    () => Object.values(scores).reduce((sum, v) => sum + v, 0),
    [scores]
  )

  const statementField = (id: string, text: string) => (
    <div className="flex items-start gap-3">
      <Input
        type="number"
        inputMode="numeric"
        min={0}
        max={4}
        className="w-14 h-9 text-center text-sm"
        value={Number.isFinite(scores[id]) ? scores[id] : ''}
        onChange={(e) => handleChange(id, e.target.value)}
        aria-label={`${text} (0 to 4)`}
      />
      <p className="flex-1 leading-relaxed">{text}</p>
    </div>
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[min(100vw-2rem,48rem)] max-h-[90vh] p-0 flex flex-col overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-xl sm:text-2xl font-serif text-primary">
            GRIEF Talk™ & Trauma Assessment
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            A self-reflection tool to help you understand your grief, your triggers, and your healing needs. This is not a diagnosis, but a starting point for conversation and support.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 px-6 pb-6 pt-4 overflow-y-auto">
          <div className="space-y-4 text-sm sm:text-base leading-relaxed pb-2">
            <p className="font-semibold">Instructions</p>
            <p>
              For each item, rate how strongly you relate to the statement on a scale of <strong>0–4</strong>:
            </p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>0 – Not at all</li>
              <li>1 – A little</li>
              <li>2 – Sometimes</li>
              <li>3 – Often</li>
              <li>4 – Very often</li>
            </ul>
            <p>
              Enter a number from 0–4 in the box beside each statement. Your total score will be calculated automatically at the end.
            </p>

            <div className="h-px bg-border my-4" />

            <h3 className="text-lg sm:text-xl font-serif text-primary">Section 1 — G.R.I.E.F. Assessment</h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold">G – Grief</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('g1', 'I feel a sense of loss that I haven’t fully expressed.')}
                  {statementField('g2', 'I sometimes pretend I’m okay when I’m not.')}
                  {statementField('g3', 'I carry emotional pain that still affects my daily life.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">R – Recovery</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('r1', 'I struggle to regain stability after emotional or life-changing events.')}
                  {statementField('r2', 'I find it difficult to rebuild after setbacks or disappointments.')}
                  {statementField('r3', 'I want healing but don’t know where to start.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">I – Intervention</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('i1', 'I avoid asking for help even when I need it.')}
                  {statementField('i2', 'I feel like I lack tools or support systems to cope.')}
                  {statementField('i3', 'I often navigate pain alone.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">E – Education</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('e1', 'I don’t fully understand how grief and trauma impact my emotions.')}
                  {statementField('e2', 'I wish I had more knowledge about what’s happening inside me.')}
                  {statementField('e3', 'I struggle to put my emotional experiences into words.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">F – Freedom</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('f1', 'I feel stuck, trapped, or emotionally heavy.')}
                  {statementField('f2', 'My past experiences limit how freely I live today.')}
                  {statementField('f3', 'I long for emotional or mental freedom.')}
                </div>
              </div>
            </div>

            <div className="h-px bg-border my-4" />

            <h3 className="text-lg sm:text-xl font-serif text-primary">Section 2 — T.A.L.K. Assessment</h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold">T – Truth-Telling</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('t1', 'I have truths I haven’t shared with anyone.')}
                  {statementField('t2', 'I silence myself to keep the peace.')}
                  {statementField('t3', 'I carry stories I’m afraid to speak out loud.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">A – Awareness</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('a1', 'I don’t always understand why I feel what I feel.')}
                  {statementField('a2', 'I struggle to identify triggers or emotional patterns.')}
                  {statementField('a3', 'My emotions catch me off guard.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">L – Listening</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('l1', 'I don’t always feel heard or understood.')}
                  {statementField('l2', 'I have difficulty listening to my own needs.')}
                  {statementField('l3', 'I shut down emotionally when overwhelmed.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">K – Knowledge for Healing</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('k1', 'I’m unsure what steps to take toward healing.')}
                  {statementField('k2', 'I lack tools to manage grief or trauma.')}
                  {statementField('k3', 'I want guidance, structure, or a roadmap for healing.')}
                </div>
              </div>
            </div>

            <div className="h-px bg-border my-4" />

            <h3 className="text-lg sm:text-xl font-serif text-primary">Section 3 — T.R.A.U.M.A. Assessment</h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold">T – Triggered Pain</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('tp1', 'Certain events, words, or situations trigger strong emotional reactions.')}
                  {statementField('tp2', 'I relive moments from the past unexpectedly.')}
                  {statementField('tp3', 'My body reacts before my mind understands why.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">R – Responses Rooted in the Past</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('rr1', 'My reactions in the present feel connected to past experiences.')}
                  {statementField('rr2', 'I respond to situations more intensely than I want to.')}
                  {statementField('rr3', 'I still use survival behaviors that no longer serve me.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">A – Avoidance or Adaptation</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('aa1', 'I avoid conversations, places, or people connected to past pain.')}
                  {statementField('aa2', 'I’ve adapted my life around what hurt me.')}
                  {statementField('aa3', 'I shut down, numb out, or distract myself to cope.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">U – Unresolved Emotions</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('ue1', 'I carry emotions I’ve never processed.')}
                  {statementField('ue2', 'I feel anger, sadness, fear, or shame that I can’t fully explain.')}
                  {statementField('ue3', 'I have emotional wounds that still feel open.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">M – Memories That Still Speak</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('mm1', 'I replay memories that shape how I see myself today.')}
                  {statementField('mm2', 'My past still influences my confidence and relationships.')}
                  {statementField('mm3', 'Some memories feel louder than I want them to be.')}
                </div>
              </div>
              <div>
                <p className="font-semibold">A – Acceptance, Awareness &amp; Action</p>
                <div className="space-y-1.5 mt-1">
                  {statementField('aaa1', 'I struggle to accept what happened to me.')}
                  {statementField('aaa2', 'I’m unsure how to move from awareness to action.')}
                  {statementField('aaa3', 'I want healing but feel stuck on how to begin.')}
                </div>
              </div>
            </div>

            <div className="h-px bg-border my-4" />

            <h3 className="text-lg sm:text-xl font-serif text-primary">Your Score</h3>
            <p className="text-base font-medium">Total score: {totalScore}</p>

            <h3 className="text-lg sm:text-xl font-serif text-primary mt-2">Scoring &amp; Reflection</h3>
            <p>Use this guide to reflect on your total:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li><strong>0–45 — Low activation:</strong> you may be functioning well but still carrying silent or unspoken weight.</li>
              <li><strong>46–80 — Moderate activation:</strong> noticeable grief and trauma patterns; structure and support can help you move forward.</li>
              <li><strong>81–120 — High activation:</strong> grief and/or trauma responses are active or disruptive; this is where GRIEF Circles, coaching, and trauma-informed strategies are most helpful.</li>
              <li><strong>121–180 — Very high activation:</strong> significant emotional distress or unresolved trauma; layered support (community, coaching, and possibly therapy) is important.</li>
            </ul>

            <p>
              This assessment helps you see where you are, what you need, and where your healing journey with GRIEF Talk™ can begin.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
