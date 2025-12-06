import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { EnvelopeSimple, PaperPlaneTilt, ShareNetwork, LinkedinLogo, FacebookLogo, InstagramLogo, YoutubeLogo, TwitterLogo, SpotifyLogo } from '@phosphor-icons/react'

const campusSupportHighlights = [
    {
        title: '1. We Respond to Campus-Wide Grief Events',
        description: 'Counseling offices focus primarily on individual therapy, not large-scale crises. GRIEF Talk™ steps in during moments that impact the entire campus community.',
        subsections: [
            {
                heading: 'Common scenarios we support',
                items: [
                    'Student or faculty death',
                    'Violent or traumatic losses',
                    'Suicide clusters',
                    'Residence hall incidents',
                    'Tragedies involving athletic teams or student organizations'
                ]
            },
            {
                heading: 'We provide',
                items: [
                    'Emergency grief circles',
                    'Residence hall and athletics grief support',
                    'Classroom stabilization and faculty briefings',
                    'Post-crisis healing sessions',
                    'Memorial guidance and coordination'
                ]
            }
        ]
    },
    {
        title: '2. We Provide Non-Clinical Support Universities Cannot Offer',
        description: 'Campus therapists must follow strict clinical, legal, and documentation guidelines. GRIEF Talk™ offers non-clinical, culturally responsive grief care that fills the human and relational gaps.',
        subsections: [
            {
                heading: 'Non-clinical offerings',
                items: [
                    'Peer-based grief spaces',
                    'Spiritual and cultural grief dialogue',
                    'Survivors-of-loss gatherings',
                    'Obituary and memorial assistance',
                    'Family meetings after a campus death',
                    'Creative spaces for grief expression beyond therapy'
                ]
            }
        ]
    },
    {
        title: '3. We Strengthen Campus Diversity & Cultural Competency',
        description: 'Many universities struggle to meet the grief-related needs of diverse populations. GRIEF Talk™ delivers culturally grounded grief care that aligns with campus DEI goals.',
        subsections: [
            {
                heading: 'Culturally rooted care',
                items: [
                    'African American grief traditions',
                    'Latino and multicultural grief support',
                    'LGBTQIA+ inclusive grief spaces',
                    'Support for first-generation and international students'
                ]
            }
        ]
    },
    {
        title: '4. We Improve Student Retention After Loss',
        description: 'When students lose a loved one, they often drop out or fall behind. GRIEF Talk™ helps them stay enrolled and emotionally supported.',
        subsections: [
            {
                heading: 'We help students remain on track with',
                items: [
                    'Academic reintegration guidance',
                    'Emotional stabilization and check-ins',
                    'Support navigating grief far from home',
                    'Structured programming for the first 90 days after a loss'
                ]
            }
        ]
    },
    {
        title: '5. We Provide High-Impact Programs Counseling Centers Don’t Have Time For',
        description: 'Campus counselors are overwhelmed with individual caseloads. GRIEF Talk™ expands their reach with large-scale programming and trainings.',
        subsections: [
            {
                heading: 'Our team delivers',
                items: [
                    'Campus-wide workshops and trainings',
                    'Large-group grief processing circles',
                    'Residence hall and athletics sessions',
                    'Peer leader and RA certification',
                    'Faculty grief-sensitivity education'
                ]
            }
        ]
    },
    {
        title: '6. We Strengthen Campus Risk Management After Crisis',
        description: 'Faculty, staff, and student affairs teams are often unprepared for tragedy. GRIEF Talk™ delivers a structured, trauma-informed response system.',
        subsections: [
            {
                heading: 'Crisis response services',
                items: [
                    'Immediate grief stabilization support',
                    'Postvention strategies after suicide or traumatic death',
                    'Classroom healing protocols and instructional guidance',
                    'Faculty support and coaching',
                    'Community-wide healing and memorial events'
                ]
            }
        ]
    },
    {
        title: '7. We Offer Scalable, Affordable Support Options',
        description: 'Instead of hiring additional clinicians, universities partner with GRIEF Talk™ for high-impact, flexible solutions.',
        subsections: [
            {
                heading: 'Flexible partnership models',
                items: [
                    'On-call crisis support',
                    'Monthly campus-wide programming',
                    'Staff and faculty training intensives',
                    'Peer leader certification pathways',
                    'Large events and healing sessions',
                    'Ongoing virtual or hybrid support options'
                ]
            }
        ]
    }
]

const signaturePrograms = [
    'Campus Grief Circles (24–48-hour response)',
    'Faculty Workshop: “How to Support Grieving Students”',
    'Student Leader & RA Certification',
    'GRIEF Talk™ Workshops (monthly or quarterly)',
    'Campus Crisis Response Partnership',
    'Virtual and hybrid grief support options'
]

const whyCollegesChoose = [
    'Cultural grief expertise and DEI alignment',
    'Large-group trauma response and community stabilization',
    'Faculty, department, and student affairs support',
    'Affordable programming that extends counseling resources',
    'Immediate crisis response after a campus tragedy',
    'Non-clinical emotional care that is flexible and student-centered'
]
// Staff directory removed per request

const socials = [
    { label: 'Facebook', icon: FacebookLogo, href: 'https://facebook.com' },
    { label: 'Instagram', icon: InstagramLogo, href: 'https://instagram.com' },
    { label: 'YouTube', icon: YoutubeLogo, href: 'https://youtube.com' },
    { label: 'Twitter (X)', icon: TwitterLogo, href: 'https://twitter.com' },
    { label: 'Podcast Platforms', icon: SpotifyLogo, href: 'https://spotify.com' },
    { label: 'LinkedIn', icon: LinkedinLogo, href: 'https://linkedin.com' },
]

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            toast.success('Thank you for your message! Our team will be in touch soon.')
            setFormData({ name: '', email: '', message: '' })
            setIsSubmitting(false)
        }, 1000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="contact" data-animate="fade-up" className="py-12 sm:py-16 lg:py-24 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 text-secondary mb-2">
                        <EnvelopeSimple size={32} weight="duotone" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
                        Get in Touch
                    </h2>
                    <p className="lead text-muted-foreground max-w-3xl mx-auto">
                        We’d love to hear from you. Whether you have a question, need support, or want to book Richard for an event, here’s how to connect with the GRIEF Talk team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <CardTitle className="text-2xl font-serif text-primary">
                                General Contact Form
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="border-input focus:ring-secondary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="border-input focus:ring-secondary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">How can we help you?</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="border-input focus:ring-secondary resize-none"
                                    />
                                </div>

                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <PaperPlaneTilt size={20} className="mr-2" />
                                            Submit
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                        <ShareNetwork size={28} />
                        <h3 className="text-2xl font-serif">Connect with us</h3>
                    </div>
                    <p className="text-muted-foreground max-w-3xl">
                        Connect with us and join the conversation:
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                        {socials.map(({ label, icon: Icon, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                aria-label={label}
                            >
                                <Card className="w-16 h-16 flex items-center justify-center border-border/70 hover:border-secondary transition-colors">
                                    <Icon size={28} className="text-primary" />
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>

                <section data-animate="fade-up" className="py-12 sm:py-16 lg:py-20 bg-muted/30 rounded-3xl border border-border/50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        <div className="space-y-4 text-center">
                            <span className="text-secondary uppercase tracking-[0.3em] text-xs">Higher Education Partnerships</span>
                            <h2 className="text-3xl sm:text-4xl font-serif text-primary">How GRIEF Talk™ Supports Colleges &amp; Universities</h2>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                                GRIEF Talk™ enhances campus counseling systems by filling the gaps that traditional services cannot cover. We bring scalable, culturally responsive grief support that strengthens student retention, stabilizes campus communities, and equips faculty and staff after crisis.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {campusSupportHighlights.map(({ title, description, subsections }) => (
                                <Card key={title} className="bg-card border-border/70 hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 sm:p-7 space-y-4">
                                        <h3 className="text-lg font-serif text-primary">{title}</h3>
                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                            {description}
                                        </p>
                                        {subsections.map(({ heading, items }) => (
                                            <div key={heading} className="space-y-2">
                                                <p className="text-xs uppercase tracking-[0.2em] text-secondary/80">{heading}</p>
                                                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                    {items.map((item) => (
                                                        <li key={item} className="flex gap-2">
                                                            <span className="mt-2 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-primary text-primary-foreground border-primary/30 shadow-xl">
                            <CardContent className="p-6 sm:p-8 space-y-4">
                                <h3 className="text-2xl font-serif">Signature GRIEF Talk™ Programs for Colleges</h3>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base leading-relaxed">
                                    {signaturePrograms.map((program) => (
                                        <li key={program} className="flex gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary-foreground" aria-hidden />
                                            <span>{program}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/80">
                            <CardContent className="p-6 sm:p-8 space-y-4">
                                <h3 className="text-2xl font-serif text-primary">Why Colleges Choose GRIEF Talk™</h3>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    We bring what counseling centers cannot—cultural expertise, scalable programming, immediate crisis response, and community-wide stabilization.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    {whyCollegesChoose.map((reason) => (
                                        <li key={reason} className="flex gap-2">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                                            <span>{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground/80">
                                    GRIEF Talk™ does not replace counseling — it strengthens it. Together, we help campuses heal, rebuild, and support their students through the most difficult moments.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                                    <Button
                                        className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90"
                                        onClick={() => window.open('https://example.com/higher-ed', '_blank')}
                                    >
                                        Schedule a Campus Consultation
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    >
                                        Connect with GRIEF Talk™
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <div className="text-center space-y-4">
                    <p className="text-xl font-serif text-primary">
                        “No matter where you are in your journey, you don’t have to walk it alone.”
                    </p>
                    <p className="text-muted-foreground">
                        Reach out — we’re here for you.
                    </p>
                </div>
            </div>
        </section>
    )
}
