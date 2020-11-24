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

export default function FilterAndSearchOptions(props) {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}>
			<div className={classes.headerWithDropdownContainer}>
				<Typography variant="h5" className={classes.formRowHeader}>Filter</Typography>
				<div className={classes.dropdownRowContainer}>
					<FormControl size="small" variant="outlined" className={classes.formControl}>
						<Select
							value="Test"
							renderValue={() => "Hot and Cold Drinks"}
							className={classes.formSelect}
						>
							<MenuItem className={classes.menuItem} value="hot">Hot Drinks Only</MenuItem>
							<MenuItem className={classes.menuItem} value="cold">Cold Drinks Only</MenuItem>
						</Select>
					</FormControl>

					<FormControl size="small" variant="outlined" className={classes.formControl}>
						<Select
							value="Test"
							renderValue={() => "All Beverage Types"}
							className={classes.formSelect}
						>
							<MenuItem className={classes.menuItem} value="hot">Coffee</MenuItem>
							<MenuItem className={classes.menuItem} value="cold">Tea</MenuItem>
							<MenuItem className={classes.menuItem} value="energy">Energy Drinks</MenuItem>
						</Select>
					</FormControl>

					<FormControl size="small" variant="outlined" className={classes.formControl}>
						<Select
							value="Test"
							renderValue={() => "All Beverage Types"}
							className={classes.formSelect}
						>
							<MenuItem className={classes.menuItem} value="hot">Caffeinated</MenuItem>
							<MenuItem className={classes.menuItem} value="cold">Decaf</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>

			<div className={classes.headerWithDropdownContainer}>
				<Typography variant="h5" className={classes.formRowHeader}>Sort</Typography>
				<FormControl size="small" variant="outlined" className={classes.formControl}>
					<Select
						value="Test"
						renderValue={() => "Hot and Cold Drinks"}
						className={classes.formSelect}
					>
						<MenuItem className={classes.menuItem} value="hot">Hot Drinks Only</MenuItem>
						<MenuItem className={classes.menuItem} value="cold">Cold Drinks Only</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>	
	);
}