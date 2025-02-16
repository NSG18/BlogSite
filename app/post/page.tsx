import prisma from "@/lib/prisma";
import Link from "next/link";
import DeletePt from "../Components/DeletePost";
import EditPt from "../Components/EditPt";
import { auth } from "@clerk/nextjs/server";


export default async function Posts() {

  const { userId } = await auth();

  const posts = await prisma.post.findMany()

  return (
    <div className="min-h-screen max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <ul className="py-8 my-2 space-y-2 border-t border-b border-black/35">
        {posts.map((post) => (
          <li key={post.id} className="flex justify-between py-2">
            <Link className="text-black hover:underline-none" href={`/post/${post.id}`}>{post.title}</Link>
            {userId === post.userId && (
              < div className="flex gap-2">
                <DeletePt id={post.id} />
                <EditPt id={post.id} />
              </div>
            )}

          </li>
        ))}
      </ul>

    </div >

  )
}