import { msalInstance } from "../services/msal";
import { AccountInfo } from "@azure/msal-browser";
import { setCookie } from "cookies-next";

export const getToken = async (account: AccountInfo) => {
  const token = await msalInstance.acquireTokenSilent({
    scopes: ["api://717aaf54-6553-432e-85ca-b2399c7f87f6/.default"],
    account: account,
  });
  setCookie("token", token.accessToken);
  // return token;
};
