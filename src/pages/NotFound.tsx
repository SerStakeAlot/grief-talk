export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif font-bold text-primary">404</h1>
        <p className="text-muted-foreground">Page not found.</p>
        <a href="/" className="text-secondary underline hover:no-underline">Go Home</a>
      </div>
    </div>
  )
}
