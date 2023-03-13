export const GET_ANALITIC_REQUEST = "GET_ANALITIC_REQUEST";
export const GET_ANALITIC_SUCCESS = "GET_ANALITIC_SUCCESS";
export const GET_ANALITIC_FAILED = "GET_ANALITIC_FAILED";
const initialState = {
  allAnalitic: null,
  isLoad: false,
  isError: false,
};

export const analiticReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANALITIC_REQUEST:
      return {
        ...state,
        isError: false,
        isLoad: true,
      };
    case GET_ANALITIC_SUCCESS:
      return {
        ...state,
        allAnalitic: action.payload,
        isLoad: false,
        isError: false,
      };

    case GET_ANALITIC_FAILED:
      return {
        ...state,
        error: true,
        isLoad: false,
      };

    default:
      return state;
  }
};



