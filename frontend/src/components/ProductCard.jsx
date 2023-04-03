import { Image, VStack, Heading, Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import iPhone from "../resources/iPhone.jpg";
import iWatch from "../resources/iWatch.jpg";
import Airpod from "../resources/Airpod.jpg";

export default function ProductCard({ product }) {
	const images = { iPhone, iWatch, Airpod };
	console.log(images, product.category);
	return (
		<VStack
			margin="auto"
			justifyContent="center"
			alignItems="center"
			backgroundColor="#eeeeff"
			borderRadius="30px"
			padding="50px"
			gap="10px"
			boxShadow="base"
			as={Link}
			to={`/products/${product._id}`}
		>
			<Image src={images[product.category]} width="70%" margin="0px 50px 50px 50px" />
			<Heading fontSize="lg" color="blue">
				{product.name}
			</Heading>
			<HStack justifyContent="center" alignItems="center">
				<Text>Color</Text>
				<Box
					width="15px"
					height="15px"
					borderRadius="10px"
					backgroundColor={product.color.toLowerCase()}
				></Box>
			</HStack>
			<Heading fontSize="md">${product.price}</Heading>
			<Rating rating={product.rating} />
		</VStack>
	);
}
