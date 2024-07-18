"use client"
import { HfInference } from "@huggingface/inference";
import Image from "next/image";
import React, { useState } from 'react';
import {config} from "dotenv"
config({path:".env"})
async function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result as string);
        } else {
          reject(new Error("Failed to convert blob to base64"));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
export const generateImage = async (data:string) => {
    const hf = new HfInference(process.env.HUGGINGFACE_ACCESSTOKEN);
    try {
      const result = await hf.textToImage({
        model: "stabilityai/stable-diffusion-3-medium-diffusers",
        inputs: data
      });

      if (result instanceof Blob) {
        const base64String = await blobToBase64(result);
		return base64String
      } else {
        console.error("Expected result to be a Blob");
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };
const Imageapi = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  

 

  React.useEffect(() => {
  const res =  generateImage("A beautiful sunset over the ocean");
  console.log(res)
  }, []);

  return (
    <div>
      <div>imageapi</div>
      {imageSrc && <Image src={imageSrc} alt="Generated Sunset Over Ocean" width={250} height={250} />}
    </div>
  );
};

export default Imageapi;
