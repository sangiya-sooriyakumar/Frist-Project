import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.subText}>What would you like to do today?</Text>

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.optionButton} onPress={() => history.push('/profile')}>
        <Text style={styles.optionButtonText}>View Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => history.push('/browse-episodes')}>
        <Text style={styles.optionButtonText}>Browse Episodes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => history.push('/settings')}>
        <Text style={styles.optionButtonText}>Settings</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => history.push('/login')}>
        <Text style={styles.logoutButtonText}>Logout</Text>
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
    backgroundColor: '#000', // Same black background as in login screen
  },
  welcomeText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    color: '#b0b0b0',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#0059ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  optionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#ff4040',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
