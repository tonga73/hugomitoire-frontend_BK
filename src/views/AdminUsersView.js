import React from "react";
import { useDispatch } from "react-redux";

import { UserCreateForm } from "../features/user/forms/UserCreateForm";

import { createUser } from "../features/user/userSlice";

export function AdminUserView() {
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(createUser(data));
  return (
    <div>
      AdminUserView
      <UserCreateForm onSubmit={onSubmit} />
    </div>
  );
}
