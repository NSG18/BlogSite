import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    const user = await currentUser();
    if (!user) return new Response("Unauthorized", { status: 401 });

    const { title, content } = await req.json();

    const post = await prisma.post.create({
        data: { title, content, userId: user.id },
    });

    return new Response(JSON.stringify(post), { status: 201 });
}
