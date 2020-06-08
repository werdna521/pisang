export const STORE_SESSION = 'STORE_SESSION';

export const storeSession = (userProfile) => {
  return { type: STORE_SESSION, userProfile };
};
