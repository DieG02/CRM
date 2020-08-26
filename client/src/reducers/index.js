import { combineReducers } from 'redux';
import usuario from './User.js'

const mainReducer = combineReducers({
    usuario,
});

export default mainReducer;