import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CatalogScreen from './Screens/CatalogScreen/CatalogScreen';
import AlbumScreen from './Screens/AlbumScreen/AlbumScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
        />
        <Stack.Screen
          name="SelectedAlbum"
          component={AlbumScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
