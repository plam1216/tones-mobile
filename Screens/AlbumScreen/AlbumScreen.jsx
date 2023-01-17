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
    <View>
      <Text>AlbumScreen</Text>
      <Image
        source={{
          uri: selectedAlbum.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text>{selectedAlbum.name}</Text>
      <Text>{selectedAlbum.description}</Text>
      {selectedAlbum.tracklist.map(song => <Text key={song.name}>Name: {song.name}</Text>)}
    </View>
    // <View>
    //   {selectedAlbum.tracklist ? loaded() : loading()}
    // </View>
  )
}


const styles = StyleSheet.create({
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
});

export default AlbumScreen