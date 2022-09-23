import {takeEvery, put} from 'redux-saga/effects';
import {PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST} from './constant';

// Example use cases
// Do a live stock check - on a shopping cart with an API call.
// When someone has an item in their cart and it blocks it out for a short amount of time.
// e.g. Amazon - availability timelines, stock stattus. You can 10 people are both trying to purchase the same product.
// The Saga allows you to check availability
// Bi-directional comms behind the scenes to update the UI.

// generators and takeEvery...
function* getProducts() {
  //  we don't need await keyword, but we need a yield
  let data = yield fetch('http://localhost:3500/products');
  data = yield data.json();
  console.warn('action called', data);
  yield put({type: SET_PRODUCT_LIST, data});
}

// function* searchProducts(data) {
//   //  we don't need await keyword, but we need a yield
//   let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
//   result = yield result.json();
//   yield put({type: SET_PRODUCT_LIST, data: result});
// }

function* searchProducts(data) {
  //  we don't need await keyword, but we need a yield
  let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
  result = yield result.json();
  console.warn('action is called', result);
  yield put({type: SET_PRODUCT_LIST, data: result});
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  // yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

// take Every takes every button click
// takeLatest takes the last thing in the queue.
// e.g. NasDAQ trading stock price might change a 100 times a second. Useful actions you only need once. Useful for
// real time time data feeds. e.g. National Rail train time arrival at a given station. Only want to show the latest to the
// user. As with Async you may get outdated data arriving more quickly than recent data. With takeEvery, if you have a blackbox recorder
// you want to record every single change that happeneed. If investifating an accident you need every bit of data.

export default productSaga;
