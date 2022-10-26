import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
const Search = () => {
  const [img, setImg] = useState([]);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [btn, setBtn] = useState(true);

  let nav = useNavigate();
  useEffect(() => {
    if (text != "") {
      fetch(`https://dog.ceo/api/breed/${text}/images`)
        .then((res) => res.json())
        .then((d) => {
          console.log(d);
          if (d.status === "error") {
            setError(true);
            setImg([]);
          } else {
            setError(false);
            setImg(d.message);
          }
        });
    }
  }, [btn]);
  return (
    <div>
      <input
        placeholder="Enter a Breedname..."
        className="inpt"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button
        className="btn"
        onClick={() => {
          setBtn((pre) => !pre);
        }}
      >
        Search
      </button>

      <div id="imageCont">
        {error ? (
          <h1> Breedname not Found</h1>
        ) : (
          img.map((el, i) => (
            <img key={i} className="cardImage" src={el} alt=""></img>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
