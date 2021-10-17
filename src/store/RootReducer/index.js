import { combineReducers } from "redux";
import cakeReducer from "../Reducers/cakeReducer";
import iceCreamReducer from "../Reducers/iceCreamReducer";
import userReducer from "../Reducers/UserReducer";
import postReducer from "../Reducers/postReducers";
import dataReducer from "../Reducers/dataReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  User: userReducer,
  post: postReducer,
  data: dataReducer,
});

export default rootReducer;
