import { handleAuth, handleLogin, handleCallback } from "@auth0/nextjs-auth0";
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';


export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/dashboard',
  }),
  callback: handleCallback({
    afterCallback: async (req, res, session) => {
      const decoded = jwt.decode(res.idToken);

      const { email, given_name, family_name } = decoded;
      try {
        // Make the API call to your server
        const userEsists = await fetch(`${process.env.SERVER_URL}/user/get/${email}`, {
          method: 'GET',
        }); 
        if(userEsists.isExisting == undefined || userEsists.isExisting == 'undefined'){
          const apiResponse = await fetch(`${process.env.SERVER_URL}/user/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, given_name, family_name }),  // Customize based on API requirements
        });
        // If the API call is unsuccessful, throw an error
        if (!apiResponse.ok) {
          return NextResponse.redirect(new URL('/api/auth/login', process.env.AUTH0_BASE_URL));
        }else{
          return NextResponse.redirect(new URL('/dashboard', process.env.AUTH0_BASE_URL));
        }
        } else{
          return NextResponse.redirect(new URL('/api/auth/login', process.env.AUTH0_BASE_URL));
        }

      } catch (error) {
        console.error('API call failed:', error);

        // If the API call fails, redirect the user back to the login page
        return NextResponse.redirect(new URL('/api/auth/login', process.env.AUTH0_BASE_URL));
      }
    },
  }),
});

export const POST = handleAuth();
