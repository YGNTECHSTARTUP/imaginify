"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Telescope, WandSparkles } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const MobNav = () => {
    const pathname = usePathname()
  return (
    <div className="fixed border-2 rounded-xl md:hidden  bottom-0 left-0 z-50 w-full bg-primary/95 text-primary-foreground backdrop-blur-md  transition-all duration-300 ">
    <nav className="container mx-auto flex justify-between">
      <Link href="/Explore" className={`${pathname == "/Explore" ?"  text-teal-500":"text-sm font-medium transition-colors hover:text-muted" }`} prefetch={false}>
      <div className='container  h-16 items-center justify-between px-[5%] pt-1  '>
      <Telescope className='mx-auto mt-2 ' size={30}/>
      Explore
      </div>
      </Link>
      <Link href="/Generation" className={`${pathname == "/Generation"?"text-teal-500":"text-sm font-medium transition-colors hover:text-muted"}`} prefetch={false}>
      <div className='container  h-16 items-center justify-between px-[5%] pt-1  '>
      <WandSparkles className='mx-auto mt-2' size={30}/>
      Generation
      </div>
      
      </Link>
      <Link href="/User" className={`${pathname == "/User"?"text-teal-500":"text-sm font-medium transition-colors hover:text-muted" }`} prefetch={false}>
      <div className='container  h-16 items-center justify-between  px-[5%] pt-2  '>
      <Avatar className="h-9 w-9 text-black dark:text-white mx-auto ">
                <AvatarImage src="/placeholder-user.jpg " className='dark:invert' />
                <AvatarFallback>YGN</AvatarFallback>
     </Avatar>
        &nbsp;User
      </div>
     
      </Link>
      {/* <ModeToggle/> */}
    </nav>
    </div>
  )
}

export default MobNav