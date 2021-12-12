import React from 'react';
import './market.css'
// import { useState, useRef } from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
// import App from './Pricing';
const Market = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        axios.get("http://localhost:4001/trading/api").then((res) => {
            setUser(res.data);
            
        });
    }, []);
    // user ? (
    //     <div>
    //         <div>{user.coins}</div>
    //         <div>{user.coins2}</div>
    //     </div>
    // ) : ""
    
    return (
        
        <div>
            {/* {console.log(user)} */}
            {
                user ? user.map((u) => {
                    return (
                        <div>
                            <p class="coin"> Coins: </p>
                            <div class="coins">{u.coins}$</div>
                            <p class="coin1"> Coins2: </p>
                            <div class="coins1">{u.coins2}$</div>
                            <meta charset="UTF-8"></meta>
	<title>E-wallet</title>  
	<link rel="stylesheet" href="E-wallet.css"></link>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

<body>
	<div class="wallet-container text-center">
		<p class="page-title"><i class="fa fa-align-left"></i>My E-wallet<i class="fa fa-user"></i></p>

		<div class="amount-box text-center">
			<img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet"></img>
			<p>Total Balance</p>
			<p class="amount" >{u.coins-u.coins2}$</p>
		</div>

		<div class="btn-group text-center">
			<button type="button" class="btn btn-outline-light">Add Money</button>
			<button type="button" class="btn btn-outline-light">Widthdraw</button>
			</div>

			<div class="txn-history">
				<p><b>History</b></p>
				<p class="txn-list">By Crypto<span class="debit-amount">   <div class="coins1">-{u.coins2}$</div></span></p>

				<p class="txn-list">Joining gift<span class="debit-amount1">+100,000$</span></p>
			</div>

			<div class="footer-menu">
				<div class="row text-center">
					<div class="col-md-3">
						<i class="fa fa-home"></i>
						<p>Home</p>
					</div>

					<div class="col-md-3">
						<i class="fa fa-inbox"></i>
						<p>Inbox</p>
					</div>

					<div class="col-md-3">
						<i class="fa fa-university"></i>
						<p>Bank</p>
					</div>

					<div class="col-md-3">
						<i class="fa fa-barcode"></i>
						<p>Scan</p>
					</div>
				</div>
			</div>
</div>
</body>
                        </div>
                        
                    )

                }) : ""
            }
	

        </div>
    )
}

export default Market;