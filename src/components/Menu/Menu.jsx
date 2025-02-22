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


// Component that contains the list of menu items as well as filtering/sorting options
export default function Menu(props) {
	const [sortMethod, setSortMethod] = useState("Featured");
	const [temperatureFilter, setTemperatureFilter] = useState("Hot and Cold Drinks");
	const [typeFilter, setTypeFilter] = useState("All Beverage Types");
	const [caffeineFilter, setCaffeineFilter] = useState("Caffeinated and Decaf");
	const classes = useStyles();

	// Comparator that sorts based on the currently selected method by the user.
	const customSortComparator = (a, b) => {
		if (sortMethod === "Lowest Price to Highest") {
			return a.price - b.price;
		} else if (sortMethod === "Highest Price to Lowest") {
			return b.price - a.price;
		} else if (sortMethod === "Alphabetical A-Z") {
			if (a.name < b.name) {
				return -1;
			} else if (b.name < a.name) {
				return 1;
			}
			return 0;
		} else if (sortMethod === "Alphabetical Z-A") {
			if (a.name < b.name) {
				return 1;
			} else if (b.name < a.name) {
				return -1;
			}
			return 0;
		}
	};

	// Callbacks for the sorting and filtering dropdowns

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

	// Functions that determine if an item should be included based on the current filters.

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