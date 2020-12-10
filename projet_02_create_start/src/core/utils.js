export const nextLetter = (letter) => {
  return String.fromCharCode(letter.charCodeAt(0) + 1);
};

export const nextLi = (el) => {
  let li = el.cloneNode(true);

  let str = li.innerText;
  let letter = str.substr(0, str.indexOf('='));
  let value = parseInt(str.substr(-1, str.indexOf('=')));

  li.innerHTML = li.innerHTML
    .replace(letter, nextLetter(letter))
    .replace(value, value + 1);

  return li;
};
