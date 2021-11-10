import React from 'react';
import {StyleSheet, TextInput } from 'react-native';
export default SearchBar = props => {
    return (

        <TextInput style={styles.input}
            placeholder= 'Ara'
            onChangeText={props.onChanged}
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