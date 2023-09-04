import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

// import { ToastContainer, Zoom, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Interview = () => {
  const [text, setText] = useState<string>("");
  const [displayText, setDisplayText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitanswer = () => {
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    
    if (displayText !== "") {
      if (text.trim() !== "") {
        setDisplayText(
          (prevText) => prevText + (prevText !== "" ? "\n" : "") + text
        );
        setIsLoading(true);
        setText("");
        submitanswer();
      }
    } 
  };

  const clear = (event: MouseEvent<HTMLButtonElement>) => {
    setDisplayText("");

   

    setIsLoading(false);
  };

  useEffect(() => {
    getKey();
  }, []);

  const getKey = async () => {
    try {
      let response = await axios.get(
        ""
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const startinterview = () => {
    setIsLoading(true);

    let obj = {
      messages: [
        {
          role: "system",
          content:
            "I want you to act as a senior developer interviewer. At the beginning of the interview, ask me to select the tech stack [React, Java, Node]. You should ask only once to choose the tech stack. Take my technical interview for the chosen tech stack and share your feedback.Ask one question at a time..You will stop the interview when I tell you to stop using the phrase “stop the interview”.Afterward, provide me feedback when I ask you using the phrase, “share your feedback”.The feedback should be evaluated using the following rubrics:Subject Matter Expertise, Communication skills, Hiring criteria:Options are Reject, Waitlist, Hire, and Strong Hire,Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10.",
        },
        {
          role: "user",
          content: "",
        },
      ],
    };

    try {
      axios
        .post(
          "",
          obj
        )
        .then((res) => {
          setIsLoading(false);
         
          setDisplayText(res.data);
          console.log(res.data);
          setDisplayText(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginBottom: "50px",
        marginTop: "30px",
      }}
      className="mt-10 mb-16"
    >
      <div
        style={{
          background: "#FAF9F6",
          border:"5px solid gray"
        }}
        className="ml-5 pt-3 text-xl font-extrabold mt-3 mb-3 rounded-md pl-10 text-gray"
      >
        <pre
          style={{
            height: "500px",
            overflowY: "scroll",
            lineHeight: "35px",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            textAlign: "left",
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
        </pre>
      </div>
      <div>
        {displayText === "" ? null : (
          <input
            style={{ width: "97%" }}
            type="text"
            value={text}
            className="border-4 border-black-500 px-8  py-6 rounded-md font-semibold text-xl"
            placeholder="Enter answer here"
            onChange={handleChange}
          />
        )}
        <div className="flex flex-wrap">
          <button
            style={{
              position: "relative",
              backgroundImage:
                displayText === ""
                  ? "black"
                  : "black",
            }}
            onClick={startinterview}
            disabled={displayText !== "" ? true : false}
            className="  text-black font-bold px-16 py-3 mt-3 ml-5 rounded"
          >
            {displayText === "" ? "START INTERVIEW" : "IN PROGRESS"}
            {displayText !== "" && (
              <img
                style={{
                  width: "50px",
                  mixBlendMode: "multiply",
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                }}
                src="http://cdn.lowgif.com/full/ffda60e00be16a45-animated-progress-bar-gif-free-download-www-imgkid-com.gif"
                alt="progress_img"
              />
            )}
          </button>
          <button
            onClick={handleSubmit}
            className="bg-white-800 hover:bg-gray-700 hover:text-white  text-black font-semibold px-16 py-3 mt-3 ml-10 rounded"
          >
            SUBMIT
          </button>
          {displayText === "" ? null : (
            <button
              onClick={clear}
              className="bg-black  hover:bg-gray-700  text-white font-bold px-16 py-3 mt-3 mx-3 ml-10 rounded"
            >
              END INTERVIEW
            </button>
          )}
        </div>
      </div>
     
    </div>
  );
};

export default Interview;
