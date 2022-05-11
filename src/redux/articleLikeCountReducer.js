export const articleLikeCountReducer = (
  state = {
    1: 10,
    2: 49,
    3: 51,
    4: 15,
    5: 78,
    6: 22,
    7: 104,
    8: 28,
    9: 38,
    10: 145,
    11: 14,
    12: 37,
    13: 13,
    14: 85,
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_LIKE_COUNTER":
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1,
      };
    case "REMOVE_FROM_LIKE_COUNTER":
      return {
        ...state,
        [action.id]: state[action.id] - 1,
      };

    default:
      return state;
  }
};
