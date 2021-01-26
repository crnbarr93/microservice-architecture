import { createContext } from "react";

const data = {
  users: [],
  cats: [],
  selectedUser: undefined,
  setSelectedUser: () => {},
  refreshUsers: async () => {},
  refreshCats: async () => {},
};

const DataContext = createContext(data);

export default DataContext;
