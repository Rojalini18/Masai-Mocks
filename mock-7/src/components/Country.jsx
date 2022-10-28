import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Country() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const [sortByPopulation, setSortByPopulation] = useState("");
  const [Region, setRegion] = useState("");
  console.log(Region);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, []);

  //sort
  const handleChange = (event) => {
    // console.log(event)
    setSortByPopulation(event.target.value);
    console.log(sortByPopulation);
    let sortedData = [];
    if (sortByPopulation == "desc") {
      sortedData = data.sort((a, b) => a.population - b.population);
    } else {
      sortedData = data.sort((a, b) => b.population - a.population);
    }
    setData(sortedData);
  };

  //filter
  const handleFilter = (event) => {
    //console.log(event)
    console.log(event.target.value);
    axios
      .get(`https://restcountries.com/v3.1/region/${event.target.value}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  return (
    <div>
      <div
        style={{
          gap: "0px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div>
          <h4>Filter By Region</h4>
          <select onChange={handleFilter} id="demo-simple-select">
            <option value="" selected="true">
              Select Country
            </option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
          </select>
        </div>
        <div>
          <h4>Sort by population</h4>
          <select
            value={sortByPopulation}
            onChange={handleChange}
            id="demo-simple-select"
          >
            <option value="" selected="true">
              Sort By Population
            </option>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
      </div>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,250px))",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          borderRadious: "20px",
          marginTop: "25px",
        }}
      >
        {data.map((item) => (
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              width: "200px",
              flexDirection: "column",
              padding: "10px",
              lineHeight: "0px",
            }}
            elevation={8}
            key={item.name.common}
          >
            <img src={item.flags.png} alt="" width="100%" />

            <h5> {item.name.common}</h5>
            <h6>Population: {item.population}</h6>
            <h6>Region: {item.region}</h6>
            <h6>Capital: {item.capital}</h6>
            <Button size="small" onClick={handleOpen} variant="contained">
              More details
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="div">
                  <h6>Sub-Region: {item.subregion}</h6>
                  <h6>Native-name: {item.name.common}</h6>
                  <h6 style={{ color: "black" }}>
                    Borders:{item.borders ? item.borders.join(" ") : ""}
                  </h6>
                </Typography>
              </Box>
            </Modal>
          </Paper>
        ))}
      </div>
    </div>
  );
}

export default Country;
