import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((r) => r.json())
      .then((dat) => {
        setData(Object.keys(dat.message));
        setLoading(false);
      });
  }, []);
  console.log(data);
  console.log(name);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="Dogname">
      {data?.map((e, i) => {
        return (
          <div
            key={i}
            className="card"
            onClick={() => {
              console.log(e);
              navigate(`/${e}`);
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
