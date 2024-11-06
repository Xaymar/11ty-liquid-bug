import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
	// Passthroughs
	eleventyConfig.addPassthroughCopy({ "./assets" : "/" });

	eleventyConfig.setLiquidParameterParsing("builtin");
	
	// Plugins
	eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
	"dir": {	
		"output": "build",
		"input": "source",
		"data": "../data",
		"layouts": "../layouts",
		"includes": "../includes",
	},
}
