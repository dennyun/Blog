import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Detail() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do post</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: '#000',
        fontSize: 22
    }
})