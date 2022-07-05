import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("0");

  const user = useSelector((state) => state.user.value);

  return (
    <div>
      {!user.name && (
        <div>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
        </div>
      )}

      {!user.name ? (
        <button onClick={() => dispatch(login({ name, email, age }))}>
          Login
        </button>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
};

export default Login;
