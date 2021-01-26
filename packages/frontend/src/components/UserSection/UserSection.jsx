import React from "react";
import UserForm from "../UserForm/UserForm";
import UserTable from "../UserTable/UserTable";

export default function UserSection() {
  return (
    <div className="usersection__container">
      <UserTable />
      <UserForm />
    </div>
  );
}
