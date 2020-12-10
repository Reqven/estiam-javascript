import './style.scss';
import 'core-js/stable';
import { orderButtonId, colorButtonId, onSubmit } from './core/utils';
import { addCount, addDragons, onOrder, onColor } from './core/utils';


const setupEventListener = () => {
  const orderButton = document.querySelector(orderButtonId);
  const colorButton = document.querySelector(colorButtonId);
  const form = document.querySelector('form');

  orderButton.addEventListener('click', onOrder);
  colorButton.addEventListener('click', onColor);
  form.addEventListener('submit', onSubmit);
};

document.addEventListener('DOMContentLoaded', (e) => {
  addCount();
  addDragons();
  setupEventListener();
});
