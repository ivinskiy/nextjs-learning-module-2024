"use client";
import { msalInstance } from "@/services/msal";

import localFont from "next/font/local";
import "./globals.css";
import { Suspense, useEffect, useState } from "react";
import { getToken } from "@/utils/getToken";
import { getCookie, setCookie } from "cookies-next";

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

/**
 * Microsoft Authentication must happen via the browser
 * Can switch between having a useEffect hook that handles it, OR via a button to log you in
 */
msalInstance.initialize();

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [hasTokenBeenSet, setHasTokenBeenSet] = useState(false);

  useEffect(() => {
    if (typeof getCookie("token") !== "undefined") {
      setHasTokenBeenSet(true);
    }
  }, []);

  // useEffect(() => {
  //   // Has to be done client-side due to Microsoft Auth
  //   const handleGetToken = async () => {
  //     const tokenResponse = await getToken();
  //     setCookie("token", tokenResponse.accessToken);
  //     setHasTokenBeenSet(true);
  //   };
  //   handleGetToken();
  // }, []);

  return (
    <html lang="en" className={`${proximaNova.variable}`}>
      <body>
        {!hasTokenBeenSet ? (
          <div className="w-full h-screen grid place-items-center">
            <button
              className="bg-gray-100 px-3 py-2 rounded-xl"
              onClick={async () => {
                // Log in and set cookie
                const tokenResponse = await getToken();

                setCookie("token", tokenResponse.accessToken, { maxAge: 3600 });
                setHasTokenBeenSet(true);
              }}
            >
              LOG IN
            </button>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
};

export default RootLayout;
