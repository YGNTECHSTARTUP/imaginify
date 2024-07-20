import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
// import Navbar from './comp/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import NavContent from './comp/NavContent'
import MobNav from './comp/MobNav'
import { Toaster } from 'sonner'
import {
  ClerkProvider,
} from '@clerk/nextjs'

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Imaginify',
    template: `Imaginify`
  },
  description: 'An AI Image Generation Platform',
  icons: {
    icon: '/favicon.ico',
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
<html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
<NavContent/>

{children}
<Toaster/>

<div className='flex md:hidden'>
<MobNav/>
</div>

          </ThemeProvider>
       
      </body>
    </html>
    </ClerkProvider>
    
  )
}
