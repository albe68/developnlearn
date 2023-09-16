import React from "react";
import "./video.mp4";
// This imports the functional component from the previous sample.
import VideoJS from "./App";
import videojs from "video.js";
import { Link } from 'react-router-dom';

const content = [
  {
    name: ". Install and Configure the OpenAI SDK in a Node.js Project",
    href: "#",
    current: true,
  },
  {
    name: "Initialize Prisma in a TypeScript Node Project",
    href: "/courses",
    current: false,
  },
  { name: "Alumini", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
];

export default function WatchLessonIndex() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src:
          "https://res.cloudinary.com/dzr02xhra/video/upload/v1691555299/developnlearn/hzbtqqscifbtrrsmil3x.mp4",
        type: "video/mp4",
      },
    ],
    aspectRatio: "16:9",
    className: "vjs-layout-tiny",
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="flex">
      {/* Video Player */}
      <div className="w-2/3 p-6 ml-16">
        <VideoJS className="w-14 bg-deep-orange-900" options={videoJsOptions} onReady={handlePlayerReady} />
      </div>

      {/* Course Content */}
      <div className=" w-96 ml-4 rounded-md mt-6 p-4">
        <h1>Course Content</h1>
        <p className="text-xs">53m • 11 lessons</p>
        <div className="w-full h-96 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {content.map((contents) => (
        <Link to={contents.href} >

            <div
              key={contents.name}
              className="border-b border-gray-200 button-container flex items-center py-2"
            >
              <button
                type="button"
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  src="https://egghead.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdg3gyk0gu%2Fimage%2Fupload%2Fw_72%2Ch_72%2Fv1683914713%2Ftags%2Fprisma.png&w=32&q=75"
                  alt=""
                />
                <span className="hover:text-blue-700">
                {contents.name}

                </span>
              </button>
              <div className="text-xs text-gray-700 dark:text-gray-500 ml-4">
                30min 4s
              </div>
            </div>
        </Link>

          ))}
        </div>
      </div>
    </div>
  );
}
