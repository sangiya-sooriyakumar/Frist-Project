import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';

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

const BrowseEpisodes = () => {
  const history = useHistory();

  const renderEpisode = ({ item }) => (
    <TouchableOpacity
      style={styles.episodeContainer}
      onPress={() => history.push(`/episode/${item.id}`)}
    >
      <Text style={styles.episodeTitle}>{item.title}</Text>
      <Text style={styles.episodeDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse Episodes</Text>
      <FlatList
        data={episodes}
        renderItem={renderEpisode}
        keyExtractor={(item) => item.id}
        style={styles.episodeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  episodeList: {
    marginTop: 10,
  },
  episodeContainer: {
    backgroundColor: '#1C1C1C',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  episodeTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  episodeDescription: {
    color: '#b0b0b0',
    fontSize: 14,
    marginTop: 5,
  },
});

export default BrowseEpisodes;
