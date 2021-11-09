import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection : 'row',
    },

    image : {
        width: 100,
        height: 100,
        borderRadius : 50,
    },

    textsContainer : {
        flex : 1,
        padding: 10,
        justifyContent : 'center'
    },

    title : {
        fontWeight: 'bold',
        fontSize : 23,
    },

    contentContainer : {
        flexDirection: 'row'
    },

    bottomTextsContainer : {
        flexDirection : 'row',
        alignItems: 'center',
        flex: 1,
    },
    
    artist : {
        
    },

    year : {
        color: 'gray',
        fontSize : 12,
        marginLeft : 5,
    },

    soldoutContainer : {
        borderWidth : 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
    },

    soldoutText : {
        color: 'red',
        fontSize: 12,
    },
});