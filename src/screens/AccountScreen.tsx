import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Button} from '@rneui/themed';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
  const {logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.button}
        title="Log Out"
        onPress={logout}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    width: 240,
  },
});

export default AccountScreen;
