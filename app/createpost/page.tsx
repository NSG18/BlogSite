'use client'

import { useUser } from "@clerk/nextjs";
import { PostAct } from "@/actions/action"
import { useEffect } from "react";
import { saveUserToDb } from "@/actions/auth";



export default function CreatePost() {

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      saveUserToDb(); // Store user info in DB when logged in
    }
  }, [user]);

  return (
    <div className="min-h-screen max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
      <form action={PostAct} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          name="title"
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded h-40"
          name="content"
          required
        />
        {user && <input type="hidden" name="userId" value={user.id} />}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Post
        </button>
      </form>
    </div>

  )
}





