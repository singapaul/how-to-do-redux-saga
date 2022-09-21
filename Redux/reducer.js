import {ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART} from './constant';

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn('ADD TO CART CONDITION', action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      const remainingItems = data.filter(item => item.id !== action.data);
      return [...remainingItems];
    case EMPTY_CART:
      console.warn('Empty cart condition ', action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
