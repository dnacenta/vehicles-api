import {useContext, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input, Button} from '@rneui/themed';
import {Context as AuthContext} from '../context/AuthContext';

const LoginScreen = () => {
  const {
    state: {errorMessage},
    login,
  } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Input
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        accessibilityLabel="Username"
        autoCapitalize="none"
        style={styles.input}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        accessibilityLabel="Password"
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        onPress={() => {
          login({username, password});
        }}
        title="Log In"
        accessibilityLabel="log in"
        style={styles.button}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 8,
  },
  errorMessage: {
    fontSize: 18,
    color: '#FE7575',
    margin: 8,
  },
  button: {
    width: 160,
  },
});

export default LoginScreen;
