'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     host: "smtp-relay.brevo.com",
//     port: 587,
//     auth: {
//         user: process.env.BREVO_EMAIL,
//         pass: process.env.BREVO_PASSWORD
//     }
// })

export async function PostAct(formData: FormData): Promise<void> {
    const userId = formData.get("userId") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const imageUrl = formData.get("imageUrl") as string


    if (!userId || !title || !content || !imageUrl) {
        console.error("❌ Error: Missing required fields");
        throw new Error("All fields are required.");
    }

    try {
        const post = await prisma.post.create({
            data: { title, content, userId, imageUrl },
        });


        // const subscriber = await prisma.subscription.findMany()
        // const emails = subscriber.map(sub => sub.email)
        // console.log("SMTP Email:", process.env.BREVO_EMAIL);
        // console.log("SMTP Password Exists:", process.env.BREVO_PASSWORD ? "Yes" : "No");


        // if (emails.length > 0) {
        //     await transporter.sendMail({
        //         from: process.env.BREVO_EMAIL,
        //         to: emails,
        //         subject: `New Blog Post: ${post.title}`,
        //         text: `A new blog post has been published: "${post.title}". Read more on our website!`,
        //         html: `<h2>New Blog Post: ${post.title}</h2>
        //         <p>${post.content.substring(0, 100)}...</p>
        //         <p><a href="https://blog-site18.vercel.app/post/${post.id}">Read more</a></p>`,
        //     })
        //     console.log("Notification emails sent to subscribers.");
        // }


    } catch (error) {
        console.error("❌ Prisma Error:", error);
        throw new Error("Failed to create post.");
    }

    revalidatePath(`/`);
    revalidatePath(`/post`);
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
    revalidatePath("/post");
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
