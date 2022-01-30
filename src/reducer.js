export const initState = {
  selectedPic: null,
  addPost: false,
};

export const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_PIC":
      return {
        ...state,
        selectedPic: action.selectedPic,
      };
    case "TOGGLE_ADD_POST":
      return {
        ...state,
        addPost: !state.addPost,
      };
    default:
      return state;
  }
};
