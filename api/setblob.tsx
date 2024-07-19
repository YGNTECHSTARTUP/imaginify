import React from 'react'
import { gzipSync } from 'zlib'
import {kv} from "@vercel/kv"
export const setblob = () => {
    const compresseddata = gzipSync('Hello, world!')
      const data = kv.set('blob', compresseddata)
      console.log(data)
  return (
    <div>setblob</div>
  )
}
export default setblob