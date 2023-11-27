


const saveCookie = (nm, id, day) => {
  const today = new Date();
  today.setDate(today.getDate() + day);
  document.cookie = `${nm}=${id}; path=/; expires=${today.toGMTString()};`;
};

const getCookie = (nm) => {
  const cook = document.cookie + ";";
  const idx = cook.indexOf(nm, 0);
  let val = "";

  if (idx !== -1) {
    const begin = cook.indexOf("=", 0) + 1;
    const end = cook.indexOf(";", begin);
    val = unescape(cook.substring(begin, end));
  }
  return val;
};

export { saveCookie, getCookie };