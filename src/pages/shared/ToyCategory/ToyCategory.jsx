import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../ToySection/ToyCard";
import Category from "../Category/Category";

const ToyCategory = () => {
  const toys = useLoaderData();
  return (
    <div className="mx-auto px-2 max-w-screen-xl grid grid-cols-12 gap-4">
      <Category />
      <div className="col-span-9 grid grid-cols-2 gap-4">
        {toys.map((toy, index) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default ToyCategory;
