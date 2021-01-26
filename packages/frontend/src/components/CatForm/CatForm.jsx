import React, { useContext } from "react";
import { saveCat } from "../../api";
import DataContext from "../Provider/DataContext";

const defaultCat = { name: "", type: "" };

export default function CatForm() {
  const { refreshCats } = useContext(DataContext);
  const [cat, setCat] = React.useState(defaultCat);

  const onSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      const saved = await saveCat(cat);
      if (saved) {
        setCat(defaultCat);
        refreshCats();
      }
    },
    [cat, refreshCats]
  );

  const onChange = React.useCallback((e) => {
    const { name, value } = e.target;

    setCat((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={cat.name}
          name="name"
          id="name"
          onChange={onChange}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="type">Type</label>
        <input
          type="text"
          value={cat.type}
          name="type"
          id="type"
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
