import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { AppWrapper } from "./sessionManager";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MedTap",
  description: "Welcome to MedTap",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <AppWrapper>
    <html lang="en">
        <UserProvider>
        <body>
          {children}
        </body>
      </UserProvider>
    </html>
    </AppWrapper>
  );
}
