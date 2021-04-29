import React from "react";
import {
	ThemeProvider,
	ColorModeProvider,
	CSSReset,
	GlobalStyle,
	PortalManager,
	ColorModeScript,
} from "@chakra-ui/react";
import theme from "./src/@chakra-ui/gatsby-plugin/theme";

function WrapRootElement(
	{ element },
	{ isResettingCSS = true, isUsingColorMode = true, portalZIndex = 40 }
) {
	const content = (
		<>
			{isResettingCSS && <CSSReset />}
			<GlobalStyle />
			<PortalManager zIndex={portalZIndex}>{element}</PortalManager>
		</>
	);

	return (
		<ThemeProvider theme={theme}>
			{isUsingColorMode ? (
				<ColorModeProvider options={theme.config}>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					{content}
				</ColorModeProvider>
			) : (
				content
			)}
		</ThemeProvider>
	);
}

export const wrapRootElement = WrapRootElement;
