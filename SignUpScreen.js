import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { auth, firestore } from './firebase';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);

      // Add user information to Firestore
      await firestore.collection('users').doc(userCredential.user.uid).set({
        firstName,
        lastName,
        email,
      });

      // Send verification email
      await userCredential.user.sendEmailVerification();

      Alert.alert('Success', 'Account created successfully. Please verify your email.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="First Name" onChangeText={(text) => setFirstName(text)} />
      <TextInput placeholder="Last Name" onChangeText={(text) => setLastName(text)} />
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
