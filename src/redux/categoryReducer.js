export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...state,
        1: action.category,
      };
    default:
      return state;
  }
};
