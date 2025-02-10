'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function PostAct(formData: FormData) {
    const title = formData.get("title") as string
    const content = formData.get("content") as string

    await prisma.post.create({
        data: {
            title,
            content,
        }
    })

    revalidatePath("/post");
}



export async function DeletePost(id: string) {
    await prisma.post.delete({ where: { id } })
}

// export async function UpdatePost(formData: FormData, id: string) {
//     const title = formData.get("title") as string
//     const content = formData.get("content") as string

//     await prisma.post.update({

//         where: { id },

//         data: {
//             title,
//             content
//         },
//     })
// }

export async function UpdatePost1(formData: FormData, id: string) {
    try {
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        // Ensure title and content are provided
        if (!title || !content) {
            throw new Error('Title and content are required.');
        }

        // Perform the update
        const updatedPost = await prisma.post.update({
            where: { id },
            data: { title, content },
        });

        // Return updated post (optional)
        return updatedPost;

    } catch (error) {
        console.error("Error updating post:", error);
        throw new Error('Unable to update the post. Please try again later.');
    }
}