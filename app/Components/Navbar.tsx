"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    ClerkProvider,
    SignedIn,
    UserButton,
} from '@clerk/nextjs'



export default function Navbar() {
    const pathname = usePathname()
    return (
        <ClerkProvider>
            <div className="main flex justify-between items-center px-7 border-b border-zinc-300 pb-2">
                <div className="logo font-bold text-2xl">NK</div>
                <div className="list text-sm">
                    <ul className="flex gap-5 items-center ">
                        <li><Link href="./" className={` ${pathname === "/" ? "text-zinc-900" : "text-zinc-400"}`} >Home</Link></li>
                        <li><Link href="/post" className={` ${pathname === "/post" ? "text-zinc-900" : "text-zinc-400"}`} >Post</Link></li>
                        <li><Link href="/createpost" className={` ${pathname === "/createpost" ? "text-zinc-900" : "text-zinc-400"}`} >Create Post</Link></li>
                        <li>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </li>
                    </ul>
                </div>
            </div>
        </ClerkProvider>
    )
}