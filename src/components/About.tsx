import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, Certificate, Heart, Microphone } from '@phosphor-icons/react'

export function About() {
    const credentials = [
        'Certified Grief Recovery Specialist',
        'Trauma-informed Coach',
        'Certified Death Doula',
        'Author & Creator of "Grief Talks"'
    ]

    const topics = [
        { icon: Heart, title: 'Grief', description: 'Understanding and processing loss in healthy ways' },
        { icon: Certificate, title: 'Trauma', description: 'Healing from traumatic experiences with compassion' },
        { icon: Heart, title: 'Faith', description: 'Finding meaning and hope through spiritual connection' },
        { icon: Microphone, title: 'Leadership', description: 'Guiding others through challenging times' }
    ]

    return (
        <section id="about" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-secondary mb-4">
                        <User size={32} weight="duotone" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
                        About Richard Brown III
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    <div className="space-y-6">
                        <Card className="bg-card border-border shadow-lg">
                            <CardContent className="p-8">
                                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <User size={64} weight="duotone" className="text-primary-foreground" />
                                </div>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {credentials.map((credential) => (
                                        <Badge 
                                            key={credential}
                                            variant="secondary" 
                                            className="bg-muted text-foreground px-3 py-1"
                                        >
                                            {credential}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg text-foreground leading-relaxed">
                            Richard Brown III is a compassionate guide for those navigating life's most difficult moments. 
                            As a Certified Grief Recovery Specialist, Trauma-informed coach, and certified death doula, 
                            Richard brings both professional expertise and deep empathy to his work.
                        </p>
                        <p className="text-lg text-foreground leading-relaxed">
                            Richard teaches and speaks nationwide on grief, trauma, faith, and leadership—helping 
                            communities heal forward, not just move on. Through "Grief Talks," he creates safe spaces 
                            where silence ends and authentic healing begins.
                        </p>
                        <p className="text-lg text-foreground leading-relaxed">
                            His approach combines evidence-based practices with trauma-informed care, recognizing 
                            that healing is not about forgetting or moving past pain, but rather learning to carry 
                            it forward with grace, wisdom, and hope.
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-serif font-semibold text-primary text-center mb-8">
                        Speaking & Teaching Topics
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topics.map(({ icon: Icon, title, description }) => (
                            <Card key={title} className="bg-card border-border hover:shadow-lg transition-all hover:-translate-y-1">
                                <CardContent className="p-6 text-center">
                                    <Icon size={48} weight="duotone" className="text-secondary mx-auto mb-4" />
                                    <h4 className="text-xl font-serif font-semibold text-primary mb-2">
                                        {title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
