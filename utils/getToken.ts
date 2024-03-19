import { msalInstance } from "../services/msal";
import { AccountInfo } from "@azure/msal-browser";
import { setCookie } from "cookies-next";

export const getToken = async () => {
  // await msalInstance.initialize();
  // msalInstance.loginRedirect({
  //   scopes: ["api://717aaf54-6553-432e-85ca-b2399c7f87f6/.default"],
  // });
  await msalInstance.ssoSilent({
    scopes: ["api://717aaf54-6553-432e-85ca-b2399c7f87f6/.default"],
    loginHint: "vaiv@netlight.com",
  });
  const account = msalInstance.getAllAccounts()[0];
  console.log(account);

  const token = await msalInstance.acquireTokenSilent({
    scopes: ["api://717aaf54-6553-432e-85ca-b2399c7f87f6/.default"],
    account: account,
  });
  setCookie("token", token.accessToken);
  return token;
};
