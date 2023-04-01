import { VStack, Text, Spinner } from "@chakra-ui/react";

export default function Loading() {
	return (
		<VStack width="100%" height="50vh" justifyContent="center" alignItems="center">
			<Text fontSize="30px">Loading...</Text>
			<Spinner />
		</VStack>
	);
}
