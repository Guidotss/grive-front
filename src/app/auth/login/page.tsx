import { LoginForm } from "@/components";
import desertImage from "/public/assets/tower.webp";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex h-screen gap-x-10">
      <div className="w-3/5">
        <Image
          className="rounded-lg w-full h-full object-cover"
          src={desertImage}
          alt="desert"
        />
      </div>
      <LoginForm />
    </main>
  );
}
