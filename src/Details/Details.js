import { useEffect, useState } from "react";

const Details = ({ info }) => {
	const [componentState, setComponentState] = useState({
		avatar: "/",
		details: {
			city: "",
			company: "",
			position: "",
		},
	});
	const [isOk, setOk] = useState(false);

	useEffect(() => {
		const data = async () => {
			setOk(false);
			try {
				const response = await fetch(
					`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				setComponentState(data);
				setOk(true);
			} catch (e) {
				console.error(e);
			}
		};
		if (info.id) {
			data();
		}
	}, [info.id]);

	let body = (
		<div>
			<img src={componentState.avatar} alt="..." />
			<div>
				<h5>{componentState.name}</h5>
			</div>
			<ul>
				<li>City:{componentState.details.city}</li>
				<li>Company: {componentState.details.company}</li>
				<li>Position: {componentState.details.position}</li>
			</ul>
		</div>
	);

	return <div>{isOk ? body : ""}</div>;
};

export default Details;
