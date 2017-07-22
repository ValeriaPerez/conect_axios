import {combineReducers} from 'redux';
import todos from './todos';
import numero from './numero';
import catalogos from './catalogos';

const rootReducer = combineReducers({
  todos,
  numero,
  catalogos
});

export default rootReducer;
