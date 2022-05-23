import NextAuth from "next-auth"
import Twitter from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0'
    })
  ],
})
