import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FilterAndSearchOptions from "../FilterAndSearchOptions/FilterAndSearchOptions";
import { findByLabelText } from "@testing-library/react";
import MenuItem from "../MenuItem/MenuItem";
import inventory from "../../inventory";

const useStyles = makeStyles({
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		marginLeft: "4%"
	},
	menuItemsContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap"
	}
});

export default function Menu(props) {
	const [sortMethod, setSortMethod] = useState("Featured");
	const [temperatureFilter, setTemperatureFilter] = useState("Hot and Cold Drinks");
	const [typeFilter, setTypeFilter] = useState("All Beverage Types");
	const [caffeineFilter, setCaffeineFilter] = useState("Caffeinated and Decaf");
	const classes = useStyles();

	const customSortComparator = (a, b) => {
		if (sortMethod === "Lowest Price to Highest") {
			return a.price - b.price;
		}
	};

	const onSortMethodChange = (e) => {
		setSortMethod(e.target.value);
	}

	const onTemperatureFilterChange = (e) => {
		setTemperatureFilter(e.target.value);
	};

	const onTypeFilterChange = (e) => {
		setTypeFilter(e.target.value);
	};

	const onCaffeineFilterChange = (e) => {
		setCaffeineFilter(e.target.value);
	};

	const matchesTemperatureFilter = (menuItem) => {
		if (temperatureFilter === "Hot and Cold Drinks" 
		||temperatureFilter === menuItem.temperature) {
			return true;
		} 

		return false;
	};

	const matchesTypeFilter = (menuItem) => {
		if (typeFilter === "All Beverage Types" 
		|| typeFilter === menuItem.beverageType) {
			return true;
		}

		return false;
	};

	const matchesCaffeineFilter = (menuItem) => {
		if (caffeineFilter === "Caffeinated and Decaf" 
		|| caffeineFilter === menuItem.caffeineType) {
			return true;
		}

		return false;
	};

	const matchesAllFilters = (menuItem) => {
		if (matchesTemperatureFilter(menuItem) 
		&& matchesTypeFilter(menuItem) 
		&& matchesCaffeineFilter(menuItem)) {
			return true;
		}

		return false;
	};

	return (
		<div className={classes.mainContainer}>
			<FilterAndSearchOptions 
				sortMethod={sortMethod}
				onSortMethodChange={onSortMethodChange}
				temperatureFilter={temperatureFilter}
				typeFilter={typeFilter}
				caffeineFilter={caffeineFilter}
				onTemperatureFilterChange={onTemperatureFilterChange}
				onTypeFilterChange={onTypeFilterChange}
				onCaffeineFilterChange={onCaffeineFilterChange}
			/>
			<div className={classes.menuItemsContainer}>
				{[...inventory].sort(customSortComparator).map(item => 
					matchesAllFilters(item) && 
					<MenuItem 
						cartItems={props.cartItems}
						setCartItems={props.setCartItems}
						name={item.name}
						image={item.image}
						temperature={item.temperature}
						beverageType={item.beverageType}
						caffeineType={item.caffeineType}
						price={item.price}
					/>
				)}
			</div>
		</div>
	);
}