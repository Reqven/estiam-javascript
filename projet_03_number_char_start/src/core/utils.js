export const onInput = (e) => {
  const value = e.target.value;
  document.querySelector('#charCount').innerText = value.length;

  const details = document.querySelector('#details');
  const words = value.split(' ').filter((a) => a !== '');

  while(details.firstChild) {
    details.firstChild.remove();
  }
  words
    .map(word => buildWordContainer(word))
    .map(el => details.appendChild(el));
};

export const onSubmit = (e) => {
  e.preventDefault();

  const input = document.querySelector('.phrase');
  const words = input.value.split(' ').filter((a) => a !== '');
  document.querySelector('#wordCount').innerText = words.length || 'Erreur';
};

const buildWordContainer = (word) => {
  const container = document.createElement('div');
  const wordP     = document.createElement('p');
  const lengthP   = document.createElement('p');

  container.className = 'word';
  wordP.innerText = word;
  lengthP.innerText = word.length;

  container.appendChild(wordP);
  container.appendChild(lengthP);
  return container;
}