import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section - Catchy Line */}
      <div className="w-1/2 flex items-center justify-center bg-blue-500 text-white">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Discover Your Digital Identity
        </h1>
      </div>

      {/* Right Section - Code Editor Style */}
      <div className="w-1/2 p-8 bg-gray-900 text-white">
        <div className="border-2 border-gray-700 rounded-lg bg-gray-800 p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">User Details</h2>
          <pre className="text-sm">
            {`{
  "ip": "192.168.1.1",
  "location": "New York, USA",
  "timezone": "GMT-5",
  "isp": "ISP Name"
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
