import checkResponse from "../../utils/checkResponse";
import {
  GET_ANALYTICS_REQUEST,
  GET_ANALYTICS_SUCCESS,
  GET_ANALYTICS_FAILED,
  GET_PIE_SUCCESS,
  GET_VERTICAL_SUCCESS,
  GET_ARABLE_METRIC_SUCCESS,
  GET_FOREST_METRIC_SUCCESS,
} from "../../services/actions/analytics";

export const infoUserData = () => {
  return fetch(`/apps/demo-application`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(),
  }).then(checkResponse);
};

export function getAnalytic() {
  return function (dispatch) {
    dispatch({
      type: GET_ANALYTICS_REQUEST,
    });
    infoUserData()
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_ANALYTICS_SUCCESS,
            payload: res,
          });
          dispatch({
            type: GET_PIE_SUCCESS,
            payload: res.analytics[3],
                      });
          dispatch({
            type: GET_VERTICAL_SUCCESS,
            payload: res.analytics[2],
          });
          dispatch({
            type: GET_ARABLE_METRIC_SUCCESS,
            payload: res.analytics[0],
          });
          dispatch({
            type: GET_FOREST_METRIC_SUCCESS,
            payload: res.analytics[1],
          });
        } else {
          dispatch({
            type: GET_ANALYTICS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ANALYTICS_FAILED,
        });
      });
  };
}
