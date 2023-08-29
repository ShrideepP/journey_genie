import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

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
        const response = await fetch(`https://api-journey-genie.vercel.app/api/auth/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          })
        });
        const data = await response.json();
        if(response.status === 202 && data) return data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return ({ ...token, ...user });
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
