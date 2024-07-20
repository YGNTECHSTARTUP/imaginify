import { Button } from '@/components/ui/button'
import { BackgroundGradientAnimation } from '@/components/ui/GradientAnimation'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 mt-20 flex items-center justify-center text-white dark:text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
          <div className=" ">
            <section className="w-full py-24 md:py-32 lg:py-40">
              <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Generate Stunning Images
                </h1>
                <p className="max-w-[700px] text-lg text-white md:text-xl">
                  Unleash your creativity with our powerful image generation tool. Get started now and bring your ideas to life.
                </p>
                <Link href="/Explore" prefetch={true}>
                  <Button variant={'outline'} className='bg-primary text-primary-foreground cursor-pointer z-50' size={'lg'}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  )
}

export default page
