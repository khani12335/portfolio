import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {
  FaGithubSquare,
  FaLinkedin,
  FaYoutube,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import Link from "next/link";

const MobileCard = () => {
  return (
    <div data-aos="zoom-in" className=" flex flex-col items-center justify-center h-[90vh]">
      <div className="card glass bg-blue-200 w-80 p-5 flex flex-col justify-center items-center">
        {/* image */}
        <Image
          src={"/assest/dani.jpeg"}
          alt="profile"
          width={200}
          height={200}
          className="rounded-md mx-auto"
        />
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold text-center tracking-tight lg:text-1x uppercase">
            Danish
          </h1>
          <h2 className="text-md text-center font-semibold text-blue-600">
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          {/* social media account */}
          <div className="grid grid-cols-3 gap-2">
            {/* linkdin */}
            <div className="mt-4">
              <Link
                href="#"
                target="_blank"
                className=" text-gray-600 hover:text-[#0077B5]"
              >
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
            {/* youtube */}
            <div className="mt-4">
              <Link
                href="#"
                target="_blank"
                className=" text-gray-600 hover:text-[#FF0000]"
              >
                <FaYoutube className="text-3xl" />
              </Link>
            </div>
            {/* github */}
            <div className="mt-4">
              <Link
                href="#"
                target="_blank"
                className=" text-gray-600 hover:text-[#6e5494]"
              >
                <FaGithubSquare className="text-3xl" />
              </Link>
            </div>
          </div>
          {/* download cv button */}
      <Link href={'/assest/cv/cv.pdf'} className="mt-4 w-full"target="_blank">
      <Button>
      <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
    </Button>
    </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
