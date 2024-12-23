import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  let experience = [
    {
      compName: "microsoft window",
      datestrat: "01/12/2024",
      dateEnd: "01/12/2025",
      position: "front end developer",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia possimus quos corrupti voluptatibus mollitia alias id, est ut eveniet nam cum. Officia omnis itaque, deleniti dolore obcaecati molestias.",
      work:["a","b","c"]
      },
    {
      compName: "microsoft window",
      datestrat: "01/12/2024",
      dateEnd: "01/12/2025",
      position: "front end developer",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia possimus quos corrupti voluptatibus mollitia alias id, est ut eveniet nam cum. Officia omnis itaque, deleniti dolore obcaecati molestias.",
      work:["a","b","c"]
      },
    {
      compName: "microsoft window",
      datestrat: "01/12/2024",
      dateEnd: "01/12/2025",
      position: "front end developer",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia possimus quos corrupti voluptatibus mollitia alias id, est ut eveniet nam cum. Officia omnis itaque, deleniti dolore obcaecati molestias.",
      work:["a","b","c"]
      },
  ];
  return (
    <Card  data-aos="zoom-in" className="h-[80vh] overflow-y-auto">
      <CardHeader>
        {/* my experince here */}
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* */}
          {experience.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.position}
                </span>
              <span className="mt-1 text-gray-500 text-sm">{`${item.datestrat} - ${item.dateEnd}`}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.compName}
                </h2>
                <ul className="ml-4 list-disc mr-1">
                  {item.work.map((item,i)=>(
                    <li key={i}>{item}</li>
                  ))}
                </ul> 
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
