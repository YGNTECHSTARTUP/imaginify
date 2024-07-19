import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

import Image from 'next/image'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'

import { list } from '@vercel/blob'

const Page = async () => {
 

  async function allImages() {
    const blobs = await list();
    return blobs;
  }

  async function urlToImage() {
    const data = await allImages();
    const imageSourcesPromises = data.blobs.map(async (img) => {
      const imageResponse = await fetch(img.url, {
        method: 'GET',
      });
      const newImage = await imageResponse.text();
      return newImage;
    });
    const imageSources = await Promise.all(imageSourcesPromises);
    return imageSources;
  }
  const data = await urlToImage();  
  return (
    <div className='flex mt-20 justify-center items-center min-h-screen min-w-full overflow-hidden'>
      <br />
      <br />
      <ParallaxScroll images={data || []} className='hidden lg:flex justify-center items-center min-h-screen min-w-full ' />
      <div className='container mx-auto mt-20 md:grid-cols-2 md:grid lg:hidden'>
        {data.map((img,ind) =>
          <Card key={ind} className='overflow-hidden container lg:size-fit mt-20'>
           
            <CardContent className='lg:size-fit'>
              <Image priority src={img} alt={`image${ind}`} width={2040} height={500} className='overflow-hidden ' />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Page