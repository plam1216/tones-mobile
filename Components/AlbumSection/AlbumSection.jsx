import { View, Text, Image, StyleSheet, SafeAreaView, SectionList, FlatList } from 'react-native'
import React from 'react'

import Album from '../Album/Album';

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

const AlbumSection = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SectionList
                contentContainerStyle={{ paddingHorizontal: 10 }}
                stickySectionHeadersEnabled={false}
                sections={SECTIONS}
                renderSectionHeader={({ section }) => (
                    <>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                        {/* if horizontal true, render horizontal FlatList */}
                        {section.horizontal &&
                            <FlatList
                                horizontal
                                data={section.data}
                                renderItem={({ item }) => <Album item={item} />}
                                showsHorizontalScrollIndicator={false}
                            />
                        }
                    </>
                )}
                renderItem={({ item, section }) => {
                    // if horizontal true, dont render veritcal Flatlast
                    if (section.horizontal) {
                        return null
                    } else {
                        return <Album item={item} />;
                    }
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 5,
    },
});

export default AlbumSection