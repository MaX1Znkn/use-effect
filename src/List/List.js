const List = ({ state, setActiveItem }) => {
	const onClick = (event) => {
		setActiveItem(Number(event.target.id));
	};

	return (
		<div>
			{state.map((item) => {
				return (
					<button
						key={item.id}
						id={item.id}
						type="button"
						onClick={onClick}
					>
						{item.name}
					</button>
				);
			})}
		</div>
	);
};

export default List;
