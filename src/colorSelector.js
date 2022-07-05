import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/themeSlice";

const ColorSelector = () => {
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      ></input>
      <button onClick={(e) => dispatch(changeColor(color))}>
        Change color
      </button>
    </div>
  );
};

export default ColorSelector;
