import { Heading, Stack, HStack, VStack, Box, Text, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import CartProduct from "../components/CartProduct";
import Bill from "../components/Bill";
import axios from "axios";
import { api } from "../globals";

export default function Cart() {
	const user = useSelector((state) => state.userState.user);
	const [cartProducts, setCartProducts] = useState(null);
	// const [cartProducts, setCartProducts] = getDummyProducts();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/login");
			alert("Please login first");
			return;
		}

		getCartProducts();

		async function getCartProducts() {
			try {
				const cartProducts = [];
				for (let { productId } of cartProducts) {
					const response = await axios({
						method: "get",
						url: `${api}/${productId}`,
					});
					const product = response.data;
					cartProducts.push(product);
				}
				setCartProducts(cartProducts);
			} catch (error) {
				console.log({ error: error.message });
			}
		}
	}, []);

	if (!user) {
		return <Loading />;
	}

	return (
		<VStack gap="30px">
			<VStack gap="20px" marginTop="20px" marginBottom="20px">
				<Heading>Your cart total is ${totalCartBill(user.cart, cartProducts)}</Heading>
				<Text fontSize="xl">Free delivery and Free returns</Text>
				<Button
					backgroundColor="#0077ee"
					color="white"
					width="300px"
					as={Link}
					to="/checkout"
					state={{ totalPayable: totalCartBill(user.cart, cartProducts) - 60 }}
				>
					Check Out
				</Button>
			</VStack>
			{cartProducts.map((product) => (
				<CartProduct product={product} />
			))}
			<Bill cartBill={totalCartBill(user.cart, cartProducts)} />
		</VStack>
	);
}

function totalCartBill(cart, cartProducts) {
	let pnq = {};
	for (let { productId, quantity } of cart) {
		pnq[productId] = { quantity };
	}
	for (let cartProduct of cartProducts) {
		pnq[cartProduct._id].price = cartProduct.price;
	}
	let bill = 0;
	for (let id in pnq) {
		bill += pnq[id].quantity * pnq[id].price;
	}
	return bill;
}

function getDummyProducts() {
	return [
		{
			_id: 2,
			name: "iWatch 9",
			category: "Watch",
			image: "https://drive.google.com/file/d/1Ssupy_0WqRGOnip5JPcr7knn-0prCfn5/view?usp=sharing",
			color: "Yellow",
			phoneSize: 4.7,
			watchSize: 42,
			strapMaterial: "Fabric",
			shape: "Round",
			body: "Glass",
			waterResistant: false,
			camera: 12,
			battery: 11,
			touchSensor: false,
			faceLock: true,
			display: "Liquid Ratina",
			storage: 16,
			phoneWeight: 200,
			watchWeight: 35,
			airpodWeight: 7,
			connectivity: 3,
			generation: 3,
			rating: 1.5,
			bandSize: "Medium",
			price: 25000,
		},
		{
			_id: 3,
			name: "AirPods",
			category: "Airpod",
			image: "https://drive.google.com/file/d/1Jd7A_HSGrpKmW4pIr2CNnZvvU4BzjoJu/view?usp=sharing",
			color: "Blue",
			phoneSize: 5.2,
			watchSize: 46,
			strapMaterial: "Fabric",
			shape: "Rectangular",
			body: "Glass",
			waterResistant: true,
			camera: 7,
			battery: 16,
			touchSensor: false,
			faceLock: false,
			display: "Super Ratina",
			storage: 128,
			phoneWeight: 250,
			watchWeight: 35,
			airpodWeight: 4,
			connectivity: 3,
			generation: 2,
			rating: 3.9,
			bandSize: "Large",
			price: 15000,
		},
		{
			_id: 4,
			name: "AirPods Pro",
			category: "Airpod",
			image: "https://drive.google.com/file/d/1UZhy0nIaCDTnAb2V-KBtySTsk2tzbA0E/view?usp=sharing",
			color: "Green",
			phoneSize: 6.5,
			watchSize: 46,
			strapMaterial: "Elastomer",
			shape: "Rectangular",
			body: "Steel",
			waterResistant: true,
			camera: 5,
			battery: 12,
			touchSensor: true,
			faceLock: true,
			display: "Super Ratina",
			storage: 32,
			phoneWeight: 220,
			watchWeight: 25,
			airpodWeight: 4,
			connectivity: 4,
			generation: 2,
			rating: 2.6,
			bandSize: "Large",
			price: 15000,
		},
		{
			_id: 11,
			name: "iPhone 8 SE 1-Gen",
			category: "Phone",
			image: "https://drive.google.com/file/d/12H7kooAglx1Ki3T2pvAI3cRFVxFsX1Ea/view?usp=sharing",
			color: "Purple",
			phoneSize: 5.5,
			watchSize: 42,
			strapMaterial: "Fabric",
			shape: "Round",
			body: "Aluminium",
			waterResistant: false,
			camera: 7,
			battery: 16,
			touchSensor: true,
			faceLock: false,
			display: "Liquid Ratina",
			storage: 16,
			phoneWeight: 200,
			watchWeight: 50,
			airpodWeight: 4,
			connectivity: 5,
			generation: 2,
			rating: 1.9,
			bandSize: "Medium",
			price: 20000,
		},
		{
			_id: 12,
			name: "AirPods Max Pro",
			category: "Airpod",
			image: "https://drive.google.com/file/d/1crTJqUhGAZGla8GWlkzUO5WwRC5OF034/view?usp=sharing",
			color: "Red",
			phoneSize: 4.5,
			watchSize: 40,
			strapMaterial: "Fabric",
			shape: "Round",
			body: "Glass",
			waterResistant: true,
			camera: 12,
			battery: 11,
			touchSensor: true,
			faceLock: true,
			display: "Super Ratina",
			storage: 16,
			phoneWeight: 150,
			watchWeight: 30,
			airpodWeight: 3,
			connectivity: 4,
			generation: 3,
			rating: 3.7,
			bandSize: "Large",
			price: 80000,
		},
	];
}
