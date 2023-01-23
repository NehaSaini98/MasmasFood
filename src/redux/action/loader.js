import ActionConstants from "../type/loader";
export const toggleLoader = (value) => ({
  value,
  type: ActionConstants.TOGGLE_LOADER,
});
