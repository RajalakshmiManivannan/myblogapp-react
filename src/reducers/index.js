import { combineReducers } from "redux";
import blogReducers from '../reducers/blogReducers'

export default combineReducers({
  post : blogReducers
});
