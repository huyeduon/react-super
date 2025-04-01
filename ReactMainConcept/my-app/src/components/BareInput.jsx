import React from "react";

export default function BareInput(props) {
  const { type: typeInput, ...rest } = props;
  return <input {...rest} type={typeInput} />;
}
