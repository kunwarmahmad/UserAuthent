import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from './firebase';

const DashboardScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <Text>Welcome to Dashboard</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default DashboardScreen;
