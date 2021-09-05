import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCoinById} from '../services/apis';
import {formatCurrency, getCurrencySymbol, setMeta} from '../services/util';
import {selectedCoin} from '../store/actions/coinActions';

const CoinDetails = () => {
    const { coinId } = useParams(); // Get route param coinId
    let coin = useSelector((state) => state.coinReducer.coin); // Get selected coin from redux store
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch api data
        getCoinById(coinId).then(res => {
            // Utility method to set dynamic page title
            setMeta({
                title: res.data.name + ' price, ' + res.data.name + ' chart, market cap, and info | CoinGecko',
                description: 'Get ' + res.data.name + ' price ' + res.data.symbol + ' chart, trading volume, market cap, exchanges and more.'
            });
            dispatch(selectedCoin(res.data));
        });
    }, [coinId, dispatch]);

    return (
            <>
            {coin?.market_data?.current_price && (
            <div className="grid grid-cols-2 my-10 overflow-x-hidden coin">
                <div>
                    <label>Rank #{coin.market_cap_rank}</label>
                    <figure className="">
                        <img src={coin.image.small} alt={coin.name} width="32px"></img>
                    </figure>
                    <div className="">
                        <h3 className="text-3xl mb-5">{coin.name}</h3>
                        <p className="flex items-center justify-between">
                            <span className="text-4xl text-gray-600">Price: <span className="text-pink-600">{getCurrencySymbol()}{formatCurrency(coin.market_data.current_price.usd)}</span></span>
                            {/*<button className="px-5 py-3 rounded-xl text-sm font-medium text-white bg-pink-600 hover:bg-pink-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all" onClick={() => addToCart(product_)}>Add to Cart</button>*/}
                        </p>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default CoinDetails;