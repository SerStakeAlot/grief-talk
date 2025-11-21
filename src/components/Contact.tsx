import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { EnvelopeSimple, PaperPlaneTilt, ShareNetwork, LinkedinLogo, FacebookLogo, InstagramLogo, YoutubeLogo, TwitterLogo, SpotifyLogo } from '@phosphor-icons/react'
const staffContacts = [
    { label: 'Speaking & Media Inquiries', name: '[Staff Name]', email: 'speaking@grieftalk.com' },
    { label: 'Podcast & Technical Support', name: '[Staff Name]', email: 'podcast@grieftalk.com' },
    { label: 'Academy & Course Questions', name: '[Staff Name]', email: 'academy@grieftalk.com' },
    { label: 'Bookstore & Resources', name: '[Staff Name]', email: 'resources@grieftalk.com' },
    { label: 'General Questions', name: '[Staff Name]', email: 'info@grieftalk.com' },
]

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
        <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-background">
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

                    <Card className="bg-card border-border">
                        <CardHeader>
                            <CardTitle className="text-2xl font-serif text-primary">
                                Staff Directory
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {staffContacts.map((staff) => (
                                <div key={staff.email} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                        {staff.label}
                                    </p>
                                    <p className="text-lg font-serif text-primary">
                                        {staff.name}
                                    </p>
                                    <a href={`mailto:${staff.email}`} className="text-secondary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        {staff.email}
                                    </a>
                                </div>
                            ))}
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
