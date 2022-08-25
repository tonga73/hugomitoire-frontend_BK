import React from "react";
import { useForm } from "react-hook-form";

export function UserCreateForm({
  onSubmit,
  nameDefaultValue,
  emailDefaultValue,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log(watch(["name", "email"]));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-1.5 p-3 bg-neutral-600"
    >
      <h5 className="font-bold uppercase text-neutral-300">Crear Usuario</h5>
      <input
        type="text"
        placeholder="Nombre"
        defaultValue={nameDefaultValue}
        {...register("name")}
      />
      <input
        type="email"
        placeholder="Email"
        defaultValue={emailDefaultValue}
        {...register("email")}
      />
      <input type="submit" value="Crear" />
    </form>
  );
}
