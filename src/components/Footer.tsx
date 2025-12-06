import { Flame } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-4">
                            <Flame size={32} weight="fill" className="text-secondary" />
                            <span className="text-2xl font-serif font-bold">GRIEF Talk</span>
                        </div>
                        <p className="text-primary-foreground/80 leading-relaxed">
                            Where the Silence Ends and Healing Begins
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-serif font-semibold text-lg mb-4 uppercase tracking-[0.2em] text-amber-300">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-base">
                            <li>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-primary font-semibold shadow-md hover:bg-amber-100 hover:text-primary transition-colors"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/books"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-primary font-semibold shadow-md hover:bg-amber-100 hover:text-primary transition-colors"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/operational-trauma"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-primary font-semibold shadow-md hover:bg-amber-100 hover:text-primary transition-colors"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                    Operational Trauma Tool
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-primary font-semibold shadow-md hover:bg-amber-100 hover:text-primary transition-colors"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
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
                        © {currentYear} GRIEF Talk by Richard Brown III. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
