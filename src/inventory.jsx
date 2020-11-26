import coffee from "../src/static/A_small_cup_of_coffee.jfif";
import hazelnut_latte_cold from "../src/static/hazelnut_latte_cold.jpeg";
import chai_latte from "../src/static/chai_latte.jfif";
import earl_grey_tea from "../src/static/earl_grey_tea.jfif";
import iced_caramel_macchiato from "../src/static/iced_caramel_macchiato.jpg";
import matcha_latte from "../src/static/matcha_latte.jpg";
import redbull from "../src/static/redbull.jpg";
import nitro_cold_brew from "../src/static/nitro_cold_brew.jpg";
import green_tea from "../src/static/green_tea.jpg";

const inventory = [
	{
		name: "Coffee",
		image: coffee,
		temperature: "Hot Drinks Only",
		beverageType: "Coffee",
		caffeineType: "Caffeinated",
		price: 1.99
	},
	{
		name: "Hazelnut Latte",
		image: hazelnut_latte_cold,
		temperature: "Cold Drinks Only",
		beverageType: "Coffee",
		caffeineType: "Caffeinated",
		price: 2.99
	},
	{
		name: "Chai Latte",
		image: chai_latte,
		temperature: "Hot Drinks Only",
		beverageType: "Tea",
		caffeineType: "Caffeinated",
		price: 4.99
	},
	{
		name: "Earl Grey Tea",
		image: earl_grey_tea,
		temperature: "Hot Drinks Only",
		beverageType: "Tea",
		caffeineType: "Caffeinated",
		price: 1.99
	},
	{
		name: "Iced Caramel Macchiato",
		image: iced_caramel_macchiato,
		temperature: "Cold Drinks Only",
		beverageType: "Coffee",
		caffeineType: "Caffeinated",
		price: 5.99
	},
	{
		name: "Matcha Latte",
		image: matcha_latte,
		temperature: "Hot Drinks Only",
		beverageType: "Tea",
		caffeineType: "Caffeinated",
		price: 3.99
	},
	{
		name: "Red Bull",
		image: redbull,
		temperature: "Cold Drinks Only",
		beverageType: "Energy Drinks",
		caffeineType: "Caffeinated",
		price: 3.99
	},
	{
		name: "Nitro Cold Brew",
		image: nitro_cold_brew,
		temperature: "Cold Drinks Only",
		beverageType: "Coffee",
		caffeineType: "Caffeinated",
		price: 5.99
	},
	{
		name: "Green Tea",
		image: green_tea,
		temperature: "Hot Drinks Only",
		beverageType: "Tea",
		caffeineType: "Caffeinated",
		price: 1.99
	}
];

export default inventory;