import React from "react";
import { generateToken, setUserToLocalStorage } from "../../utils/user";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userRegistrationSchema } from "../../Schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userRegistrationSchema),
  });

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const token = generateToken();
    setUserToLocalStorage({ email, password, token })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          {...register("name")}
          type="text"
          id="name"
          name="name"
          required
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="lastName">Last Name:</label>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          name="lastName"
          required
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <label htmlFor="email">Email:</label>
        <input {...register("email")} id="email" name="email" />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password:</label>
        <input
          {...register("password")}
          type="password"
          id="password"
          name="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
