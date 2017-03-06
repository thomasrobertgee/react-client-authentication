import { combineReducers } from 'redux' 
import { reducer as form } from 'redux-form' 
import auth from './auth_reducer' 
import msg from './message_reducer' 

const rootReducer = combineReducers({
  form,
  auth,
  msg
}) 

export default rootReducer 
