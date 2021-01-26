import React, { useContext } from "react";
import "isomorphic-unfetch";
import DataContext from "../Provider/DataContext";
import { deleteUser } from "../../api";

export default function UserTable() {
  const { users, refreshUsers, setSelectedUser } = useContext(DataContext);

  const onDelete = React.useCallback(
    async (userID) => {
      await deleteUser(userID);
      refreshUsers();
    },
    [refreshUsers]
  );

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => setSelectedUser(user.id)}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td
              className="td--delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(user.id);
              }}
            >
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
