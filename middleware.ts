import { clerkMiddleware,createRouteMatcher} from "@clerk/nextjs/server";
import { Ratelimit } from "@upstash/ratelimit";
import { next } from "@vercel/edge";
import { ipAddress } from "@vercel/functions";
import { kv } from "@vercel/kv";
const isPrivateRoute = createRouteMatcher(["/User","/Generation"])
const ratelimit = new Ratelimit({
  redis:kv,
  limiter:Ratelimit.slidingWindow(3,'1 h')
})
export default clerkMiddleware(async(auth,req)=>{
  if(isPrivateRoute(req)){
    auth().protect()
}
  if(req.nextUrl.pathname.startsWith('/api/Generate-image')){
    const ip = ipAddress(req) || '127.0.0.1'
    const {success} = await ratelimit.limit(ip)
    
    return success ? next() : Response.redirect(new URL('/blocked', req.url))
    }
   

 
});





export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};