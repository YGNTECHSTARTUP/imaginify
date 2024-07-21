

import { currentUser } from '@clerk/nextjs/server';
import { HfInference } from '@huggingface/inference'
import { put } from '@vercel/blob'
import { kv } from '@vercel/kv'
import {Hono} from 'hono'
import { handle} from "hono/vercel"



const app = new Hono().basePath('/api')

export const runtime = "edge"





app.get('/Generate-image',async (c)=>{
    
    const prompt = c.req.query('prompt') 
    const generateImage = async (data:string) => {
        const hf = new HfInference(process.env.HUGGINGFACE_ACCESSTOKEN!);
        try {
          const result = await hf.textToImage({
            model: "stabilityai/stable-diffusion-3-medium-diffusers",
            inputs: data
          });
        return result
        } catch (error) {
          console.error("Error generating image:", error);
        }
      }; 
    if(prompt){
        console.log(prompt)
        const res = await generateImage(prompt)
        if(res){
            const user = await currentUser().then((user)=>{
                return {
                  userId:user?.id || '',
                  name:user?.firstName,
                  email:user?.emailAddresses[0].emailAddress,
                  lastActive: new Date().toISOString(),
                  sessionId:crypto.randomUUID() || ''
                }
              })
    
              const blob = await put(prompt,res,{
                access:'public'
              })
              const blobUrl = blob.url
              console.log(blobUrl)
          await kv.rpush(user.userId,blobUrl)
          await kv.hset(user.sessionId,user)
          return c.text(blobUrl)
        }
         
    }
  
      
   
})

export const GET = handle(app)
export const POST = handle(app)
