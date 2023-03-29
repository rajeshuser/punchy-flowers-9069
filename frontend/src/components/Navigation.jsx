import { Box, useDisclosure, Center, Image, HStack } from "@chakra-ui/react";
import logo from "../resources/logo.jpg";
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";

const navItems = [
	{ label: <Image src={logo} height="50px" />, path: "/" },
	{ label: "Store", path: "/products" },
	{ label: "iPhones", path: "/products?category=phone" },
	{ label: "iWatches", path: "/products?category=watch" },
	{ label: "AirPods", path: "/products?category=airpod" },
	{ label: <FaUserAlt size="30px" />, path: "/account" },
	{
		label: <BsCart size="30px" />,
		path: "/cart",
	},
];

export default function Navigation() {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<Box id="navbar">
			<MediumScreenNavigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
			<LargeScreenNavigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
		</Box>
	);
}

function MediumScreenNavigation({ activeIndex, setActiveIndex }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const activeStyle = {
		color: "blue",
		fontWeight: "bold",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	const defaultStyle = {
		color: "black",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<HStack
			display={{ base: "flex", lg: "none" }}
			border="1px solid black"
			justifyContent="start"
			paddingLeft="50px"
			paddingRight="50px"
		>
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Click a link</DrawerHeader>
					<DrawerBody display="flex" flexDirection="column" gap="10px">
						{navItems.map((navItem, index) => (
							<Link
								to={navItem.path}
								style={index === activeIndex ? activeStyle : defaultStyle}
								key={index}
								onClick={() => {
									setActiveIndex(index);
									onClose();
								}}
							>
								{navItem.label}
							</Link>
						))}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<GiHamburgerMenu size="30px" onClick={onOpen} />
			<Center fontSize="xl" flex="1" height="50px" fontWeight="bold">
				Gadget Store
			</Center>
		</HStack>
	);
}

function LargeScreenNavigation({ activeIndex, setActiveIndex }) {
	const activeStyle = {
		color: "blue",
		fontWeight: "bold",
	};

	const defaultStyle = {
		color: "black",
	};

	return (
		<HStack
			display={{ base: "none", lg: "flex" }}
			border="1px solid black"
			justifyContent="space-around"
			paddingLeft="100px"
			paddingRight="100px"
		>
			{navItems.map((navItem, index) => (
				<Link
					to={navItem.path}
					style={index === activeIndex ? activeStyle : defaultStyle}
					key={index}
					onClick={() => setActiveIndex(index)}
				>
					{navItem.label}
				</Link>
			))}
		</HStack>
	);
}
