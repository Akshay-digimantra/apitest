import axios from "../lib/instance/UserInstance";
import { userSliceActions } from "./UserSlice";

export const getUsersData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("v2/users");

      console.log(response);

      if (response.status === 200) {
        console.log(response.data);
        dispatch(userSliceActions.getUsers(response.data));
      } else {
        throw response;
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  };
};
