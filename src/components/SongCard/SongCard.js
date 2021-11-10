import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

export default SongCard = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : props.song.imageUrl}}/>
                <View style={styles.textsContainer}>
                    <Text style={styles.title}>{props.song.title}</Text>
                        <View style={styles.contentContainer}>
                            <View style={styles.bottomTextsContainer}>
                                <Text style={styles.artist}>{props.song.artist}</Text>
                                <Text style={styles.year}>{props.song.year}</Text>
                            </View>
                            {props.song.isSoldOut && <View style={styles.soldoutContainer}>
                                <Text style={styles.soldoutText}>TÜKENDİ</Text>
                            </View>}
                        </View>
                        <View style={styles.albumContaniner}>
                            <Text style={styles.albumContainerText}>Albüm</Text>
                        </View>
                </View>
        </View>
    );
}