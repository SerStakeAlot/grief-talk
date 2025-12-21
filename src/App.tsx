import { useEffect, useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { BackgroundAudio } from '@/components/BackgroundAudio'
import { AssessmentDialog } from '@/components/AssessmentDialog'
import { WelcomeDialog } from '@/components/WelcomeDialog'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { AboutPage } from '@/pages/AboutPage'
import { LibraryPage } from '@/pages/LibraryPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFound } from '@/pages/NotFound'
import { OperationalTraumaPage } from '@/pages/OperationalTraumaPage'


function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [assessmentOpen, setAssessmentOpen] = useState(false)
    const [welcomeOpen, setWelcomeOpen] = useState(true)
    const location = useLocation()

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll<HTMLElement>('[data-animate="fade-up"]')
        )

        const reveal = (element: HTMLElement) => {
            element.setAttribute('data-visible', 'true')
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        reveal(entry.target as HTMLElement)
                        obs.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: '0px 0px -15%' }
        )

        window.requestAnimationFrame(() => {
            elements.forEach((element) => {
                if (element.getAttribute('data-visible') === 'true') {
                    return
                }

                const rect = element.getBoundingClientRect()
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight

                if (rect.top <= viewportHeight * 0.85) {
                    reveal(element)
                } else {
                    observer.observe(element)
                }
            })
        })

        return () => observer.disconnect()
    }, [location.pathname])

    const handleWelcomeChange = (open: boolean) => {
        setWelcomeOpen(open)
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation 
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
            <div className="flex-grow pt-16">
                <Routes>
                    <Route path="/" element={<Home onOpenAssessment={() => setAssessmentOpen(true)} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/operational-trauma" element={<OperationalTraumaPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
            <BackgroundAudio hidden={welcomeOpen} />
            <AssessmentDialog open={assessmentOpen} onOpenChange={setAssessmentOpen} />
            <WelcomeDialog open={welcomeOpen} onOpenChange={handleWelcomeChange} />
            <Toaster />
        </div>
    )
}

export default App