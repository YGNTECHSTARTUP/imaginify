


import { currentUser } from '@clerk/nextjs/server';
import { kv } from '@vercel/kv';
import Image from 'next/image';
import React from 'react'


export const dynamic = "force-dynamic"

const page = async () => {
  const user = await currentUser()
  
  const urls = await kv.lrange(user?.id!,0,-1)

  if(urls.length === 0){
    <div className="flex flex-col items-center space-y-4">
       
     
    <Image src={user?.imageUrl || ''} alt='user' width={200} height={200} className='rounded-full' />

    
 
    <div className="text-center">
      <h2 className="text-2xl font-bold">{`${user?.firstName}}`}</h2>
    </div>
  </div>
  }
   
  const imageSources = urls.map(async (url:string)=>{

    return url
  })

  const images = await Promise.all(imageSources)

  
    
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background mt-[20%] ">
    <div className="bg-card p-6 rounded-xl shadow-lg w-full max-w-4xl lg:max-w-6xl dark:shadow-white">
      <div className="flex flex-col items-center space-y-4">
       
     
        <Image src={user?.imageUrl || ''} alt='user' width={200} height={200} className='rounded-full' />
    
        
     
        <div className="text-center">
          <h2 className="text-2xl font-bold">{`${user?.firstName} `}</h2>
        </div>
      </div>
     <h1 className='text-xl lg:text-2xl xl:text-3xl font-extrabold mt-10 '> UserGenerationHistory</h1>
      <div className="grid grid-cols-3 gap-4 mt-6 justify-center">
        {
          images.map((img,ind)=>(
                <Image key={ind}priority src={img} alt={`image${ind}`} width={2040} height={500} className='overflow-hidden ' />
            
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default page