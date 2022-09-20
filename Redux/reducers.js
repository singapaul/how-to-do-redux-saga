export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT_ASYNC:
      return state % 2 !== 0 ? state + 1 : state;
    case DECREMENT:
      return state - 4;
    default:
      return state;
  }
}
