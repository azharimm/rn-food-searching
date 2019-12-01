import React from 'react'
import { View, Text, StyleSheet } from 'react-native' 

const ResultsScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    console.log(id)
    return (
        <>
            <Text>Result Screen</Text>
        </>
    )
}

const styles = StyleSheet.create({})

export default ResultsScreen