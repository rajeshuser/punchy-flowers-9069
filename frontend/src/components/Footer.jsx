import { Box, Stack, VStack, List, ListItem, Text } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Stack
			flexDirection={{ base: "column", md: "row" }}
			justifyContent="space-between"
			textAlign="left"
			padding="10px 50px"
			borderTop="1px solid black"
			gap="10px"
		>
			<VStack alignItems="left">
				<List>
					<ListItem fontWeight="bold">Shop and Learn</ListItem>
					<ListItem>Store</ListItem>
					<ListItem>Mac</ListItem>
					<ListItem>iPad</ListItem>
					<ListItem>iPhone</ListItem>
					<ListItem>Watch</ListItem>
					<ListItem>AirPods</ListItem>
					<ListItem>TV & Home</ListItem>
					<ListItem>AirTag</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>Gift Cards</ListItem>
				</List>
				<List alignItems="left">
					<ListItem fontWeight="bold">Apple Wallet</ListItem>
					<ListItem>Wallet</ListItem>
					<ListItem>Apple Card</ListItem>
					<ListItem>Apple Pay</ListItem>
					<ListItem>Apple Cash</ListItem>
				</List>
			</VStack>

			<VStack alignItems="left">
				<List>
					<ListItem fontWeight="bold">Account</ListItem>
					<ListItem>Manage Your Apple ID</ListItem>
					<ListItem>Apple Store Account</ListItem>
					<ListItem>iCloud.com</ListItem>
				</List>
				<List>
					<ListItem fontWeight="bold">Entertainment</ListItem>
					<ListItem>Apple One</ListItem>
					<ListItem>Apple TV+</ListItem>
					<ListItem>Apple Music</ListItem>
					<ListItem>Apple Arcade</ListItem>
					<ListItem>Apple Fitness+</ListItem>
					<ListItem>Apple News+</ListItem>
					<ListItem>Apple Podcasts</ListItem>
					<ListItem>Apple Books</ListItem>
					<ListItem>Apple Store</ListItem>
				</List>
			</VStack>

			<VStack alignItems="left">
				<List>
					<ListItem fontWeight="bold">Apple Store</ListItem>
					<ListItem>Find a Store</ListItem>
					<ListItem>Today at Apple</ListItem>
					<ListItem>Apple Camp</ListItem>
					<ListItem>Apple Store App</ListItem>
					<ListItem>Certified Refurbished</ListItem>
					<ListItem>Apple Trade In</ListItem>
					<ListItem>Financing</ListItem>
					<ListItem>Carrier Deals at Apple</ListItem>
					<ListItem>Order Status</ListItem>
					<ListItem>Shopping Help</ListItem>
				</List>
			</VStack>

			<VStack alignItems="left">
				<List>
					<ListItem fontWeight="bold"> For Business</ListItem>
					<ListItem>Apple and Business</ListItem>
					<ListItem>Shop for Business</ListItem>
				</List>
				<List>
					<ListItem fontWeight="bold">For Education</ListItem>
					<ListItem>Apple and Education</ListItem>
					<ListItem>Shop for K-12</ListItem>
					<ListItem>Shop for College</ListItem>
				</List>
				<List>
					<ListItem fontWeight="bold">For Healthcare</ListItem>
					<ListItem>Apple in Healthcare</ListItem>
					<ListItem>Health on Apple Watch</ListItem>
					<ListItem>Health Records on iPhone</ListItem>
				</List>
				<List>
					<ListItem fontWeight="bold">For Government</ListItem>
					<ListItem>Shop for Government</ListItem>
					<ListItem>Shop for Veterans and Military</ListItem>
				</List>
			</VStack>
			<VStack alignItems="left">
				<List>
					<ListItem fontWeight="bold">Apple Values</ListItem>
					<ListItem>Accessibility</ListItem>
					<ListItem>Education</ListItem>
					<ListItem>Environment</ListItem>
					<ListItem>Inclusion and Diversity</ListItem>
					<ListItem>Privacy</ListItem>
					<ListItem>Racial Equity and Justice</ListItem>
					<ListItem>Supplier Responsibility</ListItem>
				</List>
				<List>
					<ListItem fontWeight="bold">About Apple</ListItem>
					<ListItem>Newsroom</ListItem>
					<ListItem>Apple Leadership</ListItem>
					<ListItem>Career Opportunities</ListItem>
					<ListItem>Investors</ListItem>
					<ListItem>Ethics & Compliance</ListItem>
					<ListItem>Events</ListItem>
					<ListItem>Contact Apple</ListItem>
				</List>
			</VStack>
		</Stack>
	);
}
