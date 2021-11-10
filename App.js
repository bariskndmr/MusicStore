import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import music_data from './src/music-data.json';
import SongCard from './src/components/SongCard';
import SearchBar from './src/SearchBar/SearchBar';

export default function App() { 
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeperator = () => <View style={styles.seperator} />
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList)
    };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChanged={handleSearch}/>
      <View style={styles.container}>
        <FlatList 
        keyExtractor={item => item.id}
        data={list}
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
