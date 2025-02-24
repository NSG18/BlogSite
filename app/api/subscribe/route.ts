import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse JSON body

        if (!body?.email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const existingSub = await prisma.subscription.findUnique({
            where: { email: body.email },
        });

        if (existingSub) {
            return NextResponse.json({ error: "Email already subscribed" }, { status: 400 });
        }

        const sub = await prisma.subscription.create({
            data: { email: body.email },
        });

        console.log("Email stored in database:", sub);

        return NextResponse.json({ message: "Subscribed successfully!", sub });
    } catch (error: any) {
        console.error("Error:", error);

        if (error.code === "P2002") {
            return NextResponse.json({ error: "Email already subscribed" }, { status: 400 });
        }

        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
