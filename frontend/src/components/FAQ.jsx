import { Stack, VStack, HStack, Text, Box } from "@chakra-ui/react";
import { BiGlasses } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { TbZoomMoney } from "react-icons/tb";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Heading,
} from "@chakra-ui/react";

const questionsAndAnswers = [
	{
		question: "When will I get my items?",
		answer: "By entering a zip code, you’ll get estimated delivery and pickup dates for your items. You’ll get a final delivery date after you place your order. Delivery estimates are based on item availability and the shipping option you choose. For pickup, you’ll choose a pickup date and store during checkout.",
	},
	{
		question: "Can I pick up my items at an Apple Store?",
		answer: "Yes. If you choose pickup, you’ll select a store and a pickup date for your items during checkout. Not all items are available for pickup. We’ll send you a text message when your items are ready for pickup.",
	},
	{
		question:
			"How do I learn what my Apple Store is doing to make shopping and services safer for customers?",
		answer: "We’re putting safety first by taking extra measures to ensure a clean, safer environment for our customers. This includes health screenings, requiring the use of face masks, and limiting store occupancy. We have also added new pickup options for customers.",
	},
	{
		question: "What are my payment options?",
		answer: "We accept Apple Pay, most credit and debit cards, PayPal, and Apple Store Gift Cards — though PayPal, Apple Store Gift Cards, and financing options may not be available for all products. Financing options are also available to qualifying customers. You can call 1‑800‑MY‑APPLE for more information.",
	},
	{
		question: "How is sales tax calculated?",
		answer: "The tax listed on the Bag and Checkout pages is an estimate. Your invoice will reflect the final total tax, which includes state taxes, local taxes, and any applicable fees.",
	},
	{
		question: "Does Apple offer an education discount?",
		answer: "Yes. Apple offers special pricing for students, teachers, administrators, staff members, and homeschooling programs. If you think you qualify, visit the Apple Store for Education to place your order.",
	},
	{
		question: "What are my financing options?",
		answer: "Now you can pay monthly and interest-free◊ for eligible items when you choose to check out with Apple Card Monthly Installments. And if you’re buying an iPhone, Mac, iPad, or Apple Watch, you can add a trade-in and pay even less.",
	},
];

export default function FAQ() {
	return (
		<VStack marginTop="50px" gap="20px" alignItems="stretch" padding="0px 100px 100px 100px">
			<Heading textAlign="left">FAQ</Heading>

			<Box backgroundColor="#333" color="white" textAlign="center" padding="10px">
				ALL YOUR DOUBTS RESOLVED
			</Box>

			<Accordion allowToggle>
				{questionsAndAnswers.map((qna, i) => (
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box
									as="span"
									flex="1"
									textAlign="left"
									paddingTop="10px"
									paddingBottom="10px"
								>
									Que {i + 1}. {qna.question}
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4} textAlign="left">
							Ans {i + 1}. {qna.answer}
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</VStack>
	);
}
