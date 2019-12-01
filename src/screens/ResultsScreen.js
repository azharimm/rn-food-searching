import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native' 
import yelp from '../api/yelp'

const ResultsScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    console.log(result)
    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResults(id)
    }, [])

    return (
        <>
            <Text>Result Screen</Text>
        </>
    )
}

const styles = StyleSheet.create({})

export default ResultsScreen