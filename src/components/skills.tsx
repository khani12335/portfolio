import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa6";
const Skills = () => {
  let education = [
    {
      uniName: "giaic",
      date: "01/12/2024",
      field: "agentic ai",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia possimus quos corrupti voluptatibus mollitia alias id, est ut eveniet nam cum. Officia omnis itaque, deleniti dolore obcaecati molestias.",
    },
    {
      uniName: "giaic",
      date: "01/12/2024",
      field: "rebotic agentic (ai)",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia possimus quos corrupti voluptatibus mollitia alias id, est ut eveniet nam cum. Officia omnis itaque, deleniti dolore obcaecati molestias.",
    },
    {
      uniName: "giaic",
      date: "01/12/2024",
      field: "information technology",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia possimus quos corrupti voluptatibus mollitia alias id, est ut eveniet nam cum. Officia omnis itaque, deleniti dolore obcaecati molestias.",
    },
    {
      uniName: "giaic",
      date: "01/12/2024",
      field: "meta verse 3.0",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia possimus quos corrupti voluptatibus mollitia alias id, est ut eveniet nam cum. Officia omnis itaque, deleniti dolore obcaecati molestias.",
    },
  ];
  return (
    <Card data-aos="zoom-in" className="h-[80vh] overflow-y-auto">
      <CardHeader>
        {/* my skills here */}
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          {/* html */}
          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500  text-xl flex-shrink-0">
                <FaCheck className="text-white font-bold" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight">HTML</h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-500">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-blue-500 text-right">100%</h3>
          </div>
          {/* css */}
          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500  text-xl flex-shrink-0">
                <FaCheck className="text-white font-bold" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight">CSS</h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-500">
              <div className="w-[88%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-blue-500 text-right">88%</h3>
          </div>
          {/* typescript */}
          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500  text-xl flex-shrink-0">
                <FaCheck className="text-white font-bold" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight">TYPESCRIPT</h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-500">
              <div className="w-[77%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-blue-500 text-right">77%</h3>
          </div>
          {/* python */}
          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500  text-xl flex-shrink-0">
                <FaCheck className="text-white font-bold" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight">PYTHON</h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-500">
              <div className="w-[66%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-blue-500 text-right">66%</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
