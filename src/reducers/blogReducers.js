import {GET_ALL_POSTS} from "../actions/types";

const initialState = {
    post : []
}



export default function(state = initialState, action) {
  switch(action.type) {
      case GET_ALL_POSTS:
          return {
              ...state,
              post: action.payload
          }
      break;

      default:
          // the dispatched action is not in this reducer, return the state unchanged
          return state;
  }
}