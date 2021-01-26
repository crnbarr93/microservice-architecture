import React, { useContext } from "react";
import "isomorphic-unfetch";
import DataContext from "../Provider/DataContext";
import { deleteCat } from "../../api";

export default function CatTable() {
  const { cats, refreshCats } = useContext(DataContext);

  const onDelete = React.useCallback(
    async (userID) => {
      await deleteCat(userID);
      refreshCats();
    },
    [refreshCats]
  );

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Type</td>
          <td>Likes</td>
          <td />
        </tr>
      </thead>
      <tbody>
        {cats.map((cat) => (
          <tr key={cat.id}>
            <td>{cat.id}</td>
            <td>{cat.name}</td>
            <td>{cat.type}</td>
            <td>{cat.numberOfLikes}</td>
            <td className="td--delete" onClick={() => onDelete(cat.id)}>
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
