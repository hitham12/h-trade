import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

	// Setting up the initial states using
	// react hook 'useState'
	const [search, setSearch] = useState("");
	const [crypto, setCrypto] = useState([]);
	let mylist = {}
	let totalprice = 0
	const [users, setUsers] = useState(null);

	// Fetching crypto data from the API only
	// once when the component is mounted
	useEffect(() => {
		xx()
		yy()
	}, []);
	const xx = () => {
		Axios.get(
			`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`
		).then((res) => {
			setCrypto(res.data.coins);
		});
	}
	const yy = () => {
		axios.get("http://localhost:4001/trading/api").then((res) => {
			setUsers(res.data);
		});
	}

	const oncoinclick = (coin) => {
		if (coin) {
			// console.lo[g(users[0]._id);
			const coinn = {
				coins2: (coin.price)
			}
			axios.put(`http://localhost:4001/trading/api/pricecoins2/${users[0]._id}`, coinn)
				.then((res) => {
					if (res.status === 200) {
						alert("done")
					}
					else {
						alert("Something went wrong")
					}
				}).catch((err) => {
					console.log('ERROR')
				})
		} else {
			// setMsgFavoritesCart('You Should Fill in the input to Added Your Coment')
		}


		////
		// console.log("oncoinclick", coin)
		// mylist[coin.name] = mylist[coin.name] ? mylist[coin.name] + 1 : 1
		// totalprice += coin.price
		// console.log("mylist", mylist, totalprice)
	}

	return (
		<div className="App">
			<h1>All Cryptocurrencies</h1>
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<table>
				<thead>
					<tr>
						<td>Rank</td>
						<td>Name</td>
						<td>Symbol</td>
						<td>Market Cap</td>
						<td>Price</td>
						<td>Available Supply</td>
						<td></td>
					</tr>
				</thead>
				{/* Mapping all the cryptos */}
				<tbody>
					{/* Filtering to check for the searched crypto */}
					{crypto
						.filter((val) => {
							return val.name.toLowerCase().includes(search.toLowerCase());
						})
						.map((val, id) => {
							return (
								<>
									<tr id={id} >
										<td className="rank">{val.rank}</td>
										<td className="logo">
											<a href={val.websiteUrl}>
												<img src={val.icon} alt="logo" width="30px" />
											</a>

											<p>{val.name}</p>

										</td>
										<td className="symbol">{val.symbol}</td>
										<td>${val.marketCap}</td>
										<td>${val.price.toFixed(2)}</td>
										<td>{val.availableSupply}</td>

										<td className="oncoinclick" onClick={() => oncoinclick(val)}>Add</td>
									</tr>
								</>
							);

						})}
				</tbody>
			</table>
		</div>
	);
}


export default App;
