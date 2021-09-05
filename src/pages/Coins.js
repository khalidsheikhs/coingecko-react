import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {formatCurrency, setMeta} from '../services/util';
import {setCoins} from '../store/actions/coinActions'; // setAllCoins,
import {getCoins} from '../services/apis';
import {Link} from 'react-router-dom';
import {getCurrencySymbol} from '../services/util';
import {Sparklines, SparklinesLine} from'react-sparklines';

const Coins = () => {
    let coins = useSelector((state) => state.coinReducer.coins); // Get all products from redux store
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch api data
        getCoins().then(res => {
            // Dispatch action to save data in redux store
            dispatch(setCoins(res.data));
        });
        // Utility method to set dynamic page title
        setMeta({
            title: 'CoinGecko: Cryptocurrency Prices and Market Capitalization',
            description: 'Get cryptocurrency prices, market overview, and analysis such as crypto market cap, trading volume, and more.'
        });
    }, [dispatch]);

    return (
        <>
            {coins && (
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>24 Volume</th>
                            <th>Mkt Cap</th>
                            <th>Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        { /* Check if coins has data then show coin card */
                        coins.map((coin, index) => (
                            <tr key={index}>
                                <td>{coin.market_cap_rank}</td>
                                <td><img src={coin.image} alt={coin.name} width="18px"/> <Link to={'coins/' + coin.id}>{coin.name}</Link> {coin.symbol}</td>
                                <td>{getCurrencySymbol()+formatCurrency(coin.current_price)}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{getCurrencySymbol()+formatCurrency(coin.total_volume)}</td>
                                <td>{getCurrencySymbol()+formatCurrency(coin.market_cap)}</td>
                                <td>
                                    <Sparklines data={coin.sparkline_in_7d.price} height={80} width={135}>
                                        <SparklinesLine style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }} />
                                    </Sparklines>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Coins;