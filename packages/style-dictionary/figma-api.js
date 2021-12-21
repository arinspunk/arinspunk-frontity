import fetch from "node-fetch"; // https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
import fs from "fs";
import {figmaApiKey, figmaId} from './figma-keys.js';

function getColor(stylesArtboard) {
    const color = {};
    const colorAtrboard = stylesArtboard.filter(item => {
        return item.name === "color";
    })[0].children;
    colorAtrboard.map(item => {
        function rbaObj(obj) {
            return item.fills[0].color[obj] * 255;
        }
        const colorObj = {
            [item.name]: {
                value: `rgba(${rbaObj("r")}, ${rbaObj("g")}, ${rbaObj("b")}, ${
                    item.fills[0].color.a
                })`,
                type: "color"
            }
        };
        Object.assign(color, colorObj);
    });
    return color;
}

function getSize(stylesArtboard) {
    const size = {};
    const sizeAtrboard = stylesArtboard.filter(item => {
        return item.name === "size";
    })[0].children;
    sizeAtrboard.map(item => {
        const spacerObj = {
            [item.name]: {
                value: `${item.absoluteBoundingBox.height}px`,
                type: "size"
            }
        };
        Object.assign(size, spacerObj);
    });
    return size;
}

function getFont(stylesArtboard) {
    const font = {};
    const fontStylesAtrboard = stylesArtboard.filter(item => {
        return item.name === "typography";
    })[0].children;
    fontStylesAtrboard.map((fontItem, i) => {
        let subFonts = {};
        fontItem.children.map(subFontItem => {
            let subSubFonts = {}
            if(typeof subFontItem.children == 'object') {
                subFontItem.children.map(subSubFontItem =>{
                    let subSubFontObj = {
                        [subSubFontItem.name]: {
                            ...(fontItem.name == 'size' && {
                                value: `${subSubFontItem.style.fontSize}px`,
                                type: "font-size"
                            }),
                            ...(fontItem.name == 'line-height' && {
                                value: `${subSubFontItem.style.lineHeightPercent}%`,
                                type: `${fontItem.name}`
                            }),
                            category: "typography"
                        }
                    }
                    Object.assign(subSubFonts, subSubFontObj);
                });
            } else {
                let subSubFontObj = {
                    ...(fontItem.name == 'weight' && {
                        value: `${subFontItem.style.fontWeight}`,
                        type: "font-weight"
                    }),
                    ...(fontItem.name == 'family' && {
                        value: `${subFontItem.style.fontFamily}`,
                        type: "font-family"
                    }),
                    category: "typography"
                }
                Object.assign(subSubFonts, subSubFontObj);
            }
            let subFontObj = {
                [subFontItem.name]: subSubFonts
            }
            Object.assign(subFonts, subFontObj);
        });
        let fontObj = {
            [fontItem.name]: subFonts
        };
        Object.assign(font, fontObj);
    });
    return font;
}

// MAIN FUNCTION
async function getStylesArtboard(figmaApiKey, figmaId) {
    const result = await fetch("https://api.figma.com/v1/files/" + figmaId, {
        method: "GET",
        headers: {
            "X-Figma-Token": figmaApiKey
        }
    });
    const figmaTreeStructure = await result.json();
    const stylesArtboard = figmaTreeStructure.document.children.filter(item => {
        return item.name === "styles";
    })[0].children;
    let baseTokeensJSON = {
        token: {
            size: {},
            color: {},
            font: {}
        }
    };
    Object.assign(baseTokeensJSON.token.size, getSize(stylesArtboard));
    Object.assign(baseTokeensJSON.token.color, getColor(stylesArtboard));
    Object.assign(baseTokeensJSON.token.font, getFont(stylesArtboard));
    const content = JSON.stringify(baseTokeensJSON, null, 4);
    fs.writeFile('src/base.json', content, function (err) {
        if (err) throw err;
        console.log('\n');
        console.log('\x1b[1;32m','👌👌','JSON file with Figma data has been created successfully!','\n');
        console.log('\x1b[1;34m','📝👉','For convert this file in token variables run: `npm run tokens`','\n\n\n','\x1b[1;37m');
    });
}

getStylesArtboard(figmaApiKey,figmaId).catch( e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
});
