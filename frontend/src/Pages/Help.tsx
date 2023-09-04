import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import axios from "axios";

export const Help = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {}

  return (
    <div >
      <div
        className=" m-auto text-3xl text-left p-6"
        style={{
          width: "80%",
          height: "70vh",
          background: "#FAF9F6",
          border:"5px solid gray",
          color: "white",
          overflowY: "scroll",
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
          borderRadius : "15px"
        }}
      >
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              width={"200px"}
              src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif"
              alt=""
            />
          </div>
        ) : (
          displayText
        )}
      </div>

      <div
        className="m-auto flex justify-evenly items-center"
        style={{ width: "80%" }}
      >
        <input
          type="text"
          placeholder="Enter Text Here..."
          style={{ width: "60%" }}
          className="border border-solid border-gray-500 m-6 text-2xl p-6 rounded-2xl"
          value={text}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className=" mt-3 group relative h-12 w-48 overflow-hidden rounded-2xl bg-black text-lg font-bold text-white"
        >
          Send
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 "></div>
        </button>
      </div>
    </div>
  );
};