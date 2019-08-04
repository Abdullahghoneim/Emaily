import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handelToken = token => async dispatch => {
  const response = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitSurvey = (value, history) => async dispatch => {
  const response = await axios.post("/api/survey", value);

  history.push("/surveys");

  dispatch({ type: FETCH_USER, payload: response.data });
};
