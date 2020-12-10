import './style.scss';

const manualPermutation = () => {
  const spans = Array.from(document.querySelectorAll('ul.numbers > li > span'));
  [spans[0].innerHTML, spans[1].innerHTML, spans[2].innerHTML] = [spans[2].innerHTML, spans[0].innerHTML, spans[1].innerHTML];
};

const loopPermutation = () => {
  const spans = Array.from(document.querySelectorAll('ul.numbers > li > span'));
  const cloned = spans.map((a) => a.cloneNode(true));

  const indexes = [2, 0, 1];
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = cloned[indexes[i]].innerHTML;
  }
};

// manualPermutation();
// loopPermutation();
