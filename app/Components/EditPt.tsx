'use client'

import Link from "next/link"

export default function EditPt({ id }: { id: string }) {
    return (
        < button className=" px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600" >
            <Link href={`/updatePost?id=${id}`} >Update Post </Link>
        </button >
    )
}