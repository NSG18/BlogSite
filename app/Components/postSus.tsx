

export default function PostSus() {
    return (
        <div className="min-h-screen max-w-xl mx-auto p-6">
            {/* Loading Skeleton */}
            <div className="space-y-6">
                {/* Title Placeholder */}
                <div className="h-6 bg-gray-300 animate-pulse rounded-md"></div>

                {/* Content Placeholder */}
                <div className="h-4 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="h-4 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="h-4 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
        </div>
    )
}