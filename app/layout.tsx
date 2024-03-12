"use client";
import { msalInstance } from "@/services/msal";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import { getToken } from "@/utils/getToken";

const proximaNova = localFont({
  src: [
    { path: "./fonts/proximanova-regular.otf", weight: "400", style: "normal" },
    {
      path: "./fonts/proximanova-regularit.otf",
      weight: "400",
      style: "italic",
    },
    { path: "./fonts/proximanova-black.otf", weight: "900", style: "normal" },
    { path: "./fonts/proximanova-blackit.otf", weight: "900", style: "italic" },
    { path: "./fonts/proximanova-bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/proximanova-boldit.otf", weight: "700", style: "italic" },
    { path: "./fonts/proximanova-light.otf", weight: "200", style: "normal" },
    { path: "./fonts/proximanova-lightit.otf", weight: "200", style: "italic" },
  ],
  display: "swap",
  variable: "--font-proxima-nova",
});

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
    <html lang="en" className={`${proximaNova.variable}`}>
      <body>{children}</body>
    </html>
  );
}
