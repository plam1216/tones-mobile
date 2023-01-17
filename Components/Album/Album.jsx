import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


const Album = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image
                source={{
                    uri: item.uri,
                }}
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.text}</Text>
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
        color: 'rgba(255, 255, 255, 1)',
        marginTop: 5,
    },
});

export default Album