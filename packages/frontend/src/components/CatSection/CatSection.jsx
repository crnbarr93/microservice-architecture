import React from "react";
import CatForm from "../CatForm/CatForm";
import CatTable from "../CatTable/CatTable";

export default function CatSection() {
  return (
    <div className="catsection__container">
      <CatTable />
      <CatForm />
    </div>
  );
}
