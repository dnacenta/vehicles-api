import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import AuthNavigator from "./src/navigation/AuthNavigator";

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
