import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { 
          label: "Email", 
          type: "string" , 
          placeholder: "email - admin@journeygenie.com",
        },
        password: { 
          label: "Password", 
          type: "string", 
          placeholder: "password - admin@123",
        },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_BASE_URL}/api/auth/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          })
        });

        const data = await res.json();

        if(res.ok && data) return data;

        else if(res.status === 401 && data.message === "Invalid credentials.") return "Invalid credentails";

        else if(res.status === 401 && data.message === "Incorrect passowrd.") return "Incorrect passowrd.";
        
        else return "Oop! something went wrong.";
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
};
