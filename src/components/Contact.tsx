import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Envelope, PaperPlaneTilt, Phone, MapPin } from '@phosphor-icons/react'
import { toast } from 'sonner'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            toast.success('Thank you for your message! Richard will be in touch soon.')
            setFormData({ name: '', email: '', subject: '', message: '' })
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
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-secondary mb-4">
                        <Envelope size={32} weight="duotone" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        For speaking engagements, coaching inquiries, or to learn more about Grief Talk
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <CardTitle className="text-2xl font-serif text-primary">
                                Send a Message
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="border-input focus:ring-secondary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
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
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Envelope size={24} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-semibold text-primary mb-2">
                                            Email
                                        </h3>
                                        <p className="text-muted-foreground">
                                            contact@grieftalk.com
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-semibold text-primary mb-2">
                                            Phone
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Available upon request
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-semibold text-primary mb-2">
                                            Speaking Engagements
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Available nationwide for conferences, workshops, and community events
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-secondary/20 to-accent/20 border-secondary/30">
                            <CardContent className="p-6">
                                <h3 className="font-serif font-semibold text-primary mb-3 text-lg">
                                    Topics Available
                                </h3>
                                <ul className="space-y-2 text-foreground">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Grief & Loss Recovery
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Trauma-Informed Care
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Faith & Healing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        Leadership in Crisis
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
