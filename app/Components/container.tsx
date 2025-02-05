export default function Container({ children } : { children : React.ReactNode }) {
    return (
        <div className="container mx-auto max-w-screen-lg px-4 pt-6 sm:px-6 lg:px-8 bg-white text-black ">
            {children}
        </div>
    )
}