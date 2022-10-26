import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./puppy.css";
const Puppy = () => {
  const { puppy } = useParams();
  console.log(puppy);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://dog.ceo/api/breed/${puppy}/images`)
      .then((r) => r.json())
      .then((dat) => {
        setData(dat.message);
        setLoading(false);
      });
  }, []);

  console.log(data);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="ImageCard">
      {data?.map((e, i) => {
        return (
          <div>
            <img className="image" src={e} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Puppy;
