import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        usernmae: { label: "username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Replace this with your own logic to validate credentials
        return {
          username: "Parth Gartan",
          id: "123",
          email: "abc@gmail.com"
        }
      }
    })
  ]
})


export const GET = handler
export const POST = handler;
