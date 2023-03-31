import { Text, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import iPhone14Pro from "../resources/iPhone14Pro.png";
import iPhone14 from "../resources/iPhone14.png";
import iWatch8 from "../resources/iWatch8.png";
import iPad from "../resources/iPad.png";
import macAndPod from "../resources/macAndPod.png";
import musicAndOffers from "../resources/musicAndOffers.png";
import SlideShow from "../components/SlideShow";

export default function Home() {
	return (
		<VStack>
			<Text padding="10px">
				Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone
				11 or higher &nbsp;
				<Link to="/products?category=phone" style={{ color: "blue" }}>
					<u>Shop iPhone</u>
				</Link>
			</Text>
			<Link to="/products?search=iPhone 14 Pro">
				<Image src={iPhone14Pro} alt="iPhone14Pro" width="97vw"/>
			</Link>
			<Link to="/products?search=iPhone 14">
				<Image src={iPhone14} alt="iPhone14Pro" width="97vw" />
			</Link>
			<Link to="/products?search=iWatch 8">
				<Image src={iWatch8} alt="iPhone14Pro" width="97vw" />
			</Link>
			<Link to="/products?search=iPhone">
				<Image src={iPad} alt="iPhone14Pro" width="97vw" />
			</Link>
			<Link to="/products?search=Airpod">
				<Image src={macAndPod} alt="iPhone14Pro" width="97vw" />
			</Link>
			<Link to="/">
				<Image src={musicAndOffers} alt="iPhone14Pro" width="97vw" />
			</Link>
			<SlideShow />
		</VStack>
	);
}
