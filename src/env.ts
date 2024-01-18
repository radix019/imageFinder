export const LOCAL_DEV_NAME = "development";
export const PRODUCTION_NAME = "production";

export const getApiUrl = () => {
  let url = "";
  if (import.meta.env.VITE_API_URL) {
    url = import.meta.env.VITE_API_URL;
  }
  return url;
};

export const getClientId = () => {
  let clientID = "";
  if (import.meta.env.VITE_CLIENT_ID) {
    clientID = import.meta.env.VITE_CLIENT_ID;
  }
  return clientID;
};
export const getEnvironmentName = () =>
  import.meta.env.MODE ? import.meta.env.MODE : LOCAL_DEV_NAME;

export const isDev = () => getEnvironmentName() === LOCAL_DEV_NAME;
export const isProd = () => getEnvironmentName() === PRODUCTION_NAME;
