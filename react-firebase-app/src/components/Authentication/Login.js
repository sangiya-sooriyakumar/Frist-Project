import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Logged in:', userCredential);
        history.push('/dashboard');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Episodic series of digital audio.</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="mail" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="E-mail address"
          placeholderTextColor="#b0b0b0"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#b0b0b0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => history.push('/forgot-password')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login with Facebook */}
      <TouchableOpacity style={styles.fbButton}>
        <Text style={styles.fbButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      {/* Register New Account */}
      <TouchableOpacity style={styles.registerButton} onPress={() => history.push('/register')}>
        <Text style={styles.registerButtonText}>Register new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000', // Black background as in the design
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: '#0059ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#b0b0b0',
    textAlign: 'center',
    marginBottom: 15,
  },
  fbButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  fbButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#ff4040',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;
