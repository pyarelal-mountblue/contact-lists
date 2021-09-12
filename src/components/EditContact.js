import React, { useState, useEffect } from "react";

const EditContact = (props) => {
  const { currentContact, updateContact, setShow } = props;
  const [person, setPerson] = useState(currentContact);

  useEffect(() => {
    setPerson(currentContact);
  }, [currentContact]);

  const hanldeChange = (event) => {
    const { name, value } = event.target;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!person.name) {
      alert("Please Enter Name");
    } else if (!person.number) {
      alert("Please Enter Mobile Numer");
    } else if (isNaN(person.number)) {
      alert("Please Enter Valid Mobile Number");
    } else if (!person.email) {
      alert("Please Enter Email");
    } else {
      person.id = new Date().getTime().toString();
      updateContact(person);
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
            value={person.name}
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
            value={person.number}
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
            value={person.email}
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
