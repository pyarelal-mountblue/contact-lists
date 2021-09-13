import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { list } from "./AddContact";
import React, { useContext } from "react";

const ViewContact = () => {
  let { contactList, removeContact, editContact } = useContext(list);
  let serialNumber = 0;

  contactList = contactList.sort((firstRow, secondRow) =>
    firstRow.name > secondRow.name ? 1 : secondRow.name > firstRow.name ? -1 : 0
  );

  return (
    <>
      <h1 className="text">
        <b>
          <u>CONTACT LISTS</u>
        </b>
      </h1>
      {contactList.length > 0 ? (
        <Table>
          <TableHead>
            <TableCell></TableCell>
            <TableCell>
              <h2>
                <b>Serial No.</b>
              </h2>
            </TableCell>
            <TableCell>
              <h2>
                <b>Name</b>
              </h2>
            </TableCell>
            <TableCell>
              <h2>
                <b>Mobile No.</b>
              </h2>
            </TableCell>
            <TableCell>
              <h2>
                <b>Email</b>
              </h2>
            </TableCell>
          </TableHead>
          <TableBody>
            {contactList.map((contact) => {
              const { id, name, number, email } = contact;
              serialNumber += 1;
              return (
                <>
                  <TableRow key={id} className="table">
                    <TableCell></TableCell>
                    <TableCell>{serialNumber}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{number}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>
                      <button
                        type="button"
                        className="btnYellow"
                        onClick={() => editContact(contact)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btnRed"
                        onClick={() => removeContact(id)}
                      >
                        Remove
                      </button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <h2 className="text">Contact list is empty Please add a new contact</h2>
      )}
    </>
  );
};

export default ViewContact;
