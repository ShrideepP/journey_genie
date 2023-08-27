import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function getAuth() {
  let email = null;
  let token = null;

  if(typeof window !== "undefined") {
    email = localStorage.getItem('email');
    token = localStorage.getItem('token');
  };
  
  return { email, token };
};

export function setAuth(email: string, token: string) {
  if(typeof window !== "undefined") {
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("token", token);
  };
};

export function signOut() {
  if(typeof window !== "undefined") {
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("token");
  };
};
