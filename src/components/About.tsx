import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, Certificate, Heart, Microphone, BookOpen, EnvelopeSimple } from '@phosphor-icons/react'

export function About() {
    const credentials = [
        'Certified GRIEF Recovery Specialist',
        'Trauma-Informed Coach',
        'Certified Death Doula',
        'Licensed Funeral Director (OH)',
        'America’s Grief & Trauma-Informed Coach'
    ]

    const topics = [
        { icon: Heart, title: 'Grief', description: 'Understanding and processing loss in healthy ways' },
        { icon: Certificate, title: 'Trauma', description: 'Healing from traumatic experiences with compassion' },
        { icon: Heart, title: 'Faith', description: 'Finding meaning and hope through spiritual connection' },
        { icon: Microphone, title: 'Leadership', description: 'Guiding others through challenging times' }
    ]

    const works = [
        'The 24 Laws of Trauma',
        'Scandal: Handle with Care',
        'Making It on Broken Pieces'
    ]

    return (
        <section id="about" className="py-12 sm:py-16 lg:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 text-secondary mb-4">
                        <User size={32} weight="duotone" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
                        About Richard Brown III
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start mb-16">
                    <div className="space-y-6">
                        <Card className="bg-card border-border shadow-lg">
                            <CardContent className="p-6 sm:p-8 space-y-6">
                                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-2 flex items-center justify-center">
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

                        <Card className="bg-muted border-border">
                            <CardHeader className="flex items-center gap-3">
                                <BookOpen size={28} className="text-secondary" />
                                <CardTitle className="text-lg font-serif">Forthcoming Works</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="text-muted-foreground text-sm">
                                    Author of <strong>Closure: Finding Peace When Your Past Won’t Let Go</strong> with upcoming releases:
                                </p>
                                <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                                    {works.map((work) => (
                                        <li key={work}>{work}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardHeader className="flex items-center gap-3">
                                <EnvelopeSimple size={24} className="text-secondary" />
                                <CardTitle className="text-lg font-serif">Connect</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="mailto:grieftalkpodcast1@gmail.com"
                                    className="text-secondary font-medium hover:underline"
                                >
                                    grieftalkpodcast1@gmail.com
                                </a>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6 text-base sm:text-lg text-foreground leading-relaxed">
                        <p>
                            Richard Brown III is the creator of GRIEF Talk™ – Where Silence Ends and Healing Begins, a bold, faith-informed movement addressing grief, trauma, and healing. Known nationally as America’s Grief & Trauma-Informed Coach, Richard combines lived experience, professional expertise, and prophetic boldness to guide people from pain to purpose.
                        </p>
                        <p>
                            As a Licensed Funeral Director in Ohio, Richard founded Brown Legacy Memorial, a groundbreaking funeral service prioritizing pre-planning, technology, and aftercare. When tragedy struck the community and his past wrongful indictment resurfaced online, Richard chose compassion—referring the funeral to another provider to keep focus on the grieving family. Negative public backlash led to the sudden eviction and loss of Brown Legacy Memorial’s operational license, yet Richard took it as divine redirection to expand GRIEF Talk into a podcast, literary brand, and healing movement calling people to confront unresolved grief and unhealed trauma with honesty and hope.
                        </p>
                        <p>
                            Richard’s passion for justice and healing is rooted in his own survival of racial profiling and a wrongful indictment that threatened 27 years in prison. No evidence was ever found, yet he accepted a plea agreement—an injustice that reshaped his faith and calling. Determined to interrogate systemic inequities, he earned a Master of Science in Criminal Justice, a Master of Legal Studies, and is now a Ph.D. candidate in Leadership Studies at Bowling Green State University.
                        </p>
                        <p>
                            An ordained elder, Richard served five years as a youth pastor and twelve years as a senior pastor. After a moral failure involving a congregant, he resigned to honor his church’s doctrine and ethical standards. He speaks candidly about that season of repentance, self-forgiveness, and restoration—one that now informs the compassionate, transparent voice behind GRIEF Talk.
                        </p>
                        <p>
                            Having faced profound grief, loss, and public scrutiny, Richard bridges faith, mental health, and emotional recovery with authenticity. Through the GRIEF in Action Academy, GRIEF Talk Podcast, books, and nationwide speaking, he equips families, churches, and organizations to move from silence to strength.
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
