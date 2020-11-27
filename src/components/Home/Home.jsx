import { React, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar } from "@material-ui/core";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles({
	homeContainer: {
		display: "flex",
		flexDirection: "column",
		marginTop: "2%",
	},
	titleContainer: {
		display: "flex",
		flexDirection: "row"
	},
	cafeLogo: {
		alignSelf: "center",
		marginBottom: "2%",
		color: "#f50a97",
		marginLeft: "2%",
	},
	homeBodyContainer: {
		display: "flex",
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	appBar: {
		backgroundColor: "#f50a97",
		width: "100%",
		height: 10,
		marginBottom: "2%"
	},
	title: {
		color: "#f50a97",
		marginBottom: "2%"
	}
});

export default function Home() {
	{/* 
		ICartItems: { [itemName: string]: IMenuItem }
	*/}
	const [cartItems, setCartItems] = useState({});
	const classes = useStyles();

	return (
		<div className={classes.homeContainer}>
			<div className={classes.titleContainer}>
				<DashboardIcon fontSize="large" className={classes.cafeLogo} />
				<Typography variant="h4" className={classes.title}>The CIT Caffeine Shop </Typography>
			</div>
			<AppBar elevation={0} position="relative" className={classes.appBar} />
			<div className={classes.homeBodyContainer}>
				<Menu 
					cartItems={cartItems}
					setCartItems={setCartItems}
				/>
				<Cart 
					cartItems={cartItems}
					setCartItems={setCartItems}
				/>
			</div>
		</div>
	);
}