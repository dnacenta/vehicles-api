import createDataContext from "./createDataContext";
import vehiclesApi from "../api/vehicles"
import * as SecureStore from "expo-secure-store";

type StateProps = {
  errorMessage: string;
  token: string | null;
}

type ActionProps = {
  type: string;
  payload: string;
}

const authReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "add_error":
      return {...state, errorMessage: action.payload}
    case "login":
    case "restore_token":
      return {errorMessage: "", token: action.payload}
    case "logout":
      return {errorMessage: "", token: null}
    default:
      return state;
  }
};


const login = (dispatch) => async ({username, password}) => {
  try {
    const response = await vehiclesApi.post("/login", {username, password})
    await SecureStore.setItemAsync("token", response.data.token)
    dispatch({type: "login", payload: response.data.token})
  } catch (error) {
    dispatch({ type: "add_error", payload: "Error logging in"})
  }
}

const logout = (dispatch: (arg0: { type: string; }) => void) => async () => {
  await SecureStore.deleteItemAsync("token")
  dispatch({ type: "logout" })  
}

const tryLocalLogin = (dispatch: (arg0: { type: string; payload: string; }) => void) => async () => {
  const token = await SecureStore.getItemAsync("token")
  if (token) {
    dispatch({ type: "restore_token", payload: token})
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {login, logout, tryLocalLogin},
  { token: null, errorMessage: "" }
);
