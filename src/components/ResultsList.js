import React from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation'

const ResultList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => 
                        navigation.navigate('ResultShow', {id: item.id})}
                    >
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },  
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
        
    }
})

export default withNavigation(ResultList)