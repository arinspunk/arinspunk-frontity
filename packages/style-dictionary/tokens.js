import styleDictionary from "style-dictionary";

const StyleDictionary = styleDictionary.extend({
    source: ["src/**/*.json"],
    platforms: { // https://amzn.github.io/style-dictionary/#/formats?id=javascriptes6
        js: {
            transformGroup: "js",
            buildPath: "../arinspunk-theme/src/components/tokens/lib/",
            files: [
                {
                    destination: "color/all.js",
                    format: "javascript/es6",
                    filter: {
                        type: "color"
                    }
                },
                {
                    destination: "typography/all.js",
                    format: "javascript/es6",
                    filter: {
                        category: "typography"
                    }
                },
                {
                    destination: "typography/font-family.js",
                    format: "javascript/es6",
                    filter: {
                        type: "font-family"
                    }
                },
                {
                    destination: "typography/font-size.js",
                    format: "javascript/es6",
                    filter: {
                        type: "font-size"
                    }
                },
                {
                    destination: "typography/font-weight.js",
                    format: "javascript/es6",
                    filter: {
                        type: "font-weight"
                    }
                },
                {
                    destination: "typography/line-height.js",
                    format: "javascript/es6",
                    filter: {
                        type: "line-height"
                    }
                },
                {
                    destination: "spacing/all.js",
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

console.log('\n\n\n','\x1b[1;32m','🌍🚀','The files with the tokens are ready.');
console.log('\n','\x1b[1;34m','🥳🎉','Enjoy them!','\n\n\n','\x1b[1;37m');