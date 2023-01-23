import ActionConstants from "../type/userDetail";
export default function userDetail(
    state = { 
      email: '',
      firstName: '',
      gender: '',
      id: '',
      image: '',
      lastName: '',
      token: '',
      username: '',
    }, action) {
  switch (action.type) {
    case ActionConstants.USER_DETAIL: {
      return {
        ...state,
        email: action.value.email,
        firstName: action.value.firstName,
        gender: action.value.gender,
        id: action.value.id,
        image: action.value.image,
        lastName: action.value.lastName,
        token: action.value.token,
        username: action.value.username,
      };
    }
    default:
      return { ...state };
  }
}
