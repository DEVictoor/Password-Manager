const cookieCreate = (string, time) => {
  document.cookie = `token=${string}; expires=${time}; path=/`;
};

const cookieSearch = string => {
  const regex = new RegExp(`(?:(?:^|.*;\s*)${string}\\s*\=\s*([^;]*).*$)|^.*$`);
  return document.cookie.replace(regex, '$1');
};

const cookieRemove = () => {
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
};

export { cookieCreate, cookieSearch, cookieRemove };
