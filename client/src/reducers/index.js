import { combineReducers } from 'redux';
import web from './WebReducer.js'
import usuario from './UserReducer.js';

const mainReducer = combineReducers({
    web,
    usuario,
});

export default mainReducer;