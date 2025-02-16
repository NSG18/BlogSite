'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
// import { redirect } from "next/navigation";

// export async function PostAct(formData: FormData) {
//     const user = await currentUser(); // Get logged-in user
//     if (!user) {
//         throw new Error("Unauthorized"); // Prevent unauthenticated users
//     }


//     const title = formData.get("title") as string
//     const content = formData.get("content") as string

//     if (!title || !content) {
//         throw new Error("Title and content are required");
//     }

//     await prisma.post.create({
//         data: {
//             title,
//             content,
//             userId: user.id,
//         }
//     })

//     revalidatePath("/");
//     revalidatePath("/post"); // Refresh posts list
// }




export async function PostAct(formData: FormData): Promise<void> {
    const userId = formData.get("userId") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    console.log("Extracted Data ->", { userId, title, content });

    if (!userId || !title || !content) {
        console.error("❌ Error: Missing required fields");
        throw new Error("All fields are required.");
    }

    try {
        console.log("🟢 Attempting to create post in Prisma...");

        const post = await prisma.post.create({
            data: { title, content, userId },
        });

        console.log("✅ Post successfully created!", post);
    } catch (error) {
        console.error("❌ Prisma Error:", error);
        throw new Error("Failed to create post.");
    }
}



export async function DeletePost(id: string) {

    if (!id) throw new Error("Post ID is required");

    const post = await prisma.post.findUnique({
        where: { id },
    });

    if (!post) {
        throw new Error('Post not found');
    }
    await prisma.post.delete({ where: { id } })

    revalidatePath("/");
    revalidatePath(`/post`);
}

export async function UpdatePost1(formData: FormData, id: string) {
    try {
        console.log("UpdatePost1 called with id:", id);

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        if (!title || !content) {
            console.error("Missing title or content in UpdatePost1");
            throw new Error("Title and content are required.");
        }

        // Perform the update
        const updatedPost = await prisma.post.update({
            where: { id },
            data: { title, content },
        });

        console.log("Post updated in database:", updatedPost);

        // Revalidate cache to reflect changes
        revalidatePath(`/`);
        revalidatePath(`/posts`);
        revalidatePath(`/post/${id}`);

        return updatedPost;
    } catch (error) {
        console.error("Error in UpdatePost1:", error);
        throw new Error("Unable to update the post. Please try again later.");
    }
}
