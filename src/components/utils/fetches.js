import checkResponse from "../../utils/checkResponse";
import {
  GET_ANALYTICS_REQUEST,
  GET_ANALYTICS_SUCCESS,
  GET_ANALYTICS_FAILED,
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
        console.log(res);
        if (res) {
          dispatch({
            type: GET_ANALYTICS_SUCCESS,
            payload: res,
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
