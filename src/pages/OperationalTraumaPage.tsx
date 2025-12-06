import { useMemo, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const categories = [
    {
        id: 'A',
        title: 'A. Emotional Responses',
        questions: [
            'I feel emotionally drained even when nothing big happened.',
            'I struggle to feel joy or fulfillment.',
            'My emotions feel muted or flat.',
            'I experience irritability over small things.',
            'I feel responsible for everyone’s emotions but my own.',
            'I avoid acknowledging my feelings because I don’t have time.',
            'I feel guilty when I experience my own emotional needs.',
            'I feel like I’m on autopilot.'
        ]
    },
    {
        id: 'B',
        title: 'B. Cognitive / Internal Responses',
        questions: [
            'I replay situations in my mind long after they happen.',
            'I mentally prepare for the worst even in normal situations.',
            'I question whether I’m still the same person I used to be.',
            'I feel disconnected from who I used to be.',
            'I struggle to concentrate or stay mentally present.',
            'I minimize my own pain.',
            'I feel shame when I’m overwhelmed.',
            'I feel I have no right to be tired or emotional.'
        ]
    },
    {
        id: 'C',
        title: 'C. Behavioral Patterns',
        questions: [
            'I overfunction to avoid my own emotions.',
            'I stay busy so I don’t have to feel.',
            'I withdraw because I don’t want to be a burden.',
            'I struggle to rest even when exhausted.',
            'I avoid activities I used to enjoy.',
            'I say yes even when I’m at my limit.',
            'I shut down when emotionally overloaded.',
            'My body goes into work mode even outside of work.'
        ]
    },
    {
        id: 'D',
        title: 'D. Physical / Somatic Responses',
        questions: [
            'I feel heaviness or pressure in my body.',
            'My sleep is irregular or unrefreshing.',
            'I experience unexplained fatigue.',
            'I feel emotionally or physically numb.',
            'I experience headaches or muscle tightness under stress.',
            'My body feels wired, on edge, or overstimulated.',
            'I find myself holding my breath or breathing shallowly.',
            'I feel physically depleted after supporting others.'
        ]
    },
    {
        id: 'E',
        title: 'E. Relational & Identity Shifts',
        questions: [
            'I feel misunderstood by people who don’t do what I do.',
            'I hide my struggles because people see me as the strong one.',
            'I avoid vulnerability with others.',
            'I’ve lost part of myself in helping others.',
            'I don’t know who I am outside of my role.',
            'I feel pressure to be the strong one everywhere.',
            'I struggle to let people help me.',
            'I feel emotionally distant from people I care about.'
        ]
    }
]

const questionCount = categories.reduce((total, category) => total + category.questions.length, 0)

type ResponsesState = Record<number, number>

function getInterpretation(total: number) {
    if (total <= 20) {
        return 'LOW OPERATIONAL TRAUMA — You may be experiencing normal fatigue.'
    }
    if (total <= 45) {
        return 'MILD OPERATIONAL TRAUMA — Hidden grief is beginning to surface.'
    }
    if (total <= 75) {
        return 'MODERATE OPERATIONAL TRAUMA — Your role is taking a clear emotional toll.'
    }
    if (total <= 100) {
        return 'HIGH OPERATIONAL TRAUMA — Your system is overwhelmed. Support needed.'
    }
    return 'CRITICAL OPERATIONAL TRAUMA — Recommend professional support.'
}

export function OperationalTraumaPage() {
    const [responses, setResponses] = useState<ResponsesState>({})
    const [submitted, setSubmitted] = useState(false)

    const totalScore = useMemo(() => {
        return Object.values(responses).reduce((sum, value) => sum + (Number.isFinite(value) ? value : 0), 0)
    }, [responses])

    function handleChange(questionIndex: number, value: string) {
        const numericValue = value === '' ? undefined : Number(value)
        setResponses((prev) => {
            const next = { ...prev }
            if (numericValue === undefined || Number.isNaN(numericValue)) {
                delete next[questionIndex]
            } else {
                next[questionIndex] = Math.min(3, Math.max(0, numericValue))
            }
            return next
        })
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <div data-animate="fade-up" className="bg-background py-16 sm:py-20 lg:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary">Assessment</p>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
                        Operational Trauma™ Self-Assessment Tool
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Operational Trauma™ is the hidden grief, emotional exhaustion, and identity strain experienced by those who carry the weight of others — pastors, caregivers, medical professionals, funeral directors, educators, social workers, and anyone serving on the front lines of healing. Use this assessment to locate yourself on the Operational Trauma™ scale.
                    </p>
                    <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                        <p>Answer each question on a scale from 0–3:</p>
                        <p className="font-medium text-foreground">0 = Never · 1 = Sometimes · 2 = Often · 3 = Almost Always</p>
                        <p className="text-xs uppercase tracking-[0.25em] text-secondary/80">{questionCount} questions · In-browser scoring</p>
                    </div>
                </div>

                <Card className="bg-card border-border">
                    <CardHeader className="border-b border-border/60">
                        <CardTitle className="text-lg sm:text-xl text-primary font-serif">
                            Complete the Operational Trauma™ Assessment
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Enter a number between 0 and 3 for each statement. When you are finished, submit to reveal your score and interpretation.
                        </p>
                    </CardHeader>
                    <CardContent className="p-6 sm:p-8">
                        <form className="space-y-10" onSubmit={handleSubmit}>
                            {categories.map((category, categoryIndex) => (
                                <section key={category.id} className="space-y-4">
                                    <h2 className="text-xl font-serif text-primary">{category.title}</h2>
                                    <div className="grid gap-4">
                                        {category.questions.map((question, index) => {
                                            const questionNumber = categoryIndex * 8 + index + 1
                                            return (
                                                <label key={questionNumber} className="flex flex-col gap-2 text-sm sm:text-base">
                                                    <span className="font-medium text-foreground">
                                                        {questionNumber}. {question}
                                                    </span>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        max={3}
                                                        inputMode="numeric"
                                                        value={responses[questionNumber] ?? ''}
                                                        onChange={(event) => handleChange(questionNumber, event.target.value)}
                                                        className="w-24 rounded-md border border-border bg-background px-3 py-2 text-center text-base font-semibold tracking-wide"
                                                        aria-label={`Score for question ${questionNumber}`}
                                                    />
                                                </label>
                                            )
                                        })}
                                    </div>
                                </section>
                            ))}
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                                <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                                    Submit Assessment
                                </Button>
                                <p className="text-sm text-muted-foreground">
                                    You can adjust your responses after submission to see how your score changes.
                                </p>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <Card className="bg-muted/30 border-border">
                    <CardContent className="p-6 sm:p-8 space-y-4 text-center">
                        <h2 className="text-2xl font-serif text-primary">Your Results</h2>
                        <p className="text-sm text-muted-foreground">
                            {submitted
                                ? 'Review your total score and interpretation below. Consider journaling, sharing with a trusted leader, or scheduling time with a trauma-informed professional.'
                                : 'Submit the assessment to view your total score and interpretation. Your answers remain in this browser only.'}
                        </p>
                        <div className="inline-flex flex-col items-center gap-2 rounded-xl border border-primary/20 bg-background px-6 py-4 shadow-sm">
                            <span className="text-sm uppercase tracking-[0.3em] text-secondary/90">Total Score</span>
                            <p className="text-4xl font-serif text-primary">{submitted ? totalScore : '--'}</p>
                        </div>
                        {submitted && (
                            <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed max-w-3xl mx-auto">
                                {getInterpretation(totalScore)}
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
