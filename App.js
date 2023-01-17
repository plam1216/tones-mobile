import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import AlbumSection from './Components/AlbumSection/AlbumSection';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tones</Text>
      <AlbumSection/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 700,
    marginTop: 40,
  },
});
