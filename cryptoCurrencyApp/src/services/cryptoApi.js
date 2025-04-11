import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";    

const cryptoApiHeaders = {
    'x-rapidapi-key': '41300365a3mshd3cb0c346763d5cp11e8cdjsneebe066923b7',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"
    
const createRequest = (url) => ({url,headers: cryptoApiHeaders})
    
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),    
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query:() => createRequest('/coiins')
        })
    })

})
    
    
export const {useGetCryptosQuery} = cryptoApi;

    
    
    
    
    // const url = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
    // const options = {
    // 	method: 'GET',
    // 	headers: {
    // 		'x-rapidapi-key': '41300365a3mshd3cb0c346763d5cp11e8cdjsneebe066923b7',
    // 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    // 	}
    // };

    // try {
    // 	const response = await fetch(url, options);
    // 	const result = await response.text();
    // 	console.log(result);
    // } catch (error) {
    // 	console.error(error);
    // }   