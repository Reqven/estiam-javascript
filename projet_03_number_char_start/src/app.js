import './style.scss';
import { onInput, onSubmit } from './core/utils';

const input = document.querySelector('.phrase');
const form = document.querySelector('form');

input.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);