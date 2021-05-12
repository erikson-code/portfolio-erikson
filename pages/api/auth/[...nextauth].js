import Providers from "next-auth/providers"
import NextAuth from 'next-auth'

const options = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      domain: process.env.AUTH0_DOMAIN
    })
  ]
}

export default (req, res) => NextAuth(req, res, options)