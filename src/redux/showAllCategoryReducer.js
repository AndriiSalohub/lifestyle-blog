export const showAllCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_ALL_CATEGORY_CATEGORY":
      return {
        ...state,
        1: action.category,
      };
    default:
      return state;
  }
};
