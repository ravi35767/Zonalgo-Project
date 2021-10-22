import axios from "axios";
import { setData } from "../Actions/dataActions";
import data from "../../data.json";
export const getData = () => {
  console.log("here is data from json", data);
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
