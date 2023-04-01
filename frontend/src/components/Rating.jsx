import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HStack } from "@chakra-ui/react";

export default function Rating({ rating }) {
	let stars = [];
	while (rating > 0) {
		stars.push(<AiFillStar />);
		rating--;
	}
	while (stars.length < 5) {
		stars.push(<AiOutlineStar />);
	}
	return <HStack fontSize="md">{stars}</HStack>;
}
