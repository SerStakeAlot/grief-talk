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
                        <div className="pt-4 border-t border-border/60 mt-4 space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-primary">
                                The Richard Brown Manifesto
                            </h3>
                            <p className="text-muted-foreground text-sm tracking-[0.18em] uppercase">
                                A declaration of truth, healing, and unapologetic leadership
                            </p>
                            <p>
                                I am Richard Brown III — a grief educator, trauma-informed healing coach, second-generation funeral professional, truth-teller, and survivor. My life is the intersection of service, suffering, recovery, and rebirth. I stand as a witness to what pain can take — and what truth can restore.
                            </p>
                            <p>
                                I am here to disrupt silence.
                            </p>
                            <p>
                                I am here to confront the myths, systems, and histories that taught us to bury our wounds instead of healing them. I am not driven by perfection, position, or applause. I am driven by purpose — to make grief speakable, to make trauma understandable, and to make healing accessible to Black and Brown communities who have carried too much for too long.
                            </p>
                            <p>
                                I believe every voice deserves to be heard — especially the silenced ones, the misunderstood ones, the accused ones, the grieving ones, the ones still trying to rise after being knocked down.
                            </p>
                            <p>
                                I am not my wounds — but I am not ashamed of them either.
                                <br />
                                I am not my past — but I refuse to hide it.
                                <br />
                                I am not a victim — but I refuse to pretend I was never broken.
                            </p>
                            <p>
                                My story is not an excuse.
                                <br />
                                It is evidence.
                                <br />
                                Evidence that truth is recovery.
                                <br />
                                Evidence that healing is possible.
                                <br />
                                Evidence that you can survive the fire and still come out with a voice that shakes rooms.
                            </p>
                            <p>
                                I created GRIEF Talk™ because the world teaches people to be strong, silent, and suffering — but silence has never saved us. Truth does. Awareness does. Community does. Listening does. Knowledge does.
                            </p>
                            <p>
                                I am committed to building spaces — digital, emotional, communal, and spiritual — where people can face their grief, confront their trauma, and reclaim the parts of themselves they were taught to suppress.
                            </p>
                            <p>
                                I speak for the misunderstood.
                                <br />
                                I write for the misnamed.
                                <br />
                                I stand with the misjudged.
                                <br />
                                I fight for the unseen.
                                <br />
                                I carry the stories no one else will touch.
                            </p>
                            <p>
                                My leadership is rooted in compassion, sharpened by experience, and fueled by the responsibility of helping others rise. I will continue to expose systems that harm, dismantle narratives that condemn, and teach a generation how to heal without apology.
                            </p>
                            <p>
                                I am not here to entertain.
                                <br />
                                I am here to awaken.
                                <br />
                                I am here to liberate.
                                <br />
                                I am here to teach people how to breathe again.
                            </p>
                            <p>
                                This is my calling.
                                <br />
                                This is my assignment.
                                <br />
                                This is my manifesto.
                            </p>
                            <p>
                                I am Richard Brown III — where silence ends, truth begins, and healing becomes unstoppable.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl font-serif font-semibold text-primary text-center mb-6">
                        The GRIEF Talk™ + Trauma Framework
                    </h3>
                    <p className="text-muted-foreground max-w-4xl mx-auto text-center mb-10">
                        GRIEF Talk™ is built on a clear, trauma-informed framework. It gives language to what people feel, what they have endured, and how they can move toward recovery, freedom, and restored identity.
                    </p>
                    <div className="max-w-4xl mx-auto mb-10 text-left space-y-4 text-base sm:text-lg leading-relaxed">
                        <h4 className="text-2xl sm:text-3xl font-serif font-semibold text-primary">
                            The GRIEF Talk Manifesto
                        </h4>
                        <p className="text-muted-foreground text-sm tracking-[0.18em] uppercase">
                            Where silence ends. Where healing begins. Where truth finds its breath again.
                        </p>
                        <p>
                            We believe every human being carries a story they were never given permission to tell.
                            A wound someone told them to hide.
                            A truth they learned to swallow just to survive.
                        </p>
                        <p>
                            We believe grief is not just about death — it’s about the moments that broke us, the people who dropped us, the dreams that died quietly in rooms where no one noticed. Grief is the weight we carry when we are still expected to function. Still expected to smile. Still expected to move… even when life has stopped.
                        </p>
                        <p>
                            We believe silence has been weaponized. And for too long, we’ve been taught to protect the image at the cost of our emotional well-being. To be strong even when we are shattering. To push through when we needed to pause. To numb what needed naming. To hide what needed healing.
                        </p>
                        <p>
                            We believe trauma is not a character flaw. It is not weakness. It is not a lack of faith. Trauma is the uninvited guest that stays until someone teaches us how to evict it.
                        </p>
                        <p>
                            We believe that healing is not accidental — it is intentional, it is sacred, and it is courageous.
                        </p>
                        <p>
                            We believe in telling the truth even when it trembles. We believe in awareness even when it hurts. We believe in listening for what the soul is too tired to say out loud. And we believe in giving people the knowledge that frees them from the prisons they learned to live in.
                        </p>
                        <p>
                            We believe Black and Brown communities deserve emotional liberation. We deserve tools. We deserve language. We deserve healing spaces that understand our story, our fight, our history, our trauma, our brilliance, our survival.
                        </p>
                        <p>
                            We believe in breaking generational patterns one heart at a time. We believe in building communities that breathe again. We believe in restoring the humanity that trauma tried to steal. We believe in transformation that begins with truth and ends with freedom.
                        </p>
                        <p>
                            We believe that when people heal, families heal. When families heal, communities rise. And when communities rise, systems shift. Healing is justice. Healing is resistance. Healing is restoration. Healing is reclamation.
                        </p>
                        <p>
                            We believe that your story matters. Your pain matters. Your voice matters. And your healing is not just possible — it is overdue.
                        </p>
                        <p>
                            We believe in this work because we live this work. Because silence almost took us too. But truth returned us back to ourselves. And because healing gave us back our lives.
                        </p>
                        <p>
                            We are here to help others reclaim theirs.
                        </p>
                        <p>
                            This is GRIEF Talk. This is the movement. This is the calling. This is the work.
                        </p>
                        <p>
                            Keep living. Keep healing. Keep rising.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <Card className="bg-card border-border card-elevated">
                            <CardHeader>
                                <CardTitle className="text-lg font-serif text-primary flex flex-col gap-1">
                                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">GRIEF</span>
                                    <span>Grief • Recovery • Intervention • Education • Freedom</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm sm:text-base leading-relaxed">
                                <p><strong>G – Grief</strong> — honest acknowledgement of loss in all its forms.</p>
                                <p><strong>R – Recovery</strong> — a compassionate journey of rebuilding and returning to self.</p>
                                <p><strong>I – Intervention</strong> — tools, support, and conversations that interrupt harmful cycles.</p>
                                <p><strong>E – Education</strong> — learning the language of grief and trauma to heal with intention.</p>
                                <p><strong>F – Freedom</strong> — living no longer imprisoned by what happened.</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border card-elevated">
                            <CardHeader>
                                <CardTitle className="text-lg font-serif text-primary flex flex-col gap-1">
                                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">TALK</span>
                                    <span>Truth-Telling • Awareness • Listening • Knowledge for Healing</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm sm:text-base leading-relaxed">
                                <p><strong>T – Truth-Telling</strong> — honest speech about what happened and how it still lives in the body and mind.</p>
                                <p><strong>A – Awareness</strong> — noticing emotions, triggers, and patterns with clarity instead of shame.</p>
                                <p><strong>L – Listening</strong> — hearing your own story and the stories of others without judgment.</p>
                                <p><strong>K – Knowledge for Healing</strong> — applying wisdom, strategies, and tools that move people toward restoration.</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border card-elevated">
                            <CardHeader>
                                <CardTitle className="text-lg font-serif text-primary flex flex-col gap-1">
                                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">TRAUMA</span>
                                    <span>Triggered Pain • Responses • Avoidance • Unresolved Emotions • Memories • Acceptance, Awareness, and Action</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm sm:text-base leading-relaxed">
                                <p><strong>T – Triggered Pain</strong> — emotional flashpoints that reveal unresolved wounds.</p>
                                <p><strong>R – Responses Rooted in the Past</strong> — present behaviors shaped by earlier painful events.</p>
                                <p><strong>A – Avoidance or Adaptation</strong> — survival responses that help people cope around pain.</p>
                                <p><strong>U – Unresolved Emotions</strong> — feelings that were never safely expressed but still influence today.</p>
                                <p><strong>M – Memories That Still Speak</strong> — experiences that continue to shape identity and relationships.</p>
                                <p><strong>A – Acceptance, Awareness, and Action</strong> — the healing movement from naming what happened to taking courageous, restorative steps.</p>
                            </CardContent>
                        </Card>
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
