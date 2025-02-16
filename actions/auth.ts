"use server"

import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/lib/prisma"

export async function saveUserToDb() {
    const user = await currentUser();
    if (!user) {
        throw new Error("Unauthorized: No user logged in");
    }

    try {
        await prisma.user.upsert({
            where: { id: user.id },
            update: {},
            create: {
                id: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: user.firstName || "Anonymous",
            },
        });
        console.log("✅ User saved to database:", user.id);
    } catch (error) {
        console.error("❌ Error saving user:", error);
    }
}