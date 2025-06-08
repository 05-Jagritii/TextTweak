import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase !", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase !", "success");
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text area is cleared !", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra space removed !", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
            rows="8"
            
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lower Case
        </button>

        <button className="btn btn-primary mx-2" onClick={handleSpeak}>
          Speak Text
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={() => window.speechSynthesis.cancel()}
        >
          Stop Speaking
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>

      <div class="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.trim().length === 0
            ? "0 words & 0 characters"
            : `${text.trim().split(/\s+/).length} words & ${
                text.replace(/\s/g, "").length
              } characters`}
        </p>

        <p>
          {(
            0.008 *
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word !== "").length
          ).toFixed(2)}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
