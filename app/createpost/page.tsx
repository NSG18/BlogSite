// 'use client'

// import { useUser } from "@clerk/nextjs";
// import { PostAct } from "@/actions/action"
// import { useEffect, useState } from "react";
// import { saveUserToDb } from "@/actions/auth";
// import { CldUploadWidget } from "next-cloudinary";


// export default function CreatePost() {

//   const { user } = useUser();
//   const [imageUrl, setImageUrl] = useState("");




//   useEffect(() => {
//     if (user) {
//       saveUserToDb(); // Store user info in DB when logged in
//     }
//   }, [user]);


//   return (
//     <div className="min-h-screen max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
//       <h1 className="text-2xl font-bold mb-4 text-black">Create a New Blog Post</h1>
//       <form action={PostAct} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-full p-2 border rounded"
//           name="title"
//           required
//         />
//         <textarea
//           placeholder="Content"
//           className="w-full p-2 border rounded h-40"
//           name="content"
//           required
//         />

//         <CldUploadWidget
//           uploadPreset="blogsite18"
//           onSuccess={(result: any) => {
//             if (result.event === "success") {
//               setImageUrl(result.info.secure_url); // Store image URL in state
//             }
//           }}
//         >
//           {({ open }) => (
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-600 text-white rounded"
//               onClick={() => open()}
//             >
//               Upload an Image
//             </button>
//           )}
//         </CldUploadWidget>
//         {imageUrl && (
//           <div className="mt-2">
//             <img src={imageUrl} alt="Uploaded" className="w-32 h-32 object-cover rounded" />
//           </div>
//         )}

//         {user && <input type="hidden" name="userId" value={user.id} />}

//         <input type="hidden" name="imageUrl" value={imageUrl} />
//         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
//           Post
//         </button>
//       </form>
//     </div>

//   )
// }

"use client";

import { useUser } from "@clerk/nextjs";
import { PostAct } from "@/actions/action";
import { useEffect, useState, useRef } from "react";
import { saveUserToDb } from "@/actions/auth";
import { CldUploadWidget } from "next-cloudinary";

export default function CreatePost() {
  const { user } = useUser();
  const [imageUrl, setImageUrl] = useState(""); // Store uploaded image URL
  const [isUploading, setIsUploading] = useState(false); // Track upload status
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (user) {
      saveUserToDb(); // Store user info in DB when logged in
    }
  }, [user]);

  const handleUploadSuccess = (result: any) => {
    if (result.event === "success") {
      setImageUrl(result.info.secure_url); // Store image URL in state
      setIsUploading(false); // Stop upload indicator
    }
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4 text-black">Create a New Blog Post</h1>
      <form
        action={PostAct}
        onSubmit={(e) => {
          if (!imageUrl) {
            e.preventDefault(); // Prevent submission if no image
            alert("Please upload an image before submitting!");
          }
        }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          name="title"
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded h-40"
          name="content"
          required
        />

        {/* Cloudinary Upload Widget */}
        <CldUploadWidget
          uploadPreset="blogsite18"
          onSuccess={handleUploadSuccess} // Correct event handler

        >
          {({ open }) => (
            <button
              type="button"
              className={`px-4 py-2 ${isUploading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600"
                } text-white rounded`}
              onClick={() => {
                setIsUploading(true);
                open();
              }}
              disabled={isUploading} // Disable while uploading
            >
              {isUploading ? "Uploading..." : "Upload an Image"}
            </button>
          )}
        </CldUploadWidget>

        {/* Show Uploaded Image Preview */}
        {imageUrl && (
          <div className="mt-2">
            <img src={imageUrl} alt="Uploaded" className="w-32 h-32 object-cover rounded" />
          </div>
        )}

        {/* Hidden Inputs for Form Submission */}
        {user && <input type="hidden" name="userId" value={user.id} />}
        <input type="hidden" name="imageUrl" value={imageUrl} />

        {/* Disable submit button if image is not uploaded */}
        <button
          type="submit"
          className={`px-4 py-2 ${!imageUrl ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
            } text-white rounded`}
          disabled={!imageUrl}
        >
          Post
        </button>
      </form>
    </div>
  );
}
