import coffee from "../src/static/A_small_cup_of_coffee.jfif";
import hazelnut_latte_cold from "../src/static/hazelnut_latte_cold.jpeg";
import chai_latte from "../src/static/chai_latte.jfif";
import earl_grey_tea from "../src/static/earl_grey_tea.jfif";
import iced_caramel_macchiato from "../src/static/iced_caramel_macchiato.jpg";
import matcha_latte from "../src/static/matcha_latte.jpg";
import redbull from "../src/static/redbull.jpg";
import nitro_cold_brew from "../src/static/nitro_cold_brew.jpg";
import green_tea from "../src/static/green_tea.jpg";
import coffee_decaf from "../src/static/coffee_decaf.jpg";
import espresso from "../src/static/espresso.jpg";
import caffe_mocha from "../src/static/caffe_mocha.jpg";
import monster from "../src/static/monster.jpg";
import eggnog_latte from "../src/static/eggnog_latte.jpg";
import orange_iced_tea from "../src/static/orange_iced_tea.jpg";
import bubble_milk_tea from "../src/static/bubble_milk_tea.jpg";

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
	}, 
	{
		name: "Decaf Coffee",
		image: coffee_decaf,
		temperature: "Hot Drinks Only",
		beverageType: "Coffee",
		caffeineType: "Decaf",
		price: 1.99
	},
	{
		name: "Espresso",
		image: espresso,
		temperature: "Hot Drinks Only",
		beverageType: "Coffee",
		caffeineType: "Caffeinated",
		price: 1.99
	},
	{
		name: "Caffe Mocha",
		image: caffe_mocha,
		temperature: "Hot",
		beverageType: "Coffee",
		caffeineType: "Caffeinated",
		price: 4.99
	},
	{
		name: "Monster Energy Drink",
		image: monster,
		temperature: "Cold",
		beverageType: "Energy Drinks",
		caffeineType: "Caffeinated",
		price: 2.99
	},
	{
		name: "Eggnog Latte",
		image: eggnog_latte,
		temperature: "Hot",
		beverageType: "Coffee",
		caffeineType: "Decaf",
		price: 6.99
	},
	{
		name: "Orange Iced Tea",
		image: orange_iced_tea,
		temperature: "Cold",
		beverageType: "Tea",
		caffeineType: "Decaf",
		price: 2.99
	},
	{
		name: "Bubble Milk Tea",
		image: bubble_milk_tea,
		temperature: "Cold",
		beverageType: "Tea",
		caffeineType: "Caffeinated",
		price: 3.99
	}
];

export default inventory;