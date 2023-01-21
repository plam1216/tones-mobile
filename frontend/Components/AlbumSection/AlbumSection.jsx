import { View, Text, StyleSheet, SafeAreaView, SectionList, FlatList, Button } from 'react-native'
import React from 'react'

import Album from '../Album/Album';

const SECTIONS = [
    {
        title: 'Hip-Hop',
        horizontal: true,
        data: [
            {
                key: '1',
                name: 'Vacancy I',
                description: 'Hip-Hop and Drill Instrumentals From Scratch',
                uri: 'https://imgur.com/do32uRl.png',
                tracklist: [
                    {
                        name: 'Currents',
                    },
                    {
                        name: 'Vory',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },
            {
                key: '2',
                name: 'Vacancy II',
                description: 'Some Instrumentals',
                uri: 'https://imgur.com/do32uRl.png',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },

            {
                key: '3',
                name: 'Vacancy III',
                description: 'Some Instrumentals',
                uri: 'https://imgur.com/do32uRl.png',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },
            {
                key: '4',
                name: 'Vacancy IV',
                description: 'Some Instrumentals',
                uri: 'https://imgur.com/do32uRl.png',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },
        ],
    },
    {
        title: 'R&B',
        horizontal: true,
        data: [
            {
                key: '1',
                name: 'Item name 1',
                uri: 'https://picsum.photos/id/1011/200',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },
            {
                key: '2',
                name: 'Item name 2',
                uri: 'https://picsum.photos/id/1012/200',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },

            {
                key: '3',
                name: 'Item name 3',
                uri: 'https://picsum.photos/id/1013/200',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },
        ],
    },
    {
        title: 'More..',
        data: [
            {
                key: '1',
                name: 'Item name 1',
                uri: 'https://picsum.photos/id/1020/200',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },
            {
                key: '2',
                name: 'Item name 2',
                uri: 'https://picsum.photos/id/1024/200',
                tracklist: [
                    {
                        name: 'Song 1',
                    },
                    {
                        name: 'Song 2',
                    },
                    {
                        name: 'Song 3',
                    },
                    {
                        name: 'Song 4 ',
                    },
                ]
            },
        ],
    },
];

const AlbumSection = ({ navigation }) => {
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
                                renderItem={({ item }) =>
                                    <Album
                                        item={item}
                                        navigation={navigation}
                                    />
                                }
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