import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useHistory } from 'react-router-dom';

const ViewProfile = () => {
  const history = useHistory();

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual image URL or asset
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Sangiya Sooriyakumar</Text>
      </View>

      {/* User Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>E-mail</Text>
        <Text style={styles.detailText}>sangiya1126@gmail.com</Text>

        <Text style={styles.detailLabel}>Subscription</Text>
        <Text style={styles.detailText}>Premium Member</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => history.push('/edit-profile')}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => history.push('/dashboard')}>
        <Text style={styles.backButtonText}>Back to Dashboard</Text>
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
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginBottom: 30,
    width: '100%',
  },
  detailLabel: {
    color: '#b0b0b0',
    fontSize: 14,
    marginBottom: 5,
  },
  detailText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: '#0059ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  editButtonText: {
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

export default ViewProfile;
