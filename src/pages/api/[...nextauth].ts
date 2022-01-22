import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from "@/lib/prisma";

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string
    })
  ],
  adapter: PrismaAdapter(prisma)
})
