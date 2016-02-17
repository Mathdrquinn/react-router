import { createStore } from 'redux';
import Reducer from '../reducers/';

export default function StoreConfig() {
  return createStore(Reducer);
};
