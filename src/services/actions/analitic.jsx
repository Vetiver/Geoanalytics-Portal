import checkResponse from "../../utils/checkResponse";
export const GET_ANALITIC_REQUEST = "GET_ANALITIC_REQUEST";
export const GET_ANALITIC_SUCCESS = "GET_ANALITIC_SUCCESS";
export const GET_ANALITIC_FAILED = "GET_ANALITIC_FAILED";

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

  export function getAnalitic() {
    return function (dispatch) {
      dispatch({
        type: GET_ANALITIC_REQUEST,
      });
      infoUserData()
        .then((res) => {
          if (res) {
            dispatch({
              type: GET_ANALITIC_SUCCESS,
              payload: res,
            });
          } else {
            dispatch({
              type: GET_ANALITIC_FAILED,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: GET_ANALITIC_FAILED,
          });
        });
    };
  }
  