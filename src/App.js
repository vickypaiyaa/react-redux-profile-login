import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import ColorSelector from "./colorSelector";

const App = () => {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ColorSelector />
    </div>
  );
};

export default App;
