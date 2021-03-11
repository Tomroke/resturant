import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultsDisplay = ({result}) => {
    return (
        <View style={style.container}>
            <Image 
                source={{uri: result.image_url}} 
                style={style.image}
            />
            <Text style={style.name}>
                {result.name}
            </Text>
            <Text> 
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginLeft: 15
    }, 
    image: {
        width:250,
        height: 120,
        borderRadius: 8,
        marginBottom: 4
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold'
    }
    
})

export default ResultsDisplay