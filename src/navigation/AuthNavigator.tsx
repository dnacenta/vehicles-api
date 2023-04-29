import { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./MainNavigator";
import LoginScreen from "../screens/LoginScreen";
import { Context as AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const {
    state: { token },
    tryLocalLogin,
  } = useContext(AuthContext);

  useEffect(() => {
    tryLocalLogin();
  }, []);

  return (
    <Stack.Navigator>
      {!!token ? (
        <Stack.Screen
          name="Home"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
