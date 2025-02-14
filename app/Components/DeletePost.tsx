"use client"
import { DeletePost } from "@/actions/action";
import { useTransition } from "react";


export default function DeletePt({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition();

    if (!id) {
        console.log("Id not get")
    }

    return (

        <button onClick={() => startTransition(async () => {
            try {
                await DeletePost(id);
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        })}
            className={`px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 ${isPending ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
            disabled={isPending}
        >{isPending ? "Deleting..." : "Delete"}</button>

    )
}