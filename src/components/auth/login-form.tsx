"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import * as Yup from "yup";
import { Button, GoogleIcon, Input, MicrosoftIcon } from "../ui";
import { type LoginForm as TLoginForm } from "@/types";
import "animate.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: TLoginForm) => {
    console.log(data);
  };

  return (
    <form
      className="flex-1 gap-y-2 flex flex-col justify-center animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold mb-10 tracking-wider">Login</h1>
      <div className="w-full flex flex-col">
        <Input
          type="email"
          {...register("email")}
          placeholder="default@email.com"
          className="border-[1px] border-[#2d2a2a] bg-[#383838] rounded-lg w-3/4 shadow-md mb-1"
        />
        {errors.email && (
          <span className="text-red-500 text-sm ml-1">Email is required</span>
        )}
      </div>

      <Input
        type="password"
        {...register("password")}
        placeholder="********"
        className="border-[1px] border-[#2d2a2a] bg-[#383838] rounded-lg w-3/4 shadow-md mb-1"
      />
      {errors.password && (
        <span className="text-red-500 text-sm ml-1">Password is required</span>
      )}
      <div className="flex flex-col">
        <Button
          type="submit"
          className="text-white w-3/4 hove:bg-blue-700 p-5 shadow-md"
        >
          <span className="tracking-widest">Login</span>
        </Button>
        <Link href="/auth/register" className="w-3/4 text-end mt-1">
          <span className="text-primary opacity-90 hover:underline">
            Don{"'"}t have an account? Register
          </span>
        </Link>
      </div>
      <div className="flex justify-center items-center w-3/4 mt-5 gap-x-3">
        <div className="w-3/4 h-[1px] bg-[#383838]" />
        <span className="text-[#8a8787] text-sm font-semibold tracking-wider">
          Or
        </span>
        <div className="w-3/4 h-[1px] bg-[#383838]" />
      </div>
      <div className="flex w-3/4 gap-x-5">
        <Button className="text-slate-50 w-3/4 px-5 py-5 shadow-md mt-5 bg-[#383838] hover:bg-opacity-85 hover:bg-[#383838]">
          <GoogleIcon className="w-6 h-6 fill-primary" />
          <span className="tracking-tight flex-1 text-center mr-2">
            Login with Google
          </span>
        </Button>
        <Button className="text-slate-50 w-3/4 px-5 py-5 shadow-md mt-5 bg-[#383838] hover:bg-opacity-85 hover:bg-[#383838]">
          <MicrosoftIcon className="w-6 h-6 fill-primary" />
          <span className="tracking-tight flex-1 text-center mr-2">
            Login with Microsoft
          </span>
        </Button>
      </div>
      <div className="w-3/4 flex justify-center items-center mt-2">
        <Link href="/auth/forgot-password">
          <span className="text-primary opacity-90 hover:underline">
            Forgot password?
          </span>
        </Link>
      </div>
    </form>
  );
};
