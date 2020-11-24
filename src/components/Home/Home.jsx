import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";

const useStyles = makeStyles({
	homeContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "2%",
	},
	homeBodyContainer: {
		display: "flex",
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	title: {
		color: "#f50a97",
		marginBottom: "2%"
	}
});

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.homeContainer}>
			<Typography variant="h2" className={classes.title}>The CIT Caffeine Shop </Typography>
			<div className={classes.homeBodyContainer}>
				<Menu />
				<Cart />
			</div>
		</div>
	);
}