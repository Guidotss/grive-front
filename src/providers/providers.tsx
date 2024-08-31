"use client";

import { AuthProvider, FilesProvider } from "@/context";

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <FilesProvider>{children}</FilesProvider>
    </AuthProvider>
  );
};
