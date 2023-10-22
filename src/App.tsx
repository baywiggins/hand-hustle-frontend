import React from "react";
import felt from "./assets/felt.png";
import "./App.css";
import Board from "./Board";
import CardInput from "./CardInput";

function App() {
  return (
    <>
      {/* <div className="startScreen fixed top-0 left-0 w-screen h-screen bg-black z-50 opacity-80"></div> */}
      <div className="backgroundWrapper bg-gray-300 h-screen flex items-top justify-center">
        <div
          className="background mt-1 bg-green-700 h-[90vh] w-[95vw] border border-black border-25 rounded-large flex items-center justify-center shadow-2xl relative z-0"
          style={{
            backgroundImage: `url(${felt})`,
            backgroundRepeat: "repeat",
          }}
        >
          <div className="inner-border absolute top-6 left-6 right-6 bottom-6 border-4 border-yellow-500 rounded-large"></div>

          <div className="board h-40 w-69 border border-white rounded-xl border-2 font-card flex items-center justify-center mb-20">
            <Board></Board>
          </div>
        </div>
        <div className="cardInputWrapper border-2 border-white fixed bottom-4 h-35 w-30 flex">
          <CardInput></CardInput>
        </div>
      </div>
    </>
  );
}

export default App;
