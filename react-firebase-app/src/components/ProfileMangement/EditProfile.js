import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { updateProfile } from 'firebase/auth';

const EditProfile = () => {
  const history = useHistory();
  const [name, setName] = useState('Sangiya Sooriyakumar');
  const [email, setEmail] = useState('sangiya1126@gmail.com');
  const [subscription, setSubscription] = useState('Premium Member');

  const handleSave = () => {
    // Update Firebase profile
    const user = auth.currentUser;
    if (user) {
      updateProfile(user, {
        displayName: name,
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
        .then(() => {
          console.log('Profile Updated Successfully!');
          alert('Profile Updated Successfully!');
          history.push('/profile');
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
          alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#b0b0b0"
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#b0b0b0"
          keyboardType="email-address"
        />
      </View>

      {/* Subscription Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Subscription</Text>
        <TextInput
          style={styles.input}
          value={subscription}
          onChangeText={setSubscription}
          placeholder="Enter subscription type"
          placeholderTextColor="#b0b0b0"
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => history.push('/profile')}>
        <Text style={styles.backButtonText}>Back to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#b0b0b0',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#0059ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#ff4040',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditProfile;
