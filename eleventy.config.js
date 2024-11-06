import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
	"dir": {	
		"output": "build",
		"input": "source",
	},
}
 