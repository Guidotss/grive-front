"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import * as Yup from "yup";
import { Button, GoogleIcon, Input, MicrosoftIcon } from "../ui";
import { type RegisterForm as TRegisterForm } from "@/types";
import "animate.css";
import { useContext } from "react";
import { AuthContext } from "@/context";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  name: Yup.string().required(),
  lastName: Yup.string().required(),
});

export const RegisterForm = () => {
  const {
    register: rhfRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: yupResolver(validationSchema),
  });
  const { register } = useContext(AuthContext);
  const router = useRouter();

  const onSubmit = async (data: TRegisterForm) => {
    const ok = await register(data);
    if (!ok) return;
    router.push("/");
  };

  return (
    <form
      className="flex-1 gap-y-2 flex flex-col justify-center animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-semibold mb-10 tracking-wider text-center w-3/4">
        Create an account
      </h1>
      <div className="w-3/4 flex gap-x-5">
        <Input
          type="text"
          {...rhfRegister("name")}
          placeholder="John"
          className="border-[1px] border-[#2d2a2a] bg-[#383838] rounded-lg w-3/4 shadow-md mb-1"
        />
        {errors.name && (
          <span className="text-red-500 text-sm ml-1">Name is required</span>
        )}

        <Input
          type="text"
          {...rhfRegister("lastName")}
          placeholder="Doe"
          className="border-[1px] border-[#2d2a2a] bg-[#383838] rounded-lg w-3/4 shadow-md mb-1"
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm ml-1">
            Last name is required
          </span>
        )}
      </div>
      <div className="w-full flex flex-col">
        <Input
          type="email"
          {...rhfRegister("email")}
          placeholder="default@email.com"
          className="border-[1px] border-[#2d2a2a] bg-[#383838] rounded-lg w-3/4 shadow-md mb-1"
        />
        {errors.email && (
          <span className="text-red-500 text-sm ml-1">Email is required</span>
        )}
      </div>

      <Input
        type="password"
        {...rhfRegister("password")}
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
          <span className="tracking-widest">Register</span>
        </Button>
        <Link href="/auth/login" className="w-3/4 text-end mt-1">
          <span className="text-primary opacity-90 hover:underline">
            Already have an account? Login
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
            Register with Google
          </span>
        </Button>
        <Button className="text-slate-50 w-3/4 px-5 py-5 shadow-md mt-5 bg-[#383838] hover:bg-opacity-85 hover:bg-[#383838]">
          <MicrosoftIcon className="w-6 h-6 fill-primary" />
          <span className="tracking-tight flex-1 text-center mr-2">
            Register with Microsoft
          </span>
        </Button>
      </div>
    </form>
  );
};
