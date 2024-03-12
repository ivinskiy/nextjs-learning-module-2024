"use client";
import { msalInstance } from "@/services/msal";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { getToken } from "@/utils/getToken";

const inter = Inter({ subsets: ["latin"] });

msalInstance.initialize();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const account = msalInstance.getAllAccounts()[0];
    // Has to be done client-side due to Microsoft Auth
    getToken(account);
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
