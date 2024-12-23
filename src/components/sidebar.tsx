import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaGithubSquare, FaLinkedin, FaYoutube, FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
export function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-3">
      {/* image */}
      <Image src={"/assest/dani.jpeg"} alt="profile" width={200} height={200} className="rounded-md"/>
      {/* name */}
      <div className="mt-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-1x uppercase">Danish </h1>
        <h1 className="text-md text-center font-semibold tracking-tight text-gray-600">
        <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
      </div>
      {/* social media account */}
      <div className="grid grid-cols-3 gap-2">
      {/* linkdin */}
      <div className="mt-4">
        <Link href="#" target="_blank" className=" text-gray-600 hover:text-[#0077B5]">
      <FaLinkedin className="text-3xl" />
        </Link>
      </div>
      {/* youtube */}
      <div className="mt-4">
        <Link href="#" target="_blank" className=" text-gray-600 hover:text-[#FF0000]">
      <FaYoutube className="text-3xl" />
        </Link>
      </div>
      {/* github */}
      <div className="mt-4">
        <Link href="#" target="_blank" className=" text-gray-600 hover:text-[#6e5494]">
      <FaGithubSquare className="text-3xl" />
        </Link>
      </div>
      </div>
      {/* download cv button */}
      <Link href={'/assest/cv/cv.pdf'} className="mt-4"target="_blank">
      <Button>
      <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
    </Button>
    </Link>
    </div>
  );
}