import React, { useEffect, useState } from "react";
import "../../App.css";
import {  useSelector } from "react-redux";

function Wallet() {
  const user = useSelector((state) => state.user.user);


  return (
    <div>
      {user ? (
        <div>
          {user?.firstname}
          {user?.lastname}
          {user?.email}
          {user?.wallet}
        </div>
      ) : null}
      {console.log(user)}
    </div>
  );
}

export default Wallet;
