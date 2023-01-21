import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const AlbumScreen = ({ route }) => {
  console.log(route)
  const selectedAlbum = route.params

  // const loaded = () => {
  //   let tracks = selectedAlbum.tracklist.map(song => <Text key={song.name}>Name: {song.name}</Text>)

  //   return (
  //     <View>
  //       <Text>AlbumScreen</Text>
  //       <Image
  //         source={{
  //           uri: selectedAlbum.uri,
  //         }}
  //         style={styles.itemPhoto}
  //         resizeMode="cover"
  //       />
  //       <Text>{selectedAlbum.name}</Text>
  //       <Text>{selectedAlbum.description}</Text>
  //       {tracks}
  //     </View>
  //   )
  // }

  // const loading = () => {
  //   return (
  //     <Text>Loading Tracks...</Text>
  //   )
  // }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: selectedAlbum.uri,
        }}
        style={styles.albumArt}
        resizeMode="cover"
      />
      <Text style={styles.albumName}>{selectedAlbum.name}</Text>
      <Text>{selectedAlbum.description}</Text>
      {selectedAlbum.tracklist.map(song =>
        <Text
          key={song.name}
          style={styles.tracklist}>
          
          {song.name}

        </Text>)}
    </View>
    // <View>
    //   {selectedAlbum.tracklist ? loaded() : loading()}
    // </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    // justifyContent: 'center',
  },
  albumArt: {
    width: 250,
    height: 250,
  },
  albumName: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: '1.6rem',
  },
  tracklist: {
  }
});

export default AlbumScreen