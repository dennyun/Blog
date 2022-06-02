import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Search() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Procurar por posts</Text>
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