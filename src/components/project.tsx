import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  let project=[
    {
      name:"clothes website",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione delectus repudiandae optio! Veritatis quod aspernatur asperiores nisi rem, fugit blanditiis, et perferendis alias temporibus molestiae, quibusdam repellat laborum pariatur",
      link:"#",
      img:"dani.jpeg"
    },
    {
      name:"clothes website",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione delectus repudiandae optio! Veritatis quod aspernatur asperiores nisi rem, fugit blanditiis, et perferendis alias temporibus molestiae, quibusdam repellat laborum pariatur",
      link:"#",
      img:"dani.jpeg"
    },
    {
      name:"clothes website",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione delectus repudiandae optio! Veritatis quod aspernatur asperiores nisi rem, fugit blanditiis, et perferendis alias temporibus molestiae, quibusdam repellat laborum pariatur",
      link:"#",
      img:"dani.jpeg"
    },
    {
      name:"clothes website",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione delectus repudiandae optio! Veritatis quod aspernatur asperiores nisi rem, fugit blanditiis, et perferendis alias temporibus molestiae, quibusdam repellat laborum pariatur",
      link:"#",
      img:"dani.jpeg"
    },
    {
      name:"clothes website",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione delectus repudiandae optio! Veritatis quod aspernatur asperiores nisi rem, fugit blanditiis, et perferendis alias temporibus molestiae, quibusdam repellat laborum pariatur",
      link:"#",
      img:"dani.jpeg"
    },
    {
      name:"clothes website",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione delectus repudiandae optio! Veritatis quod aspernatur asperiores nisi rem, fugit blanditiis, et perferendis alias temporibus molestiae, quibusdam repellat laborum pariatur",
      link:"#",
      img:"dani.jpeg"
    },
  ]
  return (
    <Card data-aos="zoom-in" className="h-[80vh] overflow-y-auto">
      <CardHeader>
        {/* my Project here */}
        <CardTitle>Project</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          {/* projects */}
          {project.map((item,i)=>(
          <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`/assest/${item.img}`}
                width={1000}
                height={1000}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                <h1 className="text-lg font-semibold tracking-tight py-2">
                  {item.name}
                </h1>
                <p className="leading-relaxed line-clamp-3">
                  {item.details}
                </p>
                <Link
                  href={"#"}
                  target="_blank"
                  className="mt-4 text-sm font-medium tracking-tight hover:text-blue-500 hover:underline"
                >
                  <p className="mt-3"> Veiw Project</p>
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
