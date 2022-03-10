import statesReducer from './statesReducer';
import {combineReducers} from 'redux';

const allreducers = combineReducers({
    states: statesReducer,
})
export default allreducers