import { RegisterForm } from "./register-form";

export type LoginForm = Omit<RegisterForm, "name" | "lastName">;
