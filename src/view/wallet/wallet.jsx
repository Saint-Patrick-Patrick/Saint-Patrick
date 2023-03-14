import React, { useEffect, useState } from "react";
import "../../App.css";
import { authUser } from "../../features/apiPetitions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Wallet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
      authUser(localStorage.getItem('tkn'), dispatch);
  }, []);

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
