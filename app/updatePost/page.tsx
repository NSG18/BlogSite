import prisma from "@/lib/prisma"

export default async function UpdatePost(props: { searchParams: Promise<{ id?: string }> }) {
    const searchParams = await props.searchParams;
    const id = await searchParams.id
    if (!id) {
        return <div className="min-h-screen text-center">Invalid post ID</div>;
    }

    const post = await prisma.post.findUnique({
        where: { id }
    })

    if (!post) {
        return <div className="min-h-screen text-center">Post not found</div>;
    }

    return (
        <div className="min-h-screen max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
            <h1 className="text-2xl font-bold mb-4">Update Blog Post</h1>
            <form action="/api/updatePost" method="POST" className="space-y-4">
                <input
                    type="text"
                    defaultValue={post.title}
                    className="w-full p-2 border rounded"
                    name="title"
                    required
                />
                <textarea
                    defaultValue={post.content}
                    className="w-full p-2 border rounded h-40"
                    name="content"
                    required
                />
                <input type="hidden" name="id" value={id} /> {/* Hidden input for id */}
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                    Post
                </button>
            </form>
        </div>
    )
}
