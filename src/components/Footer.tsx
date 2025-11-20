import { Flame } from '@phosphor-icons/react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Flame size={32} weight="fill" className="text-secondary" />
                            <span className="text-2xl font-serif font-bold">Grief Talk</span>
                        </div>
                        <p className="text-primary-foreground/80 leading-relaxed">
                            Where the Silence Ends and Healing Begins
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                                >
                                    About Richard
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                                >
                                    Books
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2 text-primary-foreground/80">
                            <li>Grief Recovery Coaching</li>
                            <li>Trauma-Informed Support</li>
                            <li>Death Doula Services</li>
                            <li>Speaking Engagements</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 pt-8 text-center">
                    <p className="text-primary-foreground/80">
                        © {currentYear} Grief Talk by Richard Brown III. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
