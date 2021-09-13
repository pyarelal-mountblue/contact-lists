import React, { useState, useContext } from "react";
import { list } from "./AddContact";

const EditContact = () => {
  const { person, updateContact, setShow } = useContext(list);
  const [user, setUser] = useState(person);

  const hanldeChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name) {
      alert("Please Enter Name");
    } else if (!user.number) {
      alert("Please Enter Mobile Numer");
    } else if (isNaN(user.number)) {
      alert("Please Enter Valid Mobile Number");
    } else if (!user.email) {
      alert("Please Enter Email");
    } else {
      user.id = new Date().getTime().toString();
      updateContact(user);
    }
  };
  return (
    <div>
      <form className="form" action="">
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            placeholder="Enter Name..."
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={hanldeChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="number">Mobile No.: </label>
          <input
            placeholder="Enter Mobile Number..."
            type="text"
            name="number"
            id="number"
            value={user.number}
            onChange={hanldeChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            placeholder="Enter Email..."
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={hanldeChange}
          />
        </div>
        <button
          type="button"
          className="btnRed"
          onClick={() => setShow({ view: true, edit: false })}
        >
          Cancel
        </button>
        <button type="button" className="btnGreen" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditContact;
