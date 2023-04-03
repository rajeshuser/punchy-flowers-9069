import { VStack, HStack, Input, Image, Checkbox, Heading, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PlaceOrderButton from "../components/PlaceOrderButton";

export default function Ckeckout() {
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpiry, setCardExpiry] = useState("");
	const [cardCVV, setCardCVV] = useState("");
	const [cardHolder, setCardHolder] = useState("");
	const [isCardValid, setIsCardValid] = useState(false);
	const totalPayable = 1000;

	function updateIsCardValid() {
		if (
			isCardNumberValid(cardNumber) &&
			isCardExpiryValid(cardExpiry) &&
			isCardCVVValid(cardCVV) &&
			isCardHolderValid(cardHolder)
		) {
			setIsCardValid(true);
		} else {
			setIsCardValid(false);
		}
	}

	useEffect(() => {
		updateIsCardValid();
	}, [cardNumber, cardExpiry, cardCVV, cardHolder]);

	return (
		<VStack width="50%" margin="100px auto" alignItems="stretch">
			<Heading>Card details</Heading>
			<HStack justifyContent="center" width="100%">
				<span style={{ fontWeight: "bold" }}>100% Secure</span>
				<Image src="/src/assets/CheckoutStrip.png" />
			</HStack>
			<Input
				type="number"
				placeholder="Card Number (12 digits)"
				value={cardNumber}
				onChange={({ target: { value } }) => {
					if (value.length > 12) {
						return;
					}
					setCardNumber(value);
				}}
			/>
			<HStack justifyContent="space-between" width="100%">
				<Input
					type="text"
					placeholder="Expiry Date (mm/yyyy)"
					value={cardExpiry}
					onChange={({ target: { value } }) => {
						if (
							value !== "" &&
							(value.length > 7 ||
								(isNumber(value[value.length - 1]) === false &&
									value[value.length - 1] !== "/"))
						) {
							return;
						}
						if (value.length > 2 && value.includes("/") === false) {
							let mm = +(value[0] + value[1]);
							if (mm > 31) {
								mm = value[0];
							}
							value = mm + "/" + value.substring(2);
						}
						setCardExpiry(value);
					}}
				/>
				<Input
					type="number"
					placeholder="CVV Number (3 digits)"
					value={cardCVV}
					onChange={({ target: { value } }) => {
						if (value.length > 3) {
							return;
						}
						setCardCVV(value);
					}}
				/>
			</HStack>
			<Input
				type="text"
				placeholder="Cardholder Name"
				value={cardHolder}
				onChange={({ target: { value } }) => setCardHolder(value)}
			/>
			<Checkbox defaultChecked>Secure this card as per RBI guidelinesLearn More</Checkbox>
			<br />
			{isCardValid && (
				<Heading fontSize="xl" color="orange.500" textAlign="center">
					Amount Rs. {totalPayable} will be sent to Lens Shop
				</Heading>
			)}
			<br />
			<PlaceOrderButton isDisabled={isCardValid == false} />
		</VStack>
	);
}

function isNumber(string) {
	return Number(string).toString() !== "NaN";
}

function isCardNumberValid(cardNumber) {
	return cardNumber.length == 12 && isNumber(cardNumber);
}

function isCardExpiryValid(cardExpiry) {
	return cardExpiry.length == 7 && cardExpiry.includes("/");
}

function isCardCVVValid(cardCVV) {
	return cardCVV.length == 3 && isNumber(cardCVV);
}

function isCardHolderValid(cardHolder) {
	return cardHolder.length > 0;
}
