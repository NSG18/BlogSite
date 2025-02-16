"use client"

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { saveUserToDb } from "@/actions/auth";


export default function Home() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      saveUserToDb(); // Store user info in DB when logged in
    }
  }, [user]);

  return (
    <div className="min-h-screen text-center pt-[145px]">
      <h1 className="text-5xl font-bold pt-10">Welcome to NK Blogs</h1>
      <p className="text-sm px-[6.5rem] py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi fugit doloribus accusantium, autem debitis. Excepturi quam porro, ratione explicabo a iste. Nostrum nemo dicta praesentium, earum, dolorem totam alias omnis consequuntur quisquam est corporis itaque quidem mollitia? Praesentium, sapiente</p>
      <div>
        <div className="p-2 m-2 border-2 border-black">
          <SignInButton>Sign In</SignInButton>
        </div>
        <div className=" p-2 m-2 border-2 border-black">
          <SignOutButton>Sign Out</SignOutButton>
        </div>
      </div>
    </div>
  );
}
