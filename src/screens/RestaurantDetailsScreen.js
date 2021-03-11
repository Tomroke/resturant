import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const RestaurantDetailsScreen = ({navigation}) => {
    const [restaurant, setRestaurant] = useState(null)
    const id = navigation.getParam('id')

    const getRestaurant = async (id) => {
        const response = await yelp.get(`${id}`)
        setRestaurant(response.data)
    }

    useEffect(() => {
        getRestaurant(id)
    }, [])

    if (!restaurant) {
        return null
    }

    console.log(restaurant.photos)

    return (
        <View>
            <Text>{restaurant.name}</Text>
            <FlatList
                data={restaurant.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image 
                        source={{uri: item}}
                        style={style.image}
                    />
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        height:200,
        width:300,
        marginTop:5,
        marginBottom:5,
        borderRadius: 8

    }
})

export default RestaurantDetailsScreen