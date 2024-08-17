import { RegisterForm } from "@/components";
import desertImage from "/public/assets/tower.webp";
import Image from "next/image";
import "animate.css";

export default function RegisterPage() {
  return (
    <main className="flex h-screen gap-x-44">
      <div className="w-3/5">
        <Image
          className="rounded-lg w-full h-full object-cover animate__animated animate__fadeIn"
          src={desertImage}
          alt="desert"
        />
      </div>
      <RegisterForm />
    </main>
  );
}
