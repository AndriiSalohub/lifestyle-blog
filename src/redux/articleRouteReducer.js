export const articleRouteReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PATH":
      return {
        ...state,
        1: action.id,
        2: action.path,
      };
    default:
      return state;
  }
};
