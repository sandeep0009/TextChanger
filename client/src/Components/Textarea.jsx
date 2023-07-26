import React, { useState } from "react";
import Layout from "./Layout";

const Textarea = () => {
  const [text, settext] = useState("");
  const handlechange = (e) => {
    settext(e.target.value);
  };
  const handleclick = () => {
    const upper = text.toUpperCase();
    settext(upper);
  };
  const tolowercase = () => {
    const lower = text.toLowerCase();
    settext(lower);
  };
  const toremove = () => {
    const remove = text.substring(0, text.length - 1);
    settext(remove);
  };
  const tocopy = () => {
    navigator.clipboard.writeText(text);
  };
  const extraspace = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row justify-content-center">
            <div className="mb-3 mt-5 col-sm-6">
              <textarea
                onChange={handlechange}
                className="form-control"
                style={{ overflow: "hidden", resize: "none" }}
                id="textholder"
                placeholder="Enter your text"
                rows="3"
              ></textarea>
              <button
                type="button"
                className="btn btn-primary mt-4 mx-2 "
                onClick={handleclick}
              >
                toUpperCase
              </button>
              <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={tolowercase}
              >
                toLowerCase
              </button>
              <button
                type="button"
                className="btn btn-primary mt-4 mx-3"
                onClick={toremove}
              >
                toRemoveLastCharacter
              </button>
              <button
                type="button"
                className="btn btn-primary mt-4 mx-3"
                onClick={tocopy}
              >
                toCopyText
              </button>
              <button
                type="button"
                className="btn btn-primary mt-4 mx-3"
                onClick={extraspace}
              >
                toExtraSpace
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="mb-3 mt-5 col-sm-6">
              <textarea
                value={text}
                className="form-control"
                id="textholder"
                style={{ overflow: "hidden", resize: "none" }}
                placeholder="Your output text"
                rows="3"
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="mb-3 mt-5 col-sm-6 summary">
              <h2>Your text Summary</h2>
              <p>
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }{" "}
                words and {text.length} characters
              </p>
              <h2>Preview</h2>
              <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Textarea;
