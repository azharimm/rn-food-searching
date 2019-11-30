import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async (term) => {
        console.log('hi there')
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        }catch(e) {
            console.log(e)
            setErrorMessage('Something went wrong')
        }
    }
    useEffect(() => {
        searchApi('pasta')
    }, [])
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={(term) =>searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen