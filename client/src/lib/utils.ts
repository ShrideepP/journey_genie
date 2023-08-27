import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function setAuth(email: string, token: string) {
  if(typeof window !== "undefined") {
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
  }
}

export function getAuth() {
  let email = null;
  let token = null;
  if(typeof window !== "undefined") {
    email = localStorage.getItem("email");
    token = localStorage.getItem("token");
  }
  return { email, token };
}

export function signOut() {
  if(typeof window !== "undefined") {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  }
}
