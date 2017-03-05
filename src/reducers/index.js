import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  form // same as form: form (es6 yay)
});

export default rootReducer;
