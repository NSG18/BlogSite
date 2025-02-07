import prisma from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";
import PostSus from "@/app/Components/postSus"


export default async function Posts() {
  const posts = await prisma.post.findMany();

  return (
    <div className="min-h-screen max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <Suspense fallback={<PostSus />}>
        <ul className="space-y-2 ">
          {posts.map((post) => (
            <li key={post.id}>
              <Link className="text-black hover:underline-none" href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>

  )
}