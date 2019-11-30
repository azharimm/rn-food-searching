import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const ResultList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultList