import React from "react";

export default function BareButton() {
  //   const handleClick = (value) => {
  //     console.log(value);
  //   };

  const handleClick = (value) => () => {
    console.log(value);
  };
  return (
    <div>
      <button onClick={handleClick("Add")}>Add</button>
      <button onClick={handleClick("Edit")}>Edit</button>
      <button onClick={handleClick("Delete")}>Delete</button>
    </div>
  );
}
