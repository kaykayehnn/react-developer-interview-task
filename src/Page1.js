import { useState } from "react";

export const BASE_URL = "https://api.example.com/";

function Page1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <h1>Page 1</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const payload = {
            firstName,
            lastName,
            address,
            city,
            state,
            zip,
            phone,
            email,
          };

          if (!(zip === "" || zip.match(/^\d{1,5}$/g))) {
            alert(`ZIP ${zip} is invalid`);
          }

          Object.keys(payload).forEach((k) => {
            if (payload[k] === "") {
              delete payload[k];
            }
          });

          console.log(payload);

          fetch(`${BASE_URL}/users`, {
            method: "POST",
            body: JSON.stringify(payload),
          })
            .then((res) => res.json())
            .then((obj) => {
              console.log(obj);
            })
            .catch((err) => {
              console.log(err);
              window.location.hash = `/page2/${"0425.........67"}`;
              return {
                id: "0425.........67",
              };
            });
        }}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="zip">Zip</label>
          <input
            // type="number"
            name="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <button type="submit">Continue</button>
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

export default Page1;
