import React, { useState, useImperativeHandle } from "react";

const Button = React.forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <button
      style={{
        padding: "5px",
        backgroundColor: "blue",
        border: "none",
        borderRadius: "5px",
        color: "white",
      }}
    >
      {toggle ? "toggled" : "button"}
    </button>
  );
});

export default Button;
