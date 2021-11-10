import React from 'react';
import {TextInput } from 'react-native';
import styles from './SearchBar.styles'

export default SearchBar = props => {
    return (
        <TextInput style={styles.input}
            placeholder= 'Ara'
            onChangeText={props.onChanged}
        />
    );
}