import { combineReducers } from "redux";
import { articleLikeCountReducer } from "./articleLikeCountReducer";

import { articleLikeReducer } from "./articleLikedReducer";

export const rootReducer = combineReducers({
  articleLike: articleLikeReducer,
  articleLikeCounter: articleLikeCountReducer,
});
