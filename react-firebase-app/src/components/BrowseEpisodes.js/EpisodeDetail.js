import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const episodes = [
  {
    id: '1',
    title: 'Episode 1: The Beginning',
    description: 'An introduction to the series and the journey ahead.',
  },
  {
    id: '2',
    title: 'Episode 2: The Adventure Continues',
    description: 'The main characters embark on an exciting journey.',
  },
  {
    id: '3',
    title: 'Episode 3: Unexpected Twists',
    description: 'The story takes a surprising turn.',
  },
  // Add more episodes as needed
];

const EpisodeDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const episode = episodes.find((ep) => ep.id === id);

  if (!episode) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Episode Not Found</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => history.push('/browse-episodes')}>
          <Text style={styles.backButtonText}>Back to Episodes</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{episode.title}</Text>
      <Text style={styles.description}>{episode.description}</Text>

      {/* Add more details or functionality as needed */}

      <TouchableOpacity style={styles.backButton} onPress={() => history.push('/browse-episodes')}>
        <Text style={styles.backButtonText}>Back to Episodes</Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    color: '#b0b0b0',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
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

export default EpisodeDetail;
