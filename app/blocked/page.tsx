import { FrownIcon } from "lucide-react"
import Link from "next/link"

export default function Error() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <FrownIcon className="mx-auto size-12 text-primary" />
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground">429</h1>
        <p className="mt-4 text-muted-foreground">Rate limit Exceded</p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}