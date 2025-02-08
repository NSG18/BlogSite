// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function GET(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const { id } = await params;
//         const post = await prisma.post.findUnique({
//             where: { id },
//         });

//         if (!post) {
//             return NextResponse.json({ error: "Post not found..." }, { status: 404 });
//         }

//         return NextResponse.json(post, { status: 200 });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
//     }
// }


import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    try {
        const post = await prisma.post.findUnique({
            where: { id },
        });

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
