import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

const useStyles = makeStyles({
	card: {
		width: "8rem",
		padding: 10,
		margin: "5%"
	},
	cardMedia: {
		height: 140,
		borderRadius: "50%",
	},
	priceSection: {
		marginTop: "5%"
	},
	addToCartButton: {
		marginTop: "2%",
		color: "#f50a97",
		fontSize: 10 
	},
	drinkDescriptionRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	descriptionIcon: {
		marginRight: "4%"
	},
	quantity: {
		color: "#f50a97"
	}
});

export default function CartItem(props) {
	const classes = useStyles();

	const onRemoveFromCartButtonClick = () => {
		const { [props.name]:_, ...updatedCartItems } = props.cartItems;
		props.setCartItems(updatedCartItems);
	}

	return (
		<Card className={classes.card}>
			<CardMedia 
				component="img"
				className={classes.cardMedia}
				image={props.image}				
			/>
			<Typography variant="h6">{props.name}</Typography>

			<div>
				<div className={classes.drinkDescriptionRow}>
					{props.temperature === "Hot Drinks Only" 
						? <WhatshotIcon fontSize="small" className={classes.descriptionIcon} />
						: <AcUnitIcon fontSize="small" className={classes.descriptionIcon} />
					}
					<Typography variant="caption" display="inline">
						{props.temperature === "Hot Drinks Only" ? "Hot" : "Cold"}	
					</Typography>
				</div>
			</div>

			<div>
				<div className={classes.drinkDescriptionRow}>
					{props.beverageType === "Coffee"
						? <LocalCafeIcon fontSize="small" className={classes.descriptionIcon} />
						: props.beverageType === "Energy Drinks" 
							? <EmojiObjectsIcon fontSize="small" className={classes.descriptionIcon} />
							: <EmojiFoodBeverageIcon fontSize="small" className={classes.descriptionIcon} />
					}
					<Typography variant="caption" display="inline">
						{props.beverageType}	
					</Typography>
				</div>
			</div>

			<div>
				<div className={classes.drinkDescriptionRow}>
					<FlashOnIcon fontSize="small" className={classes.descriptionIcon} />
					<Typography variant="caption" display="inline">
						{props.caffeineType}	
					</Typography>
				</div>
			</div>

			<div className={classes.priceSection}>
				<Typography variant="h6">
					Qty: <span className={classes.quantity}>{props.quantity}</span>
				</Typography>
				<Typography variant="h6">${props.price}</Typography>
				<Button 
					size="small" 
					variant="outlined" 
					className={classes.addToCartButton}
					onClick={onRemoveFromCartButtonClick}
				>
					Remove from Cart
				</Button>
			</div>

		</Card>
	);
}