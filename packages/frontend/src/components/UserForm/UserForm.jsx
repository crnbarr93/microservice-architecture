import React, { useContext } from "react";
import { saveUser } from "../../api";
import DataContext from "../Provider/DataContext";

const defaultUser = { name: "", email: "" };

export default function UserForm() {
  const { refreshUsers } = useContext(DataContext);
  const [user, setUser] = React.useState(defaultUser);

  const onSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      const saved = await saveUser(user);
      if (saved) {
        setUser(defaultUser);
        refreshUsers();
      }
    },
    [user, refreshUsers]
  );

  const onChange = React.useCallback((e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={user.name}
          name="name"
          id="name"
          onChange={onChange}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="name">Email</label>
        <input
          type="email"
          value={user.email}
          name="email"
          id="email"
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
