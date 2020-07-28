import React, { useState } from "react";
import "./Description.css";

const Description = ({ pictures, desImage, state, setState }) => {
  const [text, setText] = useState("");
  const [err, setErr] = useState(false);

  return (
    <div className="des-div">
      <div className="div-one">
        <img src={desImage.img} alt={desImage.img} />
        <h1>{desImage.description} !</h1>
      </div>
      <div className="div-two">
        <div className='flex'>
          <input
            type="text"
            placeholder="SHOW SOME LOVE"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setErr(false);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (text.length > 3) {
                let temp = [...desImage.comments, text];
                setState({
                  ...state,
                  desImage: {
                    ...desImage,
                    comments: temp,
                  },
                });
                setText("");
              } else {
                setErr(true);
              }
            }}
          >
            ADD COMMENT
          </button>
        </div>
        {err && (
          <p style={{ color: "red" }}>
            Input field must contain at least 3 letter.
          </p>
        )}
        {desImage.comments !== 0
          ? desImage.comments.map((comment) => {
              return (
                <React.Fragment key={comment.length +1}>
                  <h2>{comment} !</h2>
                  <hr></hr>
                </React.Fragment>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Description;
