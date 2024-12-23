import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
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
    <Card  data-aos="zoom-in" className="h-[80vh] overflow-y-auto">
      <CardHeader>
        {/* my education here */}
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* degree */}
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.field}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.uniName}
                </h2>
                <p className="leading-relaxed">{item.details}</p> 
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
