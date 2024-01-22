import { Component, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      charge: "콜라",
      amount: 100,
    },
    {
      id: 2,
      charge: "사이다",
      amount: 100,
    },
    {
      id: 3,
      charge: "환타",
      amount: 100,
    },
  ]);

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((e) => e.id !== id);
    setExpenses(newExpenses);
  };

  return (
    <main className="main-container">
      <div className="sub-container">
        <h1>장바구니</h1>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {}
          <ExpenseForm />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* 리스트 */}
          <ExpenseList initialExpenses={expenses} handleDelete={handleDelete} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "1rem",
          }}
        >
          <p style={{ fontSize: "2rem" }}>총합계 :</p>
        </div>
      </div>
    </main>
  );
};

export default App;
