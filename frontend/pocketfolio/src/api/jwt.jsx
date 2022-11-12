export const saveToken = token => {
  window.sessionStorage.setItem('access-Token', token);
};
export const saveRefreshToken = token => {
  window.sessionStorage.setItem('refresh-Token', token);
};
export const getToken = () => {
  return window.sessionStorage.getItem('access-Token');
};
export const getRefreshToken = () => {
  return window.sessionStorage.getItem('refresh-Token');
};
export const deleteToken = () => {
  window.sessionStorage.removeItem('access-Token');
};
export const deleteRefreshToken = () => {
  window.sessionStorage.removeItem('refresh-Token');
};
export const deleteAllToken = () => {
  window.sessionStorage.clear();
};
