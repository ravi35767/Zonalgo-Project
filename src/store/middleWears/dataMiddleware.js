import axios from "axios";
import { setData } from "../Actions/dataActions";
export const getData = () => {
  return (dispatch) => {
    axios
      .post("http://design.zonalgo.com/hotelJson.json")
      .then((res) => {
        console.log("api", res);
        dispatch(setData(res.data));
      })
      .catch((err) => {
        let errMsg = err.message;
      });
  };
};
