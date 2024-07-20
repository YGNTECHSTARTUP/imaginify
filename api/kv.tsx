"use server"
import { currentUser } from '@clerk/nextjs/server';
import { put } from "@vercel/blob";
import { kv } from "@vercel/kv";

export async function saveToKV(prompt: string, res: string) {
 
  const user = await currentUser().then((user)=>{
    return {
      userId:user?.id || '',
      name:user?.firstName,
      email:user?.emailAddresses[0].emailAddress,
      lastActive: new Date().toISOString(),
      sessionId:crypto.randomUUID() || ''
    }
  })
  console.log(user)
 const blob = await put(prompt,res,{
    access:'public'
  })
  const blobUrl = blob.url
  console.log(blobUrl)
  await kv.rpush(user.userId,blobUrl)
  // await kv.hset(user.sessionId,user)
  
}