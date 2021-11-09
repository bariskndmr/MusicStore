import React from 'react';
import {StyleSheet, TextInput } from 'react-native';
export default SearchInput = () => {
    return (

        <TextInput style={styles.input}
            placeholder= 'Ara'
        />
    );
}

const styles = StyleSheet.create({
    input : {
        backgroundColor: '#eceff0',
        padding : 10,
        marginHorizontal: 5,
        borderRadius : 5,
    }
});