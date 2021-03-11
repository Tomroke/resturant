import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer r1Z_n-B7X5Et_K8-xUVncCpUSEAJfRfLiygMmPgcV6Ga9aB5wJBuuUJrwwh-dWEvRajJ9RSOmqTBe3JXlIHKFRQoNTh89j5CH4KxSMoCknKsLfY4s_qf4voIArcbYHYx'
    }
})

// Client ID

// _IdARG4CEZNA_kmngrWLCg
// API Key

// r1Z_n-B7X5Et_K8-xUVncCpUSEAJfRfLiygMmPgcV6Ga9aB5wJBuuUJrwwh-dWEvRajJ9RSOmqTBe3JXlIHKFRQoNTh89j5CH4KxSMoCknKsLfY4s_qf4voIArcbYHYx
