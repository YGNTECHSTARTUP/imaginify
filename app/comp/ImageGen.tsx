"use client"

import { ChangeEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ImageIcon, Loader2Icon, WandSparklesIcon } from "lucide-react"


export const dynamic = "force-dynamic";


export default function ImageGen() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [imagesrc, setImagesrc] = useState("")
  

  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value)
  }

  const generateImages = async (prompt: string) => {
    if (!prompt.trim()) {
      alert("Please enter a prompt to generate an image")
      return
    }
    setIsLoading(true)
    try {
      const res = await fetch('/api/Generate-image?prompt=' + prompt,{
        method:'GET'
      }).then((res)=>res.text())
      if (!res) {
        throw new Error("No response from generateImage")
      }
      setImagesrc(res)
     
    } catch (error) {
      console.error("Error generating image:", error)
      alert("Failed to generate image. Please try again later.")
    } finally {
      setIsLoading(false)
      setPrompt("")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="max-w-md w-full px-4 sm:px-6 xl:px-8 lg:max-w-2xl lg:mt-20 xl:max-w-3xl">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold text-foreground lg:text-4xl xl:text-5xl">Image Generator</h1>
            <p className="text-muted-foreground">Enter a prompt to generate an image.</p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            <Input
              type="text"
              placeholder="Enter a prompt..."
              value={prompt}
              onChange={handlePromptChange}
              className="flex-1 px-4 py-2 text-sm bg-muted rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary lg:px-6 lg:py-3 lg:text-base xl:px-8 xl:py-4 xl:text-lg"
            />
            <Button
              onClick={() => generateImages(prompt)}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 lg:px-6 lg:py-3 lg:text-base xl:px-8 xl:py-4 xl:text-lg"
            >
              {isLoading ? <Loader2Icon className="size-4 animate-spin"/> : "Generate"}
            </Button>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-lg">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="grid gap-4 animate-pulse">
                  <WandSparklesIcon size={40} />
                </div>
              </div>
            ) : imagesrc ? (
              <Image
                src={imagesrc}
                alt="Generated Image"
                width={1024}
                height={1024}
                className="object-cover size-full"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <ImageIcon className="size-16 text-muted-foreground lg:size-24 xl:size-32" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}