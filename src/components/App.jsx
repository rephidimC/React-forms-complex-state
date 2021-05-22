import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  var [iname, setIname] = useState();

  function submitted(event) {
    setIname(fname + " " + lname);
    event.preventDefault();
  }
  function firstName(event) {
    setFname(event.target.value);
  }
  function lastName(event) {
    setLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {iname}</h1>
      <form onSubmit={submitted}>
        <input onChange={firstName} name="fName" placeholder="First Name" />
        <input onChange={lastName} name="lName" placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
