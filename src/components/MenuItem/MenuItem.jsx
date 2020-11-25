import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import coffee from "../../static/A_small_cup_of_coffee.jfif";

const useStyles = makeStyles({
	card: {
		width: "15%",
		padding: 10 
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
		marginRight: "5%"
	}
});

export default function MenuItem(props) {
	const classes = useStyles();

	return (
		<div>
		<Card className={classes.card}>
			<CardMedia 
				component="img"
				className={classes.cardMedia}
				image={coffee}				
			/>
			<Typography variant="h5">Coffee</Typography>

			<div>
				<div className={classes.drinkDescriptionRow}>
					<WhatshotIcon className={classes.descriptionIcon} />
					<Typography variant="body1" display="inline">
						Hot
					</Typography>
				</div>
			</div>

			<div>
				<div className={classes.drinkDescriptionRow}>
					<LocalCafeIcon className={classes.descriptionIcon} />
					<Typography variant="body1" display="inline">
						Coffee
					</Typography>
				</div>
			</div>

			<div>
				<div className={classes.drinkDescriptionRow}>
					<FlashOnIcon className={classes.descriptionIcon} />
					<Typography variant="body1" display="inline">
						Caffeinated	
					</Typography>
				</div>
			</div>

			<div className={classes.priceSection}>
				<Typography variant="h5">$3.99</Typography>
				<Button size="small" variant="outlined" className={classes.addToCartButton}>
					Add to Cart
				</Button>
			</div>

		</Card>
		</div>
	);
}