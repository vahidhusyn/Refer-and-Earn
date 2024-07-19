import axios from 'axios'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required();

const saveProduct = async e => {
    e.preventDefault()
    await axios.post(process.env.URL, {schema})
}


export default function ReferForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(saveProduct)} className="grid place-content-center gap-5">
      <div className="grid place-content-between">
        <input {...register("firstName")} className="p-2 text-stone-500"/>
        <p>{errors.firstName?.message}</p>
        <input {...register("lastName")} />
        <p>{errors.lastName?.message}</p>
      </div>

      <input {...register("email")} />
      <p>{errors.email?.message}</p>
      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
