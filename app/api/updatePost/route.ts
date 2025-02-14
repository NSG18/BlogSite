

import { UpdatePost1 } from "@/actions/action";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData(); // Get form data

        console.log("Received form data:", formData);

        const id = formData.get("id") as string;
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        console.log("id:", id, "title:", title, "content:", content);

        // Validate data
        if (!id || !title || !content) {
            console.error("Validation failed: Missing required fields");
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const updatedPost = await UpdatePost1(formData, id);
        console.log("Updated post:", updatedPost);

        return NextResponse.redirect(new URL(`/post/${id}`, req.url));

    } catch (error) {
        console.error("Error updating post:", error);

        return NextResponse.json({
            error: `Failed to update post: ${error instanceof Error ? error.message : String(error)}`,
        }, { status: 500 });
    }
}

