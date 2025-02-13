"use client"
import { DeletePost } from "@/actions/action";
import { useTransition } from "react";
import { useRouter } from "next/navigation";


export default function DeletePt({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    if (!id) {
        console.log("Id not get")
    }

    return (

        <button onClick={() => startTransition(async () => {
            await DeletePost(id);
            router.refresh()
        })}
            className={`px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 ${isPending ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
            disabled={isPending}
        >Delete</button>

    )
}