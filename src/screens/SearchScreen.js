import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../component/SearchBar'
import yelpResult from '../hooks/useYelpResult'
import ResultsList from '../component/ResultsList'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, businesses, errorMes] = yelpResult() 

    const filterResultByCost = (price) => {
        return businesses.filter(result => {
            return result.price === price
        })
    }
    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMes ? <Text>{errorMes}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultByCost('$')}
                    titleHeader='$'
                />
                <ResultsList 
                    results={filterResultByCost('$$')}
                    titleHeader='$$'
                    />
                <ResultsList 
                    results={filterResultByCost('$$$')}
                    titleHeader='$$$'
                />
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen