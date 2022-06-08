import root from './root';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
export default store;