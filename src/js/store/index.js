import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articleS: state.articles.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
