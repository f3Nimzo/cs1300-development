import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FilterAndSearchOptions from "../FilterAndSearchOptions/FilterAndSearchOptions";
import { findByLabelText } from "@testing-library/react";
import MenuItem from "../MenuItem/MenuItem";

const useStyles = makeStyles({
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		// width: "60vw",
		width: "100%",
		marginLeft: "4%"
	}
});

export default function Menu() {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}>
			<FilterAndSearchOptions />
			<MenuItem />
		</div>
	);
}