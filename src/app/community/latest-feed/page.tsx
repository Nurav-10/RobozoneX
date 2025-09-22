"use client";
import Button from "@/app/ui/button";
import { FilterIcon, PlusCircle } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { PiNewspaperClipping } from "react-icons/pi";
import { posts } from "../components/dummyPostData";
import Post from "./components/post";

const page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full p-5">
      <div className="flex items-center justify-between sticky top-0 left-0 backdrop-blur-[2px] p-3 rounded-xl bg-zinc-800/20">
        <span className="text-xl flex-common">
          <PiNewspaperClipping size={20} />
          Latest Feeds
        </span>
        <div className="flex gap-5">
          <Button className="flex items-center pp gap-2 border common">
            <FilterIcon size={18} />
            Filters
          </Button>

          <Button
            onclick={() => router.push("/community/create-post")}
            className={`flex items-center gap-2 dark:bg-white/100 font-semibold dark:text-black`}
          >
            <PlusCircle size={18} />
            <span>New Post</span>
          </Button>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-5 overflow-auto">
        {
          posts.map((i,ind)=>{
            return(
              <Post key={i.id} data={i}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default page;
