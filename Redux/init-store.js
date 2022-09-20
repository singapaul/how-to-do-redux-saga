import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';

import {rootSagas} from './sagas';
import {reducer} from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);
