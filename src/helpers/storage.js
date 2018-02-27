function setCookie(name, value, expirydays) {
  var expires =
    "expires=" +
    new Date(
      new Date().getTime() + expirydays * 24 * 60 * 60 * 1000
    ).toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2)
    return parts
      .pop()
      .split(";")
      .shift();
}

export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (_) {
      setCookie(key, value, 2000);
    }
  },
  get: key => {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return getCookie(key);
    }
    return undefined;
  }
};
