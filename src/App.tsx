import { useState } from 'react'
import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { About } from '@/components/About'
import { BookStore } from '@/components/BookStore'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-background">
            <Navigation 
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
            <Hero />
            <About />
            <BookStore />
            <Contact />
            <Footer />
            <Toaster />
        </div>
    )
}

export default App