"use client"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ModeToggle } from "./ToggleButton"
import { Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"
export default function NavContent() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold" prefetch={false}>
           <Sparkles fill="teal"/>
          <span className="hover:text-teal-500 hover:underline">Imaginify</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 md:flex ">
            <Link href="/Explore" className={`${pathname == "/Explore"?"text-teal-500 font-extrabold text-xl":"text-primary"}text-sm font-medium "`} prefetch={false}>
              Explore
            </Link>
            <Link href="/Generation" className={`${pathname == "/Generation"?"text-teal-500 font-extrabold text-xl":"text-primary"}text-sm font-medium "`} prefetch={false}>
              Generation
            </Link>
            <ModeToggle/>
          </nav>
         
          <DropdownMenu>
         
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 hidden md:flex">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>YGN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex md:hidden">
          <ModeToggle/>
          </div>
        </div>
        
      </div>
    
    </header>
  )
}

function MountainIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


