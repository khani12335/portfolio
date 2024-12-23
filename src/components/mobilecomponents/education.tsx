import React from 'react'

const Education = () => {
    const education = [
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
    <div className='w-full p-5'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl border-blue-500 font-semibold tracking-tight first:mt-0">
      Education
    </h2>
      <div className="divide-y-2 divide-blue-100">
          {/* degree */}
          {education.map((item, i) => (
            <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.field}
                </span>
                <span className="mt-1 text-blue-500 text-sm">{item.date}</span>
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
    </div>
  )
}

export default Education
