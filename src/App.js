import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Coins from './pages/Coins';
import CoinDetails from './pages/CoinDetails';

function App() {
  return (
    <div className="grid-container">
        <Router>
            <Header />
            <main className="bg-gray-100">
                <div className="container-none mx-auto py-3">
                    <Switch>
                        <Route path="/" exact component={Coins} />
                        <Route path="/coins/:coinId" component={CoinDetails} />
                        <Route>404 Not Found!</Route>
                    </Switch>
                </div>
            </main>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
