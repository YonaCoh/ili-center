import React, { Component } from "react";

import classes from "../assets/DynamicTable.module.css";
//   https://codepen.io/pablorgarcia/pen/ARdVgx

const TableUI = (props) => {
  const { method } = props;
  return (
    <table className={classes.container} dir="rtl">
      <thead>
        <tr>
          <th></th>
          <th>
            <h1>סט 1</h1>
          </th>
          <th>
            <h1>סט 2</h1>
          </th>
          <th>
            <h1>סט 3</h1>
          </th>
        </tr>
      </thead>
      <tbody dir="rtl" lang="he">
        <tr dir="rtl" lang="he">
          <td dir="rtl" lang="he">
            משקלים
          </td>
          <td onClick={method} id="weight-1"></td>
          <td onClick={method} id="weight-2"></td>
          <td onClick={method} id="weight-3"></td>
        </tr>
        <tr>
          <td dir="rtl" lang="he">
            חזרות
          </td>
          <td onClick={method} id="repetitions-1"></td>
          <td onClick={method} id="repetitions-2"></td>
          <td onClick={method} id="repetitions-3"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableUI;
