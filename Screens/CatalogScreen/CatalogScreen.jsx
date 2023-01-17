import { View, StyleSheet } from 'react-native'
import React from 'react'

import AlbumSection from '../../Components/AlbumSection/AlbumSection'

const SECTIONS = [
    {
        title: 'Hip-Hop',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://imgur.com/do32uRl.png',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://imgur.com/do32uRl.png',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://imgur.com/do32uRl.png',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://imgur.com/do32uRl.png',
            },
        ],
    },
    {
        title: 'R&B',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1011/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1012/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1013/200',
            },
        ],
    },
    {
        title: 'More..',
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1020/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1024/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1027/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1035/200',
            },
        ],
    },
];

const CatalogScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AlbumSection navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default CatalogScreen