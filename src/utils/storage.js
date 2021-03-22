export function setStorage(name, arr = []) {
  window.localStorage.setItem(name, JSON.stringify(arr));
}

export function getStorage(name, arr = []) {
  return JSON.parse(window.localStorage.getItem(name)) || arr;
}

export function delStorage(name) {
  localStorage.removeItem(name);
}
