import React from "react";
import felt from "./assets/felt.png";

function App() {
  return (
    <>
      <div className="startScreen fixed top-0 left-0 w-screen h-screen bg-black z-50 opacity-80"></div>
      <div className="backgroundWrapper bg-gray-300 h-screen flex items-top justify-center">
        <div
          className="background mt-1 bg-green-700 h-90 w-95 border border-black border-25 rounded-large flex items-center justify-center shadow-2xl relative z-0"
          style={{
            backgroundImage: `url(${felt})`,
            backgroundRepeat: "repeat",
          }}
        >
          <div className="inner-border absolute top-6 left-6 right-6 bottom-6 border-4 border-yellow-500 rounded-large"></div>

          <div className="flop mb-32 m-3 h-40 w-41 border border-white rounded-xl border-2"></div>
          <div className="turn mb-32 m-3 h-40 w-14 border border-white rounded-xl border-2"></div>
          <div className="river mb-32 m-3 h-40 w-14 border border-white rounded-xl border-2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
