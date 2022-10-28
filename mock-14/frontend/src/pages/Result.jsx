import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  styled,
} from "@mui/material";

const MyTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const Table_Head = styled(TableRow)`
  background: rgb(96, 201, 96);
  & > th {
    color: #ffff;
    font-size: 20px;
  }
`;
const Table_Body = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
const Result = () => {
  let [main, SetMain] = useState([]);
  async function showData() {
    try {
      let res = await fetch(`https://mock-14.herokuapp.com/web/info`);
      let data = await res.json();
      SetMain(data);

      console.log(main);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    showData();
  }, []);
  console.log("after", main);
  const data = useSelector((state) => state.data);
  console.log(data, "result");
  return (
    <>
      <MyTable>
        <TableHead>
          <Table_Head>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Difficulty</TableCell>
            <TableCell>No of Questions</TableCell>
            <TableCell>Correct answers count</TableCell>
            <TableCell>Incorrect answers count</TableCell>
            <TableCell>Total score </TableCell>
            <TableCell>Percentage</TableCell>
          </Table_Head>
        </TableHead>
        {main &&
          main.map((el) => {
            return (
              <TableBody key={el.id}>
                <TableCell>{el.id}</TableCell>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.category}</TableCell>
                <TableCell>{el.difficulty}</TableCell>
                <TableCell>{el.noofquestion}</TableCell>
                <TableCell>{el.correct}</TableCell>
                <TableCell>{el.incorrect}</TableCell>
                <TableCell>
                  {el.correct} / {el.correct + el.incorrect}
                </TableCell>
                <TableCell>
                  {(el.correct / (el.correct + el.incorrect)) * 100}%
                </TableCell>
              </TableBody>
            );
          })}
      </MyTable>
    </>
  );
};

export default Result;
