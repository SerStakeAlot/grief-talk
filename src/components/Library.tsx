import { useKV } from '@github/spark/hooks'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Books, FilePdf, GlobeSimple, ShoppingCart } from '@phosphor-icons/react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

interface Ebook {
    id: string
    title: string
    subtitle: string
    description: string
    price: string
    category: string
    purchaseUrl: string
}

interface Resource {
    id: string
    title: string
    summary: string
    length: string
    topic: string
    downloadUrl?: string
    status?: 'available' | 'coming-soon'
}

const marketplaceUrl = 'https://www.godaddy.com/marketplace'

export function Library() {
    const [ebooks] = useKV<Ebook[]>('grief-talk-books', [])
    const [resources, setResources] = useState<Resource[]>([])

    useEffect(() => {
        const loadManifest = async () => {
            try {
                const res = await fetch('/resources-manifest.json', { cache: 'no-store' })
                if (!res.ok) throw new Error('No manifest')
                const data = await res.json()
                const items: Resource[] = (data.resources || []).map((r: { file: string, title?: string }, idx: number) => {
                    const title = r.title || `Grief Doc ${idx + 1}`
                    return {
                        id: r.file,
                        title,
                        summary: 'Download or view this PDF resource.',
                        length: '',
                        topic: 'GRIEF Talk',
                        downloadUrl: `/resources/${encodeURIComponent(r.file)}`,
                        status: 'available',
                    }
                })
                setResources(items)
            } catch (e) {
                setResources([])
            }
        }
        loadManifest()
    }, [])

    const handlePurchase = (book: Ebook) => {
        if (book.purchaseUrl) {
            window.open(book.purchaseUrl, '_blank')
        } else {
            toast.info('GoDaddy marketplace listing will be added soon.')
        }
    }

    const handleMarketplace = () => {
        window.open(marketplaceUrl, '_blank', 'noopener')
    }

    const handleDownload = (resource: Resource) => {
        if (resource.downloadUrl) {
            window.open(resource.downloadUrl, '_blank')
        } else {
            toast.info('PDF will be uploaded here soon.')
        }
    }

    const navigate = useNavigate()

    return (
        <section id="library" data-animate="fade-up" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 text-secondary justify-center">
                        <Books size={32} weight="duotone" />
                        <span className="uppercase tracking-[0.3em] text-xs">Library</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary">
                        Ebooks and Free Resources
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Shop curated ebooks via GoDaddy&apos;s marketplace and access quick-read PDFs designed for GRIEF Talk™. Purchase the full guides or start with the free resources below.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[2fr_1fr] mb-12">
                    <Card className="bg-card border-border">
                        <CardHeader className="space-y-2">
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <GlobeSimple size={22} weight="duotone" className="text-secondary" />
                                Shop on GoDaddy Marketplace
                            </CardTitle>
                            <p className="text-muted-foreground">
                                All paid ebooks will be listed through your GoDaddy marketplace storefront. Use the button below to view the live store or add new titles.
                            </p>
                        </CardHeader>
                        <CardFooter className="flex flex-wrap gap-3">
                            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={handleMarketplace}>
                                Visit Marketplace
                            </Button>
                            <Button variant="outline" onClick={() => navigate('/contact')}>
                                Need help? Contact us
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="bg-muted/50 border-border/60">
                        <CardHeader className="space-y-2">
                            <CardTitle className="text-lg">How this works</CardTitle>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>1. Add ebook listings in GoDaddy marketplace.</li>
                                <li>2. Paste each product URL into the library data source.</li>
                                <li>3. Free PDFs live in <code>public/resources</code> for instant download.</li>
                            </ul>
                        </CardHeader>
                    </Card>
                </div>

                <div className="space-y-6 mb-14">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <p className="text-secondary uppercase tracking-[0.3em] text-xs">Ebooks</p>
                            <h3 className="text-2xl font-serif text-primary">Purchase digital guides</h3>
                        </div>
                        <Button variant="outline" onClick={handleMarketplace}>
                            Browse marketplace
                        </Button>
                    </div>

                    {!ebooks || ebooks.length === 0 ? (
                        <Card className="max-w-2xl bg-card border-border">
                            <CardContent className="p-10 text-center space-y-4">
                                <Books size={56} weight="duotone" className="text-muted-foreground mx-auto" />
                                <h4 className="text-xl font-serif text-primary">Ebooks coming soon</h4>
                                <p className="text-muted-foreground">
                                    Your GoDaddy marketplace listings will appear here once added. Share your email to be notified when the first ebook drops.
                                </p>
                                <Button 
                                    variant="outline"
                                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                                    onClick={() => navigate('/contact')}
                                >
                                    Notify me when live
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {ebooks.map((book) => (
                                <Card 
                                    key={book.id}
                                    className="bg-card border-border flex flex-col hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <CardHeader>
                                        <div className="aspect-[3/4] bg-gradient-to-br from-primary to-primary/70 rounded-md mb-4 flex items-center justify-center">
                                            <Books size={56} weight="duotone" className="text-primary-foreground" />
                                        </div>
                                        <Badge variant="secondary" className="w-fit mb-2">
                                            {book.category}
                                        </Badge>
                                        <h3 className="text-xl font-serif font-bold text-primary">
                                            {book.title}
                                        </h3>
                                        {book.subtitle && (
                                            <p className="text-sm text-muted-foreground italic">
                                                {book.subtitle}
                                            </p>
                                        )}
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-foreground leading-relaxed">
                                            {book.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-primary">
                                            {book.price}
                                        </span>
                                        <Button 
                                            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                            onClick={() => handlePurchase(book)}
                                        >
                                            <ShoppingCart size={18} className="mr-2" />
                                            Purchase
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-6" id="library-resources">
                    <div className="space-y-2">
                        <p className="text-secondary uppercase tracking-[0.3em] text-xs">Free downloads</p>
                        <h3 className="text-2xl font-serif text-primary">Short PDFs for immediate care</h3>
                        <p className="text-muted-foreground max-w-3xl">
                            PDFs in <code>public/resources</code> appear here automatically. Each resource is designed for quick relief and shareable education.
                        </p>
                    </div>

                    {resources.length === 0 ? (
                        <Card className="max-w-2xl bg-card border-border">
                            <CardContent className="p-10 text-center space-y-3">
                                <FilePdf size={32} className="text-muted-foreground mx-auto" />
                                <p className="text-muted-foreground">No PDFs found. Add files to <code>public/resources</code>.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {resources.map((resource) => (
                                <Card key={resource.id} className="bg-card border-border flex flex-col">
                                    <CardHeader className="space-y-3">
                                        <Badge variant="secondary" className="w-fit">
                                            {resource.topic}
                                        </Badge>
                                        <h4 className="text-xl font-serif text-primary">{resource.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{resource.summary}</p>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground flex items-center gap-3">
                                        <FilePdf size={18} className="text-secondary" />
                                        <span>{resource.length || 'PDF'}</span>
                                    </CardContent>
                                    <Separator className="mt-auto" />
                                    <CardFooter className="pt-4 flex gap-2">
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => handleDownload(resource)}
                                        >
                                            View
                                        </Button>
                                        <Button
                                            className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                                            onClick={() => handleDownload(resource)}
                                        >
                                            Download
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
