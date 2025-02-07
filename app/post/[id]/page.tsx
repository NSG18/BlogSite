
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PostDetailProps {
  params: { id: string };
}

export default async function PostDetail({ params }: PostDetailProps) {
  if (!params || !params.id) {
    return notFound(); // ✅ Handle missing params safely
  }

  const post = await prisma.post.findUnique({
    where: { id: params.id },
  });

  if (!post) {
    return <div className="text-center text-gray-500">Post not found</div>;
  }

  return (
    <div className="min-h-screen max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
    </div>
  );
}
