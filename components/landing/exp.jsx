import React from "react";

export default function Experience() {
  return (
    <div className="flex flex-col items-center p-8 h-[70vh]">
      <h2 className="text-3xl font-bold text-gray-900">
        My <span className="text-orange-500">Work Experience</span>
      </h2>
      
      <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-lg">Cognizant, Mumbai</h3>
            <p className="text-gray-600">Sep 2016 - July 2020</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Sugee Pvt limited, Mumbai</h3>
            <p className="text-gray-600">Sep 2020 - July 2023</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Cinetstox, Mumbai</h3>
            <p className="text-gray-600">Sep 2023</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className="w-2 bg-gray-300 h-24 relative">
            <div className="w-6 h-6 bg-orange-500 rounded-full absolute -left-2 top-0" />
          </div>
          <div className="w-6 h-6 bg-gray-900 rounded-full" />
          <div className="w-2 bg-gray-300 h-24 relative">
            <div className="w-6 h-6 bg-orange-500 rounded-full absolute -left-2 bottom-0" />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-lg">Experience Designer</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">UI/UX Designer</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Lead UX Designer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
