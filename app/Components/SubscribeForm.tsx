// "use client";
// import { useState } from "react";

// export default function SubscribeForm() {
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const res = await fetch("/api/subscribe", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email }),
//         });

//         const data = await res.json();
//         setMessage(data.message);
//     };

//     return (
//         <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl py-10 my-20 w-[80%] h-[200px] mx-auto text-center">
//             <h2 className="text-2xl py-5 text-white">Subscribe to our Blog</h2>
//             <form onSubmit={handleSubscribe} className="bg-white h-[50px] w-[340px] flex mx-auto rounded-md text-black ">
//                 <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="rounded-xl px-3 font-bold border-none focus:outline-none"
//                 />
//                 <button type="submit" className="p-2 bg-orange-400 text-white font-bold m-[6px] rounded-md">
//                     Subscribe
//                 </button>
//             </form>

//         </div>

//     );
// }

"use client";
import { useState } from "react";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Track request state

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter an email.");
            return;
        }

        setIsSubmitting(true); // Disable button while processing

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            setMessage(data.message);

            if (res.ok) {
                setEmail(""); // Clear email input after successful subscription
                setTimeout(() => setMessage(""), 3000); // Remove message after 3s
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false); // Re-enable button after request finishes
        }
    };

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl py-10 my-20 w-[80%] h-[210px] mx-auto text-center">
            <h2 className="text-2xl py-5 text-white">Subscribe to our Blog</h2>
            <form onSubmit={handleSubscribe} className="bg-white h-[50px] w-[380px] flex mx-auto rounded-md text-black px-4 ">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl px-3 font-bold border-none focus:outline-none flex-1"
                />
                <button type="submit" className={`px-2 text-white font-bold m-[6px] rounded-md ${isSubmitting ? "bg-gray-400 cursor-not-allowed p-2" : "bg-orange-400"
                    }`}
                >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
            </form>
            {message && <p className="text-white mt-2">{message}</p>}

        </div>
    );
}
