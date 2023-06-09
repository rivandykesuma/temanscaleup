import React from "react";

interface Props {
  text: string;
  className?: string;
}

function ButtonComponent(prop: Props) {
  return (
    <>
      <button className={`rounded-full shadow-lg border-2 ${prop.className}`}>
        {prop.text}
      </button>
    </>
  );
}

export default ButtonComponent;
