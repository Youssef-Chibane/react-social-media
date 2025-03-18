import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase-client";

interface AuthContextType {
  user: User | null;
  signInWhithGithub: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const signInWhithGithub = () => {
    supabase.auth.signInWithOAuth({ provider: "github" });
  };
  const signOut = () => {};

  return (
    <AuthContext.Provider value={{ user, signInWhithGithub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};
