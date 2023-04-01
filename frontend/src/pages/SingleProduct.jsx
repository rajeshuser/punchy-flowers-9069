import {
	Heading,
	VStack,
	HStack,
	Stack,
	Box,
	Image,
	Center,
	Spinner,
	Text,
	Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleProduct() {
	const { _id } = useParams();
	const [product, setProduct] = useState(getDummyProduct());

	useEffect(() => {
		// getProduct();
		async function getProduct() {
			try {
				const product = await axios({
					method: "get",
					url: "",
				});
				setProduct(product);
			} catch (error) {
				console.log({ message: error.message });
			}
		}
	}, []);

	const handleAddToCart = (event) => {
		// is user logged in
	};

	if (!product) {
		return (
			<Spinner
				padding="30px"
				margin="100px"
				thickness="7px"
				speed="0.3s"
				emptyColor="gray"
				color="blue"
				size="xl"
			/>
		);
	}

	return (
		<Stack
			flexDirection={{ base: "column", lg: "row" }}
			justifyContent="center"
			gap="100px"
			padding="50px"
		>
			<Center>
				<Image
					src={
						"https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_960_720.png"
					}
					alt={product.name}
					width="50%"
				/>
			</Center>
			<VStack alignItems="start">
				<Heading>{product.name}</Heading>
				<Divider color="grey" />
				<Heading fontSize="xl">${product.price}</Heading>
				<Divider color="grey" />
				<HStack justifyContent="center" alignItems="center">
					<Text fontWeight="bold">Color</Text>
					<Box
						width="15px"
						height="15px"
						borderRadius="10px"
						backgroundColor={product.color.toLowerCase()}
					></Box>
				</HStack>
				<br />
				<Button onClick={handleAddToCart}>Add To Cart</Button>
			</VStack>
		</Stack>
	);
}

function Divider({ thickness = 1, color = "black" }) {
	return <Box height={`${thickness}px`} width="100%" backgroundColor={color}></Box>;
}

function getDummyProduct() {
	return {
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
	};
}
