

import PostSus from "@/app/Components/postSus";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Expect `id` to be a string, not an array
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;  // `id` is directly a string

  // Fetch the post based on the `id`
  const post = await prisma.post.findUnique({
    where: { id: id },
  });

  if (!post) {
    notFound();  // If no post found, show 404
  }

  return (
    <Suspense fallback={<PostSus />}>
      <main className="min-h-screen px-7 pt-24 text-center">
        <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
        <p className="max-w-[700px] mx-auto">{post.content}</p>
      </main>
    </Suspense>
  );
}
