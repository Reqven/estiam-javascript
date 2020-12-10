import { getAVGForceById } from '../data/forces';
import { getRelationsById } from '../data/relationships';
import dragons, { getDragonById } from '../data/dragons';


export const dragonListId  = '#dragons';
export const countTitleId  = '#count';
export const orderButtonId = '#order';
export const colorButtonId = '#color';

let ascendingOrder = false;


export const addCount = () => {
  const countTitle = document.querySelector(countTitleId);
  countTitle.innerHTML = `Count: ${dragons.count}`;
};

export const addDragons = () => {
  const dragonList = document.querySelector(dragonListId);

  for (const dragon of dragons.names) {
    const dragonLi = buildDragonLi(dragon);
    dragonList.appendChild(dragonLi);
  }
};

export const onOrder = (e) => {
  const dragonList = document.querySelector(dragonListId);
  ascendingOrder = !ascendingOrder;

  Array.from(dragonList.children)
    .map(li => ({ li, force: li.getAttribute('force') }))
    .sort((a, b) => (ascendingOrder ? a.force - b.force : b.force - a.force))
    .forEach(data => dragonList.appendChild(data.li));
};

export const onColor = (e) => {
  const dragonList = document.querySelector(dragonListId);

  Array.from(dragonList.children).forEach((li) =>
    randomColor().then((color) => {
      li.style.backgroundColor = `#${color}`;
    })
  );
};

export const onSubmit = (e) => {
  e.preventDefault();

  const dragonList = document.querySelector(dragonListId);
  const form = document.querySelector('form');

  const id = Math.max(...dragons.names.map(a => a.id)) +1;
  const { name, element } = Object.fromEntries(new FormData(form));
  const dragon = { id, name: name.trim(), element: element.trim() };

  if (!dragon.name) { return; }

  dragons.names.push(dragon);
  dragons.count++;

  const dragonLi = buildDragonLi(dragon);
  dragonList.appendChild(dragonLi);
  form.reset();
  addCount();
}

export const buildDragonLi = (dragon) => {
  const dragonLi = document.createElement('li');
  const relationList = document.createElement('ul');

  const { id, name, element } = dragon;
  const avg = getAVGForceById(dragon.id);
  const relations = getRelationsById(dragon.id).map((id) => getDragonById(id));

  dragonLi.id = id;
  dragonLi.innerHTML = `${id}. ${name}`;
  dragonLi.innerHTML += element ? `, element: ${element}` : '';
  dragonLi.innerHTML += `, force: ${avg}`;
  dragonLi.setAttribute('force', avg);

  for (const relatedDragon of relations) {
    const relatedDragonLi = document.createElement('li');
    relatedDragonLi.innerHTML = relatedDragon.name;
    relationList.appendChild(relatedDragonLi);
  }
  dragonLi.appendChild(relationList);
  return dragonLi;
}

export const randomColor = () => new Promise((resolve) => {
  resolve(Math.floor(Math.random() * 16777215).toString(16));
});


