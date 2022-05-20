import { getComments } from "components/Comments/api";
import { combineReducers } from "redux";
import { articleLikeCountReducer } from "./articleLikeCountReducer";
import { articleLikeReducer } from "./articleLikeReducer";
import { articleRouteReducer } from "./articleRouteReducer";
import { categoryReducer } from "./categoryReducer";
import { showAllCategoryReducer } from "./showAllCategoryReducer";

export const rootReducer = combineReducers({
    articleLike: articleLikeReducer,
    articleLikeCounter: articleLikeCountReducer,
    articlePath: articleRouteReducer,
    category: categoryReducer,
    showAllCategory: showAllCategoryReducer,
});
