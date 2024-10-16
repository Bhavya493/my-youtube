import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Gaming", "Latest", "News", "Sports", "Cooking", 'Live'];
  return (
    <div className="flex">
      {list.map((l) => (
        <Button name={l} />
      ))}
    </div>
  );
};

export default ButtonList;
