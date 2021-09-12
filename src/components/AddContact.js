import React, { useState } from "react";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";
import { contactLists } from "./Data";

const AddContact = () => {
  const [person, setPerson] = useState({
    id: "",
    name: "",
    number: "",
    email: "",
  });
  const [show, setShow] = useState({ view: false, edit: false });
  const [contactList, setContactList] = useState(contactLists);

  const removeContact = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };

  const editContact = (currentContact) => {
    setShow({ view: false, edit: true });
    setPerson(currentContact);
  };

  const updateContact = (newContact) => {
    setContactList(
      contactList.map((contact) =>
        contact.id === person.id ? newContact : contact
      )
    );
    setPerson({ id: "", name: "", number: "", email: "" });
    setShow({ view: true, edit: false });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPerson({ id: "", name: "", number: "", email: "" });
  };

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
      setShow({ ...show, view: true });
      person.id = new Date().getTime().toString();
      setContactList([...contactList, person]);
      setPerson({ id: "", name: "", number: "", email: "" });
    }
  };

  return (
    <>
      <article>
        <h1 className="text">
          <b>
            <u>Please fill your details</u>
          </b>
        </h1>
        {show.edit ? (
          <EditContact
            currentContact={person}
            updateContact={updateContact}
            setShow={setShow}
          />
        ) : (
          <div>
            <form className="form" action="">
              <div className="form-control">
                <label htmlFor="name">Name: </label>
                <input
                  placeholder="Enter Name..."
                  type="text"
                  name="name"
                  id="name"
                  required
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
                  required
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
                  required
                  value={person.email}
                  onChange={hanldeChange}
                />
              </div>
              <button type="button" className="btnYellow" onClick={handleReset}>
                Reset
              </button>
              <button type="button" className="btnGreen" onClick={handleSubmit}>
                Add Contact
              </button>
            </form>
          </div>
        )}
        {show.view && (
          <ViewContact
            contactList={contactList}
            removeContact={removeContact}
            editContact={editContact}
          />
        )}
      </article>
    </>
  );
};

export default AddContact;
