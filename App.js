import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import music_data from './src/music-data.json';
import SongCard from './src/components/SongCard';
import SearchBar from './src/SearchBar/SearchBar';

export default function App() { 
  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeperator = () => <View style={styles.seperator} />
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.container}>
        <FlatList 
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
        />   
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  seperator : {
    borderWidth :1 ,
    borderColor: '#eceff1'
  }
});
