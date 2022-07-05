import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  if (!user.name) {
    return;
  }
  return (
    <div style={{ color: theme }}>
      <h2>My Profile</h2>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
};

export default Profile;
