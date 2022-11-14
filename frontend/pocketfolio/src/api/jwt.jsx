export const saveExpire = () => {
  // 세션 만료 6시간
  window.sessionStorage.setItem('expire', Date.now() + 21600000);
};

export const getExpire = () => {
  return window.sessionStorage.getItem('expire');
};

// save token
export const saveToken = token => {
  window.sessionStorage.setItem('access-Token', token);
};

export const saveRefreshToken = token => {
  window.sessionStorage.setItem('refresh-Token', token);
};

// get token
export const getToken = () => {
  console.log(Date.now(), parseInt(getExpire()));
  if (Date.now() > parseInt(getExpire())) {
    deleteAllToken();
    return;
  } else {
    return window.sessionStorage.getItem('access-Token');
  }
};

export const getRefreshToken = () => {
  if (Date.now() > getExpire()) {
    deleteAllToken();
    return;
  } else {
    return window.sessionStorage.getItem('refresh-Token');
  }
};

export const deleteToken = () => {
  window.sessionStorage.removeItem('access-Token');
  return null;
};

export const deleteRefreshToken = () => {
  window.sessionStorage.removeItem('refresh-Token');
  return null;
};

export const deleteAllToken = () => {
  window.sessionStorage.clear();
};
