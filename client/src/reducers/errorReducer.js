//EROR REDUCER
export const initialStateError = {};

export default function(state = initialStateError, action) {
  switch (action.type) {
    case "GET_ERRORS":
      return  action.payload;
      case "GET_NETWORK_ERRORS":
        return  "Unable to connect";
    default:
      return state;
  }
}