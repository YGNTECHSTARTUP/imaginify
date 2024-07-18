import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

export default function GenImage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-background">
      <div className="container max-w-3xl px-4 py-12 space-y-8 md:px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <Input
              type="text"
              placeholder="Enter a prompt to generate an image"
              className="w-full px-4 py-3 text-lg font-medium rounded-lg bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Skeleton className="w-full max-w-4xl aspect-square rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  )
}