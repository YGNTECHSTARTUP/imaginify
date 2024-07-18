import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { images } from '../constant'
import Image from 'next/image'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'

const Page = () => {
     const imageSources = [
        "/cat.jpeg",
        "/a girl.jpeg",
        "/cooker.jpeg",
        "/dolphin tech.jpeg",
        "/rabit.jpeg",
        "/squirel.jpeg",
        "/wolf.jpg",
       
    ];
  return (

    <div className='flex mt-20   justify-center items-center min-h-screen min-w-full overflow-hidden'>
    <br/>
    <br/>    
        <ParallaxScroll images={imageSources} className='hidden lg:flex justify-center items-center min-h-screen min-w-full ' />
<div className='container mx-auto mt-20 md:grid-cols-2 md:grid lg:hidden  '>
      {
        images.map((img) =>
          <Card key={img.id} className=' overflow-hidden container lg:size-fit mt-20 '>
            <CardHeader>
              <CardTitle>
                {img.name}
              </CardTitle>
            </CardHeader>
            <CardContent className='lg:size-fit'>
              <Image src={img.src} alt={img.name} width={2040} height={500} className='overflow-hidden ' />
            </CardContent>
          </Card>
        )
      }
    </div>
    </div>
    
  )
}

export default Page