import data from "../../data.json";

const initialState = {
  items: data,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
export default dataReducer;
