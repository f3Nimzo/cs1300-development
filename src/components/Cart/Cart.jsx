import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	mainContainer: {
		display: "flex",
		width: "35vw",
		marginRight: "4%",
		border: "1px solid black"
	}
});

export default function Cart() {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}></div>
	)
}