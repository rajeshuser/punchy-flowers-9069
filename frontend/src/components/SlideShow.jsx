import slide1 from "../resources/slides/slide1.png";
import slide2 from "../resources/slides/slide2.png";
import slide3 from "../resources/slides/slide3.png";
import slide4 from "../resources/slides/slide4.png";
import slide5 from "../resources/slides/slide5.png";
import slide6 from "../resources/slides/slide6.png";
import slide7 from "../resources/slides/slide7.png";
import slide8 from "../resources/slides/slide8.png";
import slide9 from "../resources/slides/slide9.png";
import slide10 from "../resources/slides/slide10.png";

import { HStack, Image, Box } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

export default function SlideShow() {
	const [activeIndex, setActiveIndex] = useState(0);
	const timer = useRef();

	useEffect(() => {
		if (!timer.current) {
			// setInterval(() => {
			// 	setActiveIndex((activeIndex) => (activeIndex + 1) % slides.length);
			// }, 2000);
		}
		return () => clearInterval(timer.current);
	}, []);

	return (
		<Box
			width="97vw"
			margin="auto"
			paddingTop="10px"
			paddingBottom="10px"
			position="relative"
			top="0"
			left="0"
			height="55vw"
		>
			{slides.map((slide, index) => (
				<Image
					key={index}
					src={slides[activeIndex]}
					width="100%"
					transition="opacity 1s ease-out"
					opacity={index === activeIndex ? 1 : 0}
					position="absolute"
				/>
			))}
		</Box>
	);
}
