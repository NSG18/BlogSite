import Link from 'next/link'
import React from 'react'

export default function notFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg w-full">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Post Not Found</h1>
                <p className="text-lg text-gray-600 mb-6">We re sorry, the post you re looking for doesn t exist or has been removed.</p>
                <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.5 2.5L15 17zM7 17H2l1.5 2.5L7 17z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                </div>

                <Link href="/" className="text-blue-500 hover:text-blue-700 text-lg font-semibold">
                    Go Back to Home
                </Link>
            </div>
        </div>
    )
}
