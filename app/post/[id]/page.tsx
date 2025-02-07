import prisma from "@/lib/prisma";
// import PostSus from "@/app/Components/postSus";
import NotFound from "./notFound";

export default async function PostDetail({ params }: { params: { id: string } }) {

  const post = await prisma.post.findUnique({
    where: {
      id: params.id
    }
  })

  if (!post) {
    return <NotFound />
  }

  return (
    <div className="min-h-screen max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
    </div>
  );
}
