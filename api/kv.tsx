"use server"
import { put } from "@vercel/blob";

export async function saveToKV(prompt: string, res: string) {
 const blob = await put(prompt,res,{
    access:'public'
  })

}