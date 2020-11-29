import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Typography } from "@material-ui/core";
import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";

const useStyles = makeStyles({
	mainContainer: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
		marginBottom: "2%",
	},
	headerWithDropdownContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%"
	},
	dropdownRowContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%"
	},
	formRowHeader: {
		marginBottom: "2%"
	},
	formControl: {
		minWidth: 90
	},
	formSelect: {
		fontSize: 13
	},
	menuItem: {
		fontSize: 13
	}
});

// Component containing the dropdown selectors for filtering and sorting options
export default function FilterAndSearchOptions(props) {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}>
			<div className={classes.headerWithDropdownContainer}>
				<Typography variant="h5" className={classes.formRowHeader}>Filter</Typography>
				<div className={classes.dropdownRowContainer}>
					{/* Filter by beverage temperature */}
					<FormControl size="small" variant="outlined" className={classes.formControl}>
						<Select
							value={props.temperatureFilter}
							renderValue={() => props.temperatureFilter}
							onChange={props.onTemperatureFilterChange}
							className={classes.formSelect}
						>
							<MenuItem className={classes.menuItem} value="Hot and Cold Drinks">Hot and Cold Drinks</MenuItem>
							<MenuItem className={classes.menuItem} value="Hot Drinks Only">Hot Drinks Only</MenuItem>
							<MenuItem className={classes.menuItem} value="Cold Drinks Only">Cold Drinks Only</MenuItem>
						</Select>
					</FormControl>

					{/* Filter by beverage type */}
					<FormControl size="small" variant="outlined" className={classes.formControl}>
						<Select
							value={props.typeFilter}
							renderValue={() => props.typeFilter}
							onChange={props.onTypeFilterChange}
							className={classes.formSelect}
						>
							<MenuItem className={classes.menuItem} value="All Beverage Types">All Beverage Types</MenuItem>
							<MenuItem className={classes.menuItem} value="Coffee">Coffee</MenuItem>
							<MenuItem className={classes.menuItem} value="Tea">Tea</MenuItem>
							<MenuItem className={classes.menuItem} value="Energy Drinks">Energy Drinks</MenuItem>
						</Select>
					</FormControl>

					{/* Filter by caffeine type */}
					<FormControl size="small" variant="outlined" className={classes.formControl}>
						<Select
							value={props.caffeineFilter}
							renderValue={() => props.caffeineFilter}
							onChange={props.onCaffeineFilterChange}
							className={classes.formSelect}
						>
							<MenuItem className={classes.menuItem} value="Caffeinated and Decaf">Caffeinated and Decaf</MenuItem>
							<MenuItem className={classes.menuItem} value="Caffeinated">Caffeinated</MenuItem>
							<MenuItem className={classes.menuItem} value="Decaf">Decaf</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>

			{/* Sorting Dropdown */}
			<div className={classes.headerWithDropdownContainer}>
				<Typography variant="h5" className={classes.formRowHeader}>Sort By</Typography>
				<FormControl size="small" variant="outlined" className={classes.formControl}>
					<Select
						value={props.sortMethod}
						renderValue={() => props.sortMethod}
						onChange={props.onSortMethodChange}
						className={classes.formSelect}
					>
						<MenuItem className={classes.menuItem} value="Featured">Featured</MenuItem>
						<MenuItem className={classes.menuItem} value="Lowest Price to Highest">Lowest Price to Highest</MenuItem>
						<MenuItem className={classes.menuItem} value="Highest Price to Lowest">Highest Price to Lowest</MenuItem>
						<MenuItem className={classes.menuItem} value="Alphabetical A-Z">Alphabetical A-Z</MenuItem>
						<MenuItem className={classes.menuItem} value="Alphabetical Z-A">Alphabetical Z-A</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>	
	);
}