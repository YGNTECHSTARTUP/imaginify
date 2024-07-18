import React from 'react'
import ImageGen from '../comp/ImageGen'
import GenImage from '../comp/GenImage'

const page = () => {
  return (
    <div>
      <div className=''>
      <ImageGen/>
      </div>
      {/* <div className='hidden md:flex'>
<GenImage/>
      </div> */}
    </div>
  )
}

export default page