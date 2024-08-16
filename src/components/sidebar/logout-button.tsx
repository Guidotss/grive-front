"use client";
import { useContext } from "react";
import { Button } from "../ui";
import { AuthContext } from "@/context";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const router = useRouter();
  const handleClick = () => {
    logout();
    router.push("auth/login");
  };
  return (
    <Button
      className="w-full rounded-sm flex items-center justify-center"
      variant="default"
      onClick={handleClick}
    >
      <span>Sign Out</span>
    </Button>
  );
};
