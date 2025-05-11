"use client";

import { useState } from "react";
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from "@heroicons/react/24/outline";
import { COLORS } from "@/constants/constants";

const ImageCard = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={`${COLORS.backgroundGradient} text-red-600  rounded-lg shadow-lg shadow-red-600/30 overflow-hidden`}>
      <img
        src="https://images.unsplash.com/photo-1583692717320-0c9661d49d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtd3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Post by Alex"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">Posted by Alex</p>
          <button
            type="button"
            className="text-gray-500 hover:text-red-500"
            title="Like"
          >
            <HeartIcon className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-gray-600">
          {readMore
            ? "This is the full caption of the post. It may contain more detailed text and additional context."
            : "This is the full caption of the post..."}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-blue-500 ml-1"
          >
            {readMore ? "Read less" : "Read more"}
          </button>
        </p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>23 Likes • 12 Comments</span>
          <div className="flex gap-3">
            <ChatBubbleLeftIcon className="h-5 w-5 cursor-pointer" />
            <ShareIcon className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
