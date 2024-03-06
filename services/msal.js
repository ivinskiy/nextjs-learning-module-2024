import * as msal from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "e2dba9ad-682d-461a-a574-93e256d83593",
    authority: "https://login.microsoftonline.com/netlight.com", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "/",
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance };
