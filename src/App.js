import { useEffect, useState } from "react";
import "./App.css";
import Details from "./Details/Details";
import List from "./List/List";

function App() {
	const [state, setState] = useState([]);
	const [activeItem, setActiveItem] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const dataList = await response.json();
				setState(dataList);
			} catch (e) {
				console.error(e);
			}
		};
		getData();
	}, []);

	return (
		<div className="App d-flex">
			{
				<List
					state={state}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
			}
			{activeItem ? <Details info={{ id: activeItem, name: "" }} /> : ""}
		</div>
	);
}

export default App;
