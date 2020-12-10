import './style.scss';
import { nextLi } from './core/utils';

const container = document.querySelector('.numbers');
const lis = new Array(5).fill(undefined).map(() => {
  const li = nextLi(container.lastElementChild);
  return container.appendChild(li);
});
