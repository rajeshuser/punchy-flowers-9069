import {
	HStack,
	VStack,
	Stack,
	Heading,
	Box,
	Select,
	Text,
	Button,
	Image,
	Center,
	Checkbox,
} from "@chakra-ui/react";
import iPhone from "../resources/iPhone.jpg";
import iWatch from "../resources/iWatch.jpg";
import Airpod from "../resources/Airpod.jpg";
import { updateQuantity } from "../redux/user/creators";
import { removeProduct } from "../redux/user/creators";

export default function CartProduct({ product }) {
	const images = { iPhone, iWatch, Airpod };

	const handleRemoveProduct = (event) => {
		removeProduct({ productId: product._id });
	};

	const handleQuantityChange = (event) => {
		const quantity = +event.target.value;
		updateQuantity({ productId: product._id, quantity });
	};

	return (
		<Stack
			flexDirection={{ base: "column", lg: "row" }}
			padding="10px"
			width="80%"
			borderTop="1px solid grey"
			borderBottom="1px solid grey"
		>
			<Center flex="1">
				<Image src={images[product.category]} width="50%" />
			</Center>
			<VStack flex="2">
				<HStack width="100%" justifyContent="space-between">
					<Text fontSize="30px">{product.name}</Text>
					<Text fontSize="30px">${product.price}</Text>
					<Select width="100px" onChange={handleQuantityChange}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</Select>
					<Button onClick={handleRemoveProduct}>Remove</Button>
				</HStack>
				<VStack alignItems="stretch" borderTop="1px solid grey" paddingTop="20px">
					<HStack fontSize="lg" fontWeight="bold" justifyContent="space-between">
						<Text>GadgetCare+ for The Product</Text>
						<Checkbox isChecked={true} />
					</HStack>
					<Text textAlign="left">
						Get up to two years of unlimited repairs for accidental damage protection
						and additional tech support Learn moreabout GadgetCare+ for the product
					</Text>
				</VStack>
				<HStack
					width="100%"
					borderTop="1px solid grey"
					paddingTop="20px"
					textAlign="left"
					alignItems="start"
				>
					<VStack flex="1" alignItems="stretch">
						<Text>Expected delivery time</Text>
						<Text>Tue, Apr 4 — $8.00</Text>
						<Text>Wed, Apr 5 — Free</Text>
					</VStack>
					<VStack flex="1" alignItems="stretch">
						<Text>Pick up at an Apple Store near you</Text>
						<Text color="blue">Find a store</Text>
					</VStack>
				</HStack>
			</VStack>
		</Stack>
	);
}
