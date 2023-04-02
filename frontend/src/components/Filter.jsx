import { HStack, VStack, Text, Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/products/creators";

export default function Filter() {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("Any");
	const [order, setOrder] = useState("Any");
	const [color, setColor] = useState("Any");
	const [display, setDisplay] = useState("Any");
	const [battery, setBattery] = useState("Any");
	const [weight, setWeight] = useState("Any");
	const [faceLock, setFaceLock] = useState("Any");
	const [generation, setGeneration] = useState("Any");

	const dispatch = useDispatch();

	useEffect(() => {
		const query = {
			search,
			sort,
			order,
			color,
			display,
			battery,
			weight,
			faceLock,
			generation,
		};
		dispatch(getProducts(query));
	});

	return (
		<VStack position="sticky" top="10px" alignItems="stretch">
			<Input
				type="search"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				backgroundColor="white"
				marginBottom="10px"
				placeholder="Search..."
			/>
			<Accordion backgroundColor="#bbccdd">
				<FilterItem name="Sort" state={sort} setState={setSort} values={["asc", "desc"]} />
				<FilterItem
					name="Order"
					state={order}
					setState={setOrder}
					values={["price", "rating"]}
				/>
				<FilterItem
					name="Color"
					state={color}
					setState={setColor}
					values={[
						"Purple",
						"Gold",
						"Silver",
						"Black",
						"Blue",
						"Yellow",
						"Red",
						"Green",
						"Pink",
					]}
				/>
				<FilterItem
					name="Display"
					state={display}
					setState={setDisplay}
					values={["Ratina", "Liquid Ratina", "Super Ratina"]}
				/>
				<FilterItem
					name="Battery"
					state={battery}
					setState={setBattery}
					values={[11, 12, 13, 14, 16]}
					unit="hr"
				/>
				<FilterItem
					name="Weight"
					state={weight}
					setState={setWeight}
					values={[150, 170, 200, 220, 250]}
					unit="gm"
				/>
				<FilterItem
					name="FaceLock"
					state={faceLock}
					setState={setFaceLock}
					values={[true, false]}
				/>
				<FilterItem
					name="Generation"
					state={generation}
					setState={setGeneration}
					values={[1, 2, 3, 4, 5]}
				/>
			</Accordion>
		</VStack>
	);
}

function FilterItem({ name, state, setState, values, unit }) {
	return (
		<AccordionItem>
			<AccordionButton>
				<HStack justifyContent="space-between" width="100%" paddingRight="10px">
					<Text>{name}</Text>
					<Text>{`${getStringForValue(state)} ${
						state === "Any" || unit === undefined ? "" : unit
					}`}</Text>
				</HStack>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel>
				<RadioGroup
					onChange={(string) => {
						setState(getValueForString(string));
					}}
					colorScheme="blue"
					value={state}
				>
					<VStack alignItems="start" paddingLeft="50px">
						{values.map((value) => (
							<Radio key={value} value={value}>
								{`${getStringForValue(value)} ${unit ? unit : ""}`}
							</Radio>
						))}
					</VStack>
				</RadioGroup>
			</AccordionPanel>
		</AccordionItem>
	);
}

function getValueForString(string) {
	if (string === "true" || string === "false") {
		return string === "true" ? true : false;
	}
	if (Number.isNaN(+string) === false) {
		return +string;
	}
	return string;
}

// if (string === "ascending" || string === "descending") {
// 	return capitalizeFirstLetter(string);
// }
// if (string === "price" || string === "rating") {
// 	return capitalizeFirstLetter(string);
// }

function getStringForValue(value) {
	if (value === "ascending" || value === "descending") {
		return capitalizeFirstLetter(value);
	}
	if (value === "price" || value === "rating") {
		return capitalizeFirstLetter(value);
	}
	switch (typeof value) {
		case "number":
			return String(value);
		case "boolean":
			return value ? "Yes" : "No";
		default:
			return value;
	}
}

function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.substring(1);
}
