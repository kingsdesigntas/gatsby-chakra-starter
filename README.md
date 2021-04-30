<h1 style="text-align: center; border: none;">Gatsby Chakra Starter</h1>

By [KingsDesign](https://kingsdesign.com.au)

Hit the ground running with this Gatsby starter project featuring Chakra UI for styling & full Mdx support with automatic image optimisation.

- Chakra UI with dark theme disabled
- Mdx Support with automatic Gatsby Image transformation
- Preact by default
- Gatsby Root Imports
- SEO Friendly
- Typeface from FontSource
- React Icons

<hr />

<h2>Getting Started</h2>

Here's some things you might want to do before you start working:

- Update package.json with details about your project
- Update siteMetadata in gatsby-config.js
- [Change the default font](#fonts)
- [Update your Chakra UI theme](#theme) in src/@chakra-ui/gatsby-plugin/theme.js
- [Update your default social sharing image](#shareimage) in src/components/HeadSEO.js

<hr />

<h3 id="fonts">Using a different font</h3>

By default, this project uses Fontsource's npm package for Encode Sans, and imports it via the custom Chakra UI theme.

To use a different font from Fontsource:

- Run <code>npm remove @fontsource/encode-sans || yarn remove @fontsource/encode-sans</code>
- Browse [fontsource.org](https://fontsource.org/) and find the package for the font you want
- Install using the provided commands
- Open src/@chakra-ui/gatsby-plugin/theme.js
- Remove imports for Encode Sans
- Add imports for your selected Fontsource package

<h3 id="theme">Updating your Chakra UI Theme</h3>

This project uses a custom Chakra UI theme which can be found in Open src/@chakra-ui/gatsby-plugin/theme.js.

By default, this project has some custom colors & fonts, has <code>useSystemColorMode</code> set to false, and sets the default colour mode to <code>light</code>.

See [Chakra UI's theme customization documentation](https://chakra-ui.com/docs/theming/customize-theme) for information about customising this theme, or simply delete src/@chakra-ui if you only want to use the default Chakra UI theme.

<h3 id="shareimage">Updating your default social sharing image</h3>

This project's HeadSEO components sets a default <code>og:image</code> and <code>twitter:image</code>. It also accepts an image prop which can be used to assign a different social sharing image for a page.

To update the default image, add your image file to the src/images folder. Then open src/components/HeadSEO.js and change "defaultSocialShareImage" in the graphql query to the name of your desired default image. <strong>Take note that the graphql query is filtering by name, so you should ensure the image file has a unique name, and you do not include its extension in the query</strong>.
