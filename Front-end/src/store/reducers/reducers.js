//Définir le state initial
const initialState = {
  profile: null,
};

//Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
