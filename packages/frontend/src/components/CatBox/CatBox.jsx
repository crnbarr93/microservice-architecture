import React, { useContext } from "react";
import { likeCat } from "../../api";
import DataContext from "../Provider/DataContext";

export default function CatBox({ cat, liked }) {
  const { refreshCats, refreshUsers, selectedUser } = useContext(DataContext);
  const onLike = React.useCallback(async () => {
    await likeCat(selectedUser, cat.id);
    refreshCats();
    refreshUsers();
  }, [cat, selectedUser, refreshUsers, refreshCats]);

  return (
    <div className="catbox__container">
      {cat.name}
      {!liked ? (
        <button onClick={onLike}>Like</button>
      ) : (
        <div className="catbox__liked">Liked</div>
      )}
    </div>
  );
}
