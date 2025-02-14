'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export async function PostAct(formData: FormData) {
    const title = formData.get("title") as string
    const content = formData.get("content") as string

    await prisma.post.create({
        data: {
            title,
            content,
        }
    })

    revalidatePath("/");
    revalidatePath("/post"); // Refresh posts list
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
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        // Ensure title and content are provided
        if (!title || !content) {
            throw new Error('Title and content are required.');
        }

        // Perform the update
        await prisma.post.update({
            where: { id },
            data: { title, content },
        });


        revalidatePath("/"); // If posts are listed on the homepage
        revalidatePath("/posts"); // If posts are listed on /posts
        revalidatePath(`/post/${id}`);


        redirect(`/post/${id}`);

    } catch (error) {
        console.error("Error updating post:", error);
        throw new Error('Unable to update the post. Please try again later.');
    }
}