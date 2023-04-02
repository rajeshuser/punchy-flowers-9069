import { Heading, Text, HStack, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Bill({ cartBill }) {
	return (
		<VStack
			width="80%"
			paddingLeft="30%"
			paddingRight="10%"
			alignItems="stretch"
			textAlign="right"
		>
			<HStack justifyContent="space-between" fontSize="xl">
				<Text>Subtotal</Text>
				<Text>${cartBill}</Text>
			</HStack>
			<HStack justifyContent="space-between" fontSize="xl">
				<Text>Shipping</Text>
				<Text>$30.00</Text>
			</HStack>
			<HStack justifyContent="space-between" fontSize="xl">
				<Text>Tax applicable</Text>
				<Text>$30.00</Text>
			</HStack>
			<HStack
				justifyContent="space-between"
				fontSize="xl"
				fontWeight="bold"
				borderTop="1px solid grey"
			>
				<Text>Total</Text>
				<Text>${cartBill - 60}</Text>
			</HStack>
			<Text textAlign="right" color="blue">
				Get Daily Cash with Gadget Card
			</Text>
			<HStack justifyContent="right">
				<Button
					margin="50px"
					width="70%"
					backgroundColor="#0077ee"
					color="white"
					padding="25px"
					as={Link}
					to="/checkout"
					state={{ totalPayable: cartBill - 60 }}
				>
					Check Out
				</Button>
			</HStack>
		</VStack>
	);
}
