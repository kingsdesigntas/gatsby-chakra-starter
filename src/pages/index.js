import React from "react";
import Layout from "src/components/Layout";
import HeadSEO from "src/components/HeadSEO";
import {
	Box,
	Heading,
	Container,
	Text,
	VStack,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import { BiRun } from "react-icons/bi";

const index = () => {
	return (
		<Layout>
			<HeadSEO
				title="Hit the ground running | Gatsby Chakra Starter"
				description="Hit the ground running with this Gatsby starter project featuring Chakra UI for styling & full Mdx support with automatic image optimisation."
			/>
			<Box bg="gray.50" py="8rem">
				<Container maxW="container.md">
					<VStack spacing="2rem">
						<BiRun size={64} />
						<Heading p="2rem" color="white" bg="yellow.500">
							This is Gatsby Chakra Starter
						</Heading>
						<Text>Hit the ground running with Chakra UI and Gatsby!</Text>
						<UnorderedList>
							<ListItem>Chakra UI with dark theme disabled</ListItem>
							<ListItem>
								Mdx Support with automatic Gatsby Image transformation
							</ListItem>
							<ListItem>Preact by default</ListItem>
							<ListItem>Gatsby Root Imports</ListItem>
							<ListItem>SEO Friendly</ListItem>
							<ListItem>SCSS for general styling</ListItem>
							<ListItem>Typeface from FontSource</ListItem>
							<ListItem>React Icons</ListItem>
						</UnorderedList>
					</VStack>
				</Container>
			</Box>
		</Layout>
	);
};

export default index;
