import { Bookmark, MessageSquare, Share2, Tag, ThumbsUp } from "lucide-react";
import React from "react";

type Comment = {
  id: number;
  username: string;
  content: string;
  likes: number;
  postTime: string;
};

type Data = {
  id: number;
  username: string;
  dateOfPost: string;
  mainContent: string;
  upvotes: number;
  tags: string[];
  comments: Comment[];
};
const Post = ({ data }: { data: Data }) => {
  console.log(data);
  return (
    <div className="p-3 border w-[60%] common flex-col gap-3 flex rounded-xl">
      <div className="w-full flex-rows p-2">
        <div className="profile w-fit flex-rows gap-3">
          <span className="flex flex-row justify-center items-center rounded-full bg-gradient-to-bl from-purple-600 to-emerald-500 border w-8 h-8">
            {data.username[0].toLocaleUpperCase()}
          </span>

          <div className="flex flex-col">
            <span>{data.username}</span>
            <span className="text-xs">
              {new Date(data.dateOfPost).toDateString()}
            </span>
          </div>
        </div>
        <span className="text-2xl px-2 hover:bg-amber-700/20 rounded-xl cursor-pointer hover:text-orange-400">
          ···
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-zinc-300">{data.mainContent}</span>

        <div className="flex flex-row justify-start items-center text-zinc-300 gap-2">
          {data.tags.slice(0, 3).map((tag, ind) => (
            <span
              key={ind}
              className="flex-common common border pp1 rounded-md bg-zinc-900 text-xs px-2 py-1 flex items-center gap-1"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}

          {data.tags.length > 3 && (
            <span className="flex-common common border pp1 rounded-md bg-zinc-900 text-xs px-2 py-1">
              +{data.tags.length - 3}
            </span>
          )}
        </div>
      </div>
      <div className="mt-10 flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <span className="flex-common cursor-pointer text-sm pp1 border common rounded-md hover:text-blue-400 hover:bg-blue-700/10 hover:border">
            <ThumbsUp size={12} />
            Upvotes
          </span>
          <span className="flex-common text-sm pp1 border common rounded-md hover:text-emerald-400 hover:bg-emerald-700/10 cursor-pointer">
            <MessageSquare size={12} />
            Comment
          </span>
          <span className="flex-common text-sm pp1 border common rounded-md hover:text-yellow-500  hover:bg-yellow-700/10 cursor-pointer">
            <Share2 size={12} />
            Share
          </span>
        </div>
        <span className="flex-common border rounded-md pp1 common cursor-pointer hover:text-pink-400 hover:bg-pink-700/10">
          <Bookmark size={12} />
          Save
        </span>
      </div>
    </div>
  );
};

export default Post;
