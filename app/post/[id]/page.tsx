// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// export default function PostDetail() {
//   const { id } = useParams();
//   const [post, setPost] = useState<{ title: string; content: string } | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const res = await fetch(`/api/post/${id}`);
//         if (!res.ok) throw new Error("Post not found");
//         const data = await res.json();
//         setPost(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchPost();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   console.log(post)
//   if (!post) return <p>Post not found.</p>;

//   return (
//     <div className="min-h-screen max-w-xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//       <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
//     </div>
//   );
// }



import PostSus from "@/app/Components/postSus";
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation";
import { Suspense } from "react";


export default async function Page({ params }: { params: { id: string } }) {

  const { id } = await params

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  if (!post) {
    notFound();
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