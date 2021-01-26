import React, { useContext } from "react";
import CatBox from "../CatBox/CatBox";
import DataContext from "../Provider/DataContext";

export default function CatGallery() {
  const { selectedUser, cats, users } = useContext(DataContext);

  const user = React.useMemo(
    () => users.find((user) => user.id === selectedUser),
    [users, selectedUser]
  );

  if (!user) return <></>;
  console.log("USER", user);
  return (
    <div className="catgallery__container">
      <h1>{user.name}</h1>
      <div className="catgallery__grid">
        {cats.map((cat) => (
          <CatBox
            key={cat.id}
            cat={cat}
            liked={user.likedCats.includes(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}
