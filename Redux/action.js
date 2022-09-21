import {ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART} from './constant';

export const addToCart = data => {
  console.warn('action called', data);
  return {type: ADD_TO_CART, data};
};

export const removeToCart = data => {
  console.warn('remove action called', data);
  return {type: REMOVE_TO_CART, data};
};

export const emptyCart = () => {
  return {type: EMPTY_CART};
};
