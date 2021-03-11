import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation'
import ResultsDisplay from './ResultsDisplay'


const ResultsList = ({results, titleHeader, navigation}) => {
    if (!results.length){
        return null
    }


    return <View style={styles.container}>
        <Text style={styles.titleHeaderStyle}>
            {titleHeader}
        </Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(results) => results.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Restaurant', {id: item.id})}
                    >
                        <ResultsDisplay result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleHeaderStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }

})

export default withNavigation(ResultsList)