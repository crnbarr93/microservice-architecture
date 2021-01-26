import React, { useEffect, useCallback } from "react";
import { fetchCats, fetchUsers } from "../../api";
import DataContext from "./DataContext";

export default function Provider({ children }) {
  const [user, setUser] = React.useState();
  const [users, setUsers] = React.useState([]);
  const [cats, setCats] = React.useState([]);

  const refreshUsers = useCallback(async () => {
    const users = await fetchUsers();
    setUsers(users);
  }, []);

  const refreshCats = useCallback(async () => {
    const cats = await fetchCats();
    setCats(cats);
  }, []);

  useEffect(() => {
    refreshCats();
    refreshUsers();
  }, [refreshCats, refreshUsers]);

  return (
    <DataContext.Provider
      value={{
        users,
        cats,
        setSelectedUser: setUser,
        selectedUser: user,
        refreshCats,
        refreshUsers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
