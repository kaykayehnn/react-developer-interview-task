import { useState } from "react";
import { BASE_URL } from "./Page1";

export default function Page2({ id }) {
  const [jobIncome, setJobIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  return (
    <div>
      <h1>Page 2 for user Id {id}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const payload = {
            jobIncome,
            otherIncome,
            expenses,
          };

          let isValid = true;
          Object.keys(payload).forEach((key) => {
            const value = payload[key];
            if (!(value === "" || value.match(/^[1-9]\d*$/))) {
              alert(`Invalid ${key}: ${value}`);
              isValid = false;
            }
          });

          if (!isValid) return;

          console.log(payload);

          fetch(`${BASE_URL}/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
          })
            .then((res) => res.json())
            .then((obj) => {
              console.log(obj);
            })
            .catch((err) => {
              console.log(err);
              alert("Thank you for signing up!");
            });
        }}
      >
        <div>
          <label htmlFor="jobIncome">Monthly job income</label>
          <input
            name="jobIncome"
            value={jobIncome}
            onChange={(e) => setJobIncome(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="otherIncome">Other Income</label>
          <input
            name="otherIncome"
            value={otherIncome}
            onChange={(e) => setOtherIncome(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="expenses">Expenses</label>
          <input
            name="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
        <button
          type="reset"
          onClick={() => {
            alert("Successfully cleared form");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
