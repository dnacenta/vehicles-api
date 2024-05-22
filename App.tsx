import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as AuthProvider} from './src/context/AuthContext';
import AuthNavigator from './src/navigation/AuthNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default App;
