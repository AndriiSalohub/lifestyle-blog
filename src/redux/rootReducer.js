import { combineReducers } from "redux";
import { articleLikeCountReducer } from "./articleLikeCountReducer";

import { articleLikeReducer } from "./articleLikeReducer";

export const rootReducer = combineReducers({
  articleLike: articleLikeReducer,
  articleLikeCounter: articleLikeCountReducer,
});
