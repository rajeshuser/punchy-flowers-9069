import { Image, VStack, Heading, Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
			<Image
				src={"https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_960_720.png"}
				width="70%"
				margin="0px 50px 50px 50px"
			/>
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
		</VStack>
	);
}
