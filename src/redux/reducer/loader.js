import ActionConstants from "../type/loader";
export default function loader(state = { isLoading: false }, action) {
  switch (action.type) {
    case ActionConstants.TOGGLE_LOADER: {
      return {
        ...state,
        isLoading: action.value,
      };
    }
    default:
      return { ...state };
  }
}
