import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { v4 } from "node-uuid";

import { AdminPanel } from "./components/AdminPanel";

import { getUsers, selectUsers } from "./adminSlice";

export function Admin() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="bg-green-500 p-5 grid grid-cols-5 w-full">
      <ul className="bg-neutral-900 bg-opacity-30 p-3 flex flex-col gap-y-1">
        <h5 className="font-bold text-center">Lista de Usuarios</h5>
        {users.map((user) => {
          return <li key={v4()}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
