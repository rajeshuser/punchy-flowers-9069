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
	SimpleGrid,
} from "@chakra-ui/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import batteryIcon from "../resources/batteryIcon.jpg";
import cameraIcon from "../resources/cameraIcon.jpg";
import connectivityIcon from "../resources/connectivityIcon.jpg";
import faceLockIcon from "../resources/faceLockIcon.jpg";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import FAQ from "../components/FAQ";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../globals";
import { addToCart, addToFavourite } from "../redux/user/creators";

export default function SingleProduct() {
	const { _id } = useParams();
	// const [product, setProduct] = useState(null);
	const [product, setProduct] = useState(getDummyProduct());
	const user = useSelector((state) => state.userState.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	console.log(user);

	useEffect(() => {
		getProduct();
		async function getProduct() {
			try {
				const product = await axios({
					method: "get",
					url: `${api}/${_id}`,
				});
				setProduct(product);
			} catch (error) {
				console.log({ message: error.message });
			}
		}
	}, []);

	const handleAddToCart = (event) => {
		// is user logged in
		if (!user) {
			navigate("/login");
		} else {
			dispatch(addToCart({ productId: _id }));
		}
	};

	const handleAddToFavourite = (event) => {
		// is user logged in
		if (!user) {
			navigate("/login");
		} else {
			dispatch(addToFavourite({ productId: _id }));
		}
	};

	if (!product) {
		return (
			<Spinner
				padding="30px"
				margin="200px"
				thickness="7px"
				speed="0.3s"
				emptyColor="gray"
				color="blue"
				size="xl"
			/>
		);
	}

	return (
		<>
			<Stack
				flexDirection={{ base: "column", lg: "row" }}
				justifyContent="start"
				gap="50px"
				padding="50px 100px 50px 100px"
			>
				<Center backgroundColor="#ccddee" borderRadius="20px" flex="2">
					<Image
						src={
							"https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_960_720.png"
						}
						alt={product.name}
						width="50%"
						padding={{ base: "50px", lg: "0" }}
					/>
				</Center>
				<VStack alignItems="start" gap="20px" flex="2">
					<Heading borderBottom="1px solid black" paddingBottom="20px" width="100%">
						{product.name}
					</Heading>
					<HStack width="100%" justifyContent="end" boder="1px solid black">
						<Text>Favourite</Text>
						<MdFavorite
							onClick={handleAddToFavourite}
							fontSize="30px"
							color="red"
							_hover={{ cursor: "pointer" }}
						/>
					</HStack>
					<Heading fontSize="xl">${product.price}</Heading>
					<HStack justifyContent="center" alignItems="center">
						<Text fontWeight="bold">Color</Text>
						<Box
							width="15px"
							height="15px"
							borderRadius="10px"
							backgroundColor={product.color.toLowerCase()}
						></Box>
					</HStack>
					<VStack
						width="100%"
						border="1px solid grey"
						borderRadius="10px"
						padding="10px"
						alignItems="stretch"
					>
						<HStack justifyContent="space-between">
							<Text>Storage</Text>
							<Text>{product.storage} GB</Text>
						</HStack>
						<HStack justifyContent="space-between">
							<Text>Weight</Text>
							<Text>{product[`${product.category}Weight`]} gm</Text>
						</HStack>
						<HStack justifyContent="space-between">
							<Text>Battery</Text>
							<Text>{product.battery} hr</Text>
						</HStack>
						<HStack justifyContent="space-between">
							{product.category === "iPhone" || product.category === "iWatch" ? (
								<>
									<Text>Display</Text>
									<Text>
										{`${product[`${product.category}Size`]} ${
											product.category === "iPhone"
												? "inch"
												: product.category === "iWatch"
												? "mm"
												: null
										}`}
									</Text>
								</>
							) : null}
						</HStack>
					</VStack>

					<br />
					<Button
						width="100%"
						padding="20px"
						border="1px solid blue"
						borderRadius="20px"
						backgroundColor="#ccddee"
						as={Link}
						to="/cart"
					>
						Buy Now
					</Button>
					<Button
						onClick={handleAddToCart}
						width="100%"
						padding="20px"
						border="1px solid blue"
						borderRadius="20px"
						backgroundColor="#ccddee"
					>
						Add To Cart
					</Button>
				</VStack>
				<VStack alignItems="stretch" flex="1">
					<HStack justifyContent="space-between">
						<Image src={batteryIcon} />
						<Text fontWeight="bold">Humongous</Text>
					</HStack>
					<HStack justifyContent="space-between">
						<Image src={cameraIcon} />
						<Text fontWeight="bold">High Definition</Text>
					</HStack>
					<HStack justifyContent="space-between">
						<Image src={connectivityIcon} />
						<Text fontWeight="bold">Fastest</Text>
					</HStack>
					<HStack justifyContent="space-between">
						<Image src={faceLockIcon} />
						<Text fontWeight="bold">Most Secure</Text>
					</HStack>
				</VStack>
			</Stack>
			<FAQ />
		</>
	);
}

function getDummyProduct() {
	return {
		_id: 1,
		name: "iPhone 14 Pro",
		category: "iPhone",
		image: "https://drive.google.com/file/d/12H7kooAglx1Ki3T2pvAI3cRFVxFsX1Ea/view?usp=sharing",
		color: "Green",
		iPhoneSize: 4.7,
		iWatchSize: 44,
		strapMaterial: "Silicon",
		shape: "Round",
		body: "Steel",
		waterResistant: true,
		camera: 5,
		battery: 14,
		touchSensor: false,
		faceLock: true,
		display: "Liquid Ratina",
		storage: 128,
		iPhoneWeight: 220,
		iWatchWeight: 35,
		AirpodWeight: 7,
		connectivity: 4,
		generation: 1,
		rating: 1.9,
		bandSize: "Large",
		price: 45000,
	};
}
