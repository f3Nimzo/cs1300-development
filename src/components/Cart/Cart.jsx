import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import CartItem from "../CartItem/CartItem";

const useStyles = makeStyles({
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "39vw",
		marginRight: "4%",
	},
	cartContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		border: "3px solid #f50a97",
		borderRadius: 10,
		marginTop: "2%",
		paddingTop: "2%"
	},
	cartItemsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
		width: "25vw"
	},
	emptyCart: {
		height: "40vh",
		width: "20vw",
		border: "3px solid #f50a97",
		borderRadius: 10,
		marginTop: "2%"
	}, 
	checkoutButton: {
		marginTop: "2%",
		color: "#f50a97",
		fontSize: 10 
	}
});

// Component that represents the Cart for the user.
export default function Cart(props) {
	const classes = useStyles();

	return (
		<div className={classes.mainContainer}>
			<Typography variant="h5">Cart</Typography>
			{/* Display an empty cart if there are no items selected*/}
			{Object.keys(props.cartItems).length === 0 
				? <div className={classes.emptyCart}></div>
				: 
					<div className={classes.cartContainer}>
						<Typography variant="h5">
							Total Cost: ${Object.values(props.cartItems).reduce((acc, item) => 
							acc += (item.quantity * item.price), 0).toFixed(2)}
						</Typography>
						<Button
							variant="outlined"
							className={classes.checkoutButton}
							onClick={() => alert(`Total Cost: $${Object.values(props.cartItems).reduce((acc, item) => 
							acc += (item.quantity * item.price), 0).toFixed(2)}`)}
						>
							Checkout
						</Button>
						<div className={classes.cartItemsContainer}>
							{Object.values(props.cartItems).map(item =>
								<CartItem 
									cartItems={props.cartItems}
									setCartItems={props.setCartItems}
									name={item.name}
									image={item.image}
									temperature={item.temperature}
									beverageType={item.beverageType}
									caffeineType={item.caffeineType}
									price={item.price}
									quantity={item.quantity}
								/>
							)}	
						</div>
					</div>
			}
		</div>
	)
}