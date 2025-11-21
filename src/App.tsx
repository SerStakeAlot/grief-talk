import { useEffect, useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { BackgroundAudio } from '@/components/BackgroundAudio'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { AboutPage } from '@/pages/AboutPage'
import { BooksPage } from '@/pages/BooksPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFound } from '@/pages/NotFound'

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation 
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
            <div className="flex-grow pt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
            <BackgroundAudio />
            <Toaster />
        </div>
    )
}

export default App