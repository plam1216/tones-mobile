import { View, StyleSheet } from 'react-native'
import React from 'react'

import AlbumSection from '../../Components/AlbumSection/AlbumSection'


const CatalogScreen = ({ navigation }) => {
    return (
        <AlbumSection navigation={navigation} />
    );
};

const styles = StyleSheet.create({
});

export default CatalogScreen