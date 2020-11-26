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
import coffee from "../../static/A_small_cup_of_coffee.jfif";

{/* 
	IMenuItem {
		image: {img}
		temperature: ["Hot", "Cold"],
		beverageType: ["Coffee", "Tea", "Energy Drink"],
		caffeineType: ["Caffeinated", "Decaf"],
		price: {price}
	}
*/}

const useStyles = makeStyles({
	card: {
		width: "18%",
		padding: 10,
		marginRight: "5%",
		marginBottom: "5%"
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
		color: "#f50a97"
	},
	drinkDescriptionRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	descriptionIcon: {
		marginRight: "4%"
	}
});

export default function MenuItem(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardMedia 
				component="img"
				className={classes.cardMedia}
				image={props.image}				
			/>
			<Typography variant="h5">{props.name}</Typography>

			<div>
				<div className={classes.drinkDescriptionRow}>
					{props.temperature === "Hot" 
						? <WhatshotIcon fontSize="small" className={classes.descriptionIcon} />
						: <AcUnitIcon fontSize="small" className={classes.descriptionIcon} />
					}
					<Typography variant="body1" display="inline">
						{props.temperature === "Hot Drinks Only" ? "Hot" : "Cold"}	
					</Typography>
				</div>
			</div>

			<div>
				<div className={classes.drinkDescriptionRow}>
					{props.beverageType === "Coffee"
						? <LocalCafeIcon fontSize="small" className={classes.descriptionIcon} />
						: props.beverageType === "Energy Drink" 
							? <EmojiObjectsIcon fontSize="small" className={classes.descriptionIcon} />
							: <EmojiFoodBeverageIcon fontSize="small" className={classes.descriptionIcon} />
					}
					<Typography variant="body1" display="inline">
						{props.beverageType}	
					</Typography>
				</div>
			</div>

			<div>
				<div className={classes.drinkDescriptionRow}>
					<FlashOnIcon fontSize="small" className={classes.descriptionIcon} />
					<Typography variant="body1" display="inline">
						{props.caffeineType}	
					</Typography>
				</div>
			</div>

			<div className={classes.priceSection}>
				<Typography variant="h5">${props.price}</Typography>
				<Button size="small" variant="outlined" className={classes.addToCartButton}>
					Add to Cart
				</Button>
			</div>

		</Card>
	);
}