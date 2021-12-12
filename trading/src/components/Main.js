import React from 'react';
import axios from 'axios';
import DataDate from './DataDate';
import Header from './Header';
import Route from './Route';
import Pricing from './Pricing';
import Login from './Login';
import Register from './Register';
import Crypto from './Crypto';
import Market from './Market';
import Home from './home';
import Pay from './pay';



const Main = () => {
    const [resultsCount, setResultsCount] = React.useState([]);
    const [inputDate, setInputDate] = React.useState('2021-10-29');

    React.useEffect(() => {
        getDataTrading();
    }, [inputDate])
    const getDataTrading = async () => {
        const response = await axios.get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${inputDate}?adjusted=true&apiKey=KpVVztJXnIch5GvwOuhunIYdpzay4zUe`)
        console.log(response.data.results, "res");
        setResultsCount(response.data.results)
    }
    const dateInput = (e) => {
        console.log(e.target.value, 'date');
        setInputDate(e.target.value)
    }
    return (
        <>
        <Header />

        <Route path="/">
          {
                    resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >
        <Route path="/Home">
                {
                    <Home />
                    // resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >
        
        <Route path="/pricing">
                {
                    <Pricing />
                    // resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >
        <Route path="/login">
                {
                    <Login />
                    // resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >
        
        <Route path="/Register">
                {
                    <Register />
                    // resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >
        <Route path="/Crypto">
                {
                    <Crypto />
                    // resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >
        <Route path="/Pay">
                {
                    <Pay />
                    // resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >
        <Route path="/market">
                {
                    <Market />
                    // resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } 
        </Route >








            <div>
                {/* {
                    resultsCount ? <DataDate resultsCount={resultsCount} dateInput={dateInput} /> : ''
                } */}
            </div>
        </>
    )
}
export default Main