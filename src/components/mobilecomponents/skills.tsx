import React from 'react'
import { FaCheck } from "react-icons/fa6";
const Skills = () => {
  return (
    <div className='w-full p-5'>
       <h2 className="scroll-m-20 border-b pb-2 text-3xl border-blue-500 font-semibold tracking-tight first:mt-0">
      Skills
    </h2>
      <div className="mt-3 flex flex-wrap -m-4">
          {/* html */}
          <div className="p-5 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 flex-shrink-0">
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
    </div>
  )
}

export default Skills
