import React from "react";
import { MdClear, MdEdit } from "react-icons/md";

import "./css/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{props.expense.charge}</span>
          <span className="amount">{props.expense.amount}</span>
        </div>
        <div>
          <button className="edit-btn" onClick={() => console.log("f")}>
            <MdEdit />
          </button>
          <button
            className="clear-btn"
            onClick={() => props.handleDelete(props.expense.id)}
          >
            <MdClear />
          </button>
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
