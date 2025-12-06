import { useKV } from '@github/spark/hooks'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Books, ShoppingCart } from '@phosphor-icons/react'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'

interface Book {
    id: string
    title: string
    subtitle: string
    description: string
    price: string
    category: string
    purchaseUrl: string
}

export function BookStore() {
    const [books] = useKV<Book[]>('grief-talk-books', [])

    const handlePurchase = (book: Book) => {
        if (book.purchaseUrl) {
            window.open(book.purchaseUrl, '_blank')
        } else {
            toast.info('Purchase link coming soon!')
        }
    }

    const navigate = useNavigate()

    return (
        <section id="books" data-animate="fade-up" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 text-secondary mb-4">
                        <Books size={32} weight="duotone" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
                        Published Works
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Resources and guidance for your healing journey
                    </p>
                </div>

                {!books || books.length === 0 ? (
                    <Card className="max-w-2xl mx-auto bg-card border-border">
                        <CardContent className="p-12 text-center">
                            <Books size={64} weight="duotone" className="text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                                Books Coming Soon
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Richard's published works will be available for purchase here. Check back soon or contact us for speaking engagements and resources.
                            </p>
                            <Button 
                                variant="outline"
                                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                                onClick={() => navigate('/contact')}
                            >
                                Get in Touch
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {books.map((book) => (
                            <Card 
                                key={book.id}
                                className="bg-card border-border flex flex-col hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <CardHeader>
                                    <div className="aspect-[3/4] bg-gradient-to-br from-primary to-primary/70 rounded-md mb-4 flex items-center justify-center">
                                        <Books size={64} weight="duotone" className="text-primary-foreground" />
                                    </div>
                                    <Badge variant="secondary" className="w-fit mb-2">
                                        {book.category}
                                    </Badge>
                                    <h3 className="text-2xl font-serif font-bold text-primary">
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
                                    <span className="text-2xl font-bold text-primary">
                                        {book.price}
                                    </span>
                                    <Button 
                                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                        onClick={() => handlePurchase(book)}
                                    >
                                        <ShoppingCart size={20} className="mr-2" />
                                        Purchase
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
