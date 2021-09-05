import axios from 'axios';
import {getCurrency} from './util';

const PATH = 'https://api.coingecko.com/api/v3/coins/'; // Api path

/* Function to get all coins */
export const getCoins = async () => {
    return await axios.get(PATH + 'markets?vs_currency=' + getCurrency() + '&order=market_cap_desc&per_page=10&page=1&sparkline=true').catch((err) => {
        console.log('ERR', err);
    });
}

/* Function to get coin by id */
export const getCoinById = async (id) => {
    return await axios.get(PATH + id).catch((err) => {
        console.log('ERR', err);
    });
}
