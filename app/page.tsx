import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import TimeAgo from "./Components/timestamp";
import SubscribeForm from "./Components/SubscribeForm";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true, // Fetch the author's name
        },
      },
    },
  });

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* text in blue box */}

      <div className="mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 h-[200px] w-full text-center flex flex-col justify-center">
        <h1 className="text-[48px] font-bold text-white">NerdNest</h1>
        <h3 className="text-white">Learn From the Community, Share Your Expertise.</h3>
      </div>

      {/* Popular blogs display from database have to add limit on displaying blogs */}

      <div className="w-full text-center flex-grow">

        <div className="mx-auto w-full pt-[80px]">
          <h1 className="text-[#47484ac4] text-4xl py-10">Popular Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-5 w-[80%] mx-auto">
            {posts.map((post) => (
              <div
                key={post.id}
                className="text-black rounded-lg shadow-md text-left border-black border-2 h-[250px] w-[290px] overflow-hidden"
              >

                <div className="w-full h-[170px]">
                  <Image
                    src={post.imageUrl || "/placeholder.jpg"}
                    alt="Picture of the author"
                    width={290}
                    height={150}
                    className="w-full h-full object-cover p-2 rounded-lg"
                  />
                </div>

                <div className="p-2">
                  <Link href={`/post/${post.id}`} className="font-bold m-2">
                    {post.title}
                  </Link>
                  <div className="flex justify-between mx-2">
                    <span className="text-sm"> by {post.user.name}</span>
                    <span className="text-sm"><TimeAgo date={new Date(post.createdAt)} /> </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* self intro section  */}

      <div className="w-[70%]   rounded-[14px] overflow-hidden flex mx-auto h-[350px] my-24 ralative">
        <div className="w-[68%] bg-[#f9fbfc]  text-black font-bold">
          <div className="w-[75%]  pt-[90px] pl-10">
            <h1 className="text-3xl px-8 py-3 text-[#1a2932] ">Why i started NerdNest</h1>
            <p className="px-8 text-sm py-2 text-[#36454F]">I &apos; m Nakul, founder of NerdNest—a platform for developers to quickly read and share blogs with ease, without complex setups.</p>
          </div>
          <div className="flex items-center gap-3 px-16 pt-6 pb-3">
            <div className="w-14 h-14 rounded-full bg-red-500"></div>
            <div className="text-[#1a2932]">
              <h5 className="text-sm font-semibold">Nakul</h5>
              <h5 className="text-xs text-gray-500">Feb 19, 2025</h5>
            </div>
          </div>
        </div>
        <div className="w-[32%] bg-[#fbcd54] flex items-center justify-center text-white font-bold"></div>
        <Image
          src="/selfintroimg1.jpg"
          width={400}
          height={400}
          alt="laptop img with chart "
          className="absolute right-[300px]  "
        />
      </div>

      {/* get notified in blue box */}

      {/* <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl py-10 my-20 w-[80%] h-[200px] mx-auto text-center">
        <h1 className="text-2xl py-5 text-white">Get notified about our latest blogs published</h1>
        <div className="bg-white h-[50px] w-[320px] flex mx-auto rounded-md text-black ">
          <input type="email" className="rounded-xl px-3 font-bold border-none focus:outline-none" placeholder="your email Address... " />
          <button className="p-2 bg-orange-400 text-white font-bold m-[6px] rounded-md">Join us</button>
        </div>
      </div> */}

      {/* <Subscription /> */}
      <SubscribeForm />

    </div>
  );
}
