import { Box } from "@chakra-ui/react";

export default function Divider({ thickness = 1, color = "black" }) {
	return <Box height={`${thickness}px`} width="100%" backgroundColor={color}></Box>;
}
