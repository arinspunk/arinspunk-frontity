import styleDictionary from "style-dictionary";

const StyleDictionary = styleDictionary.extend({
    source: ["src/**/*.json"],
    platforms: { // https://amzn.github.io/style-dictionary/#/formats?id=javascriptes6
        js: {
            transformGroup: "js",
            buildPath: "../arinspunk-theme/src/components/styles/tokens/",
            files: [
                {
                    destination: "color.js",
                    format: "javascript/es6",
                    filter: {
                        type: "color"
                    }
                },
                {
                    destination: "typography.js",
                    format: "javascript/es6",
                    filter: {
                        type: "typography"
                    }
                },
                {
                    destination: "size.js",
                    format: "javascript/es6",
                    filter: {
                        type: "size"
                    }
                }
            ]
        }
    }
});
StyleDictionary.buildAllPlatforms();
console.log('\x1b[32m','\n','Enjoy them!','\n');
