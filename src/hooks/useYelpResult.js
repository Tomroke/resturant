import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default() => {
    const [businesses, setBusinesses] = useState([])
    const [errorMes, setErrorMes] = useState('')

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get(
                'search',
                {params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'stockholm'
                }
            })
            setBusinesses(response.data.businesses)
        }catch (err){
            setErrorMes('Something went wrong\n' + err)
        }
    }

    useEffect(() => {
        searchApi('Pizza')
    }, [])

    return [searchApi, businesses, errorMes]
}