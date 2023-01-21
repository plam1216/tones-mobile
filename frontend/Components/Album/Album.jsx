import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'


const Album = ({ item, navigation }) => {
    return (
        <View style={styles.item}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('AlbumScreen', { 
                        name: item.name, 
                        description: item.description,
                        uri: item.uri,
                        tracklist: item.tracklist,
                    })
                }} >
                <Image
                    source={{
                        uri: item.uri,
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
            </TouchableWithoutFeedback>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 10,
    },
    itemPhoto: {
        width: 200,
        height: 200,
    },
    itemText: {
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default Album