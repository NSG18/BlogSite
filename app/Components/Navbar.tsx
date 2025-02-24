"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    useUser,
    SignOutButton
} from '@clerk/nextjs'



export default function Navbar() {
    const pathname = usePathname()
    const { isSignedIn } = useUser()
    return (
        <ClerkProvider>
            <div className="main flex justify-between items-center px-[200px] py-9  bg-gradient-to-r from-cyan-500 to-blue-500">

                <Link href="./"><div className="logo font-bold text-2xl text-white ">NN</div></Link>
                <div className="list text-sm ml-[7rem] pb-0 pt-[17px]">
                    <ul className="flex gap-6  ">
                        <li><Link href="/post" className={` ${pathname === "/post" ? "font-bold" : ""} text-white`} >All Posts</Link></li>
                        <li><Link href="/createpost" className={` ${pathname === "/createpost" ? "font-bolg" : " "} text-white`} >Write Post</Link></li>
                    </ul>
                </div>
                <div className="login flex gap-3">
                    {isSignedIn ? (
                        <div className=" flex gap-4 items-center justify-center ">
                            <SignOutButton>
                                <button className="text-white">Sign Out</button>
                            </SignOutButton>
                        </div>
                    ) : (
                        <>
                            <SignInButton>
                                <button className="px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition">
                                    Login
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border border-white hover:bg-white hover:text-blue-600 transition">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </>
                    )}
                </div>
            </div>
        </ClerkProvider >
    )
}