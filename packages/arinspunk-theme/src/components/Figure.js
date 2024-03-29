// File: /packages/my-first-theme/src/components/intro.js
import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import { Container, Row, Col12, Col6 } from "./Shared";
import {
    TokenFontSizeDesktop0,
    TokenFontSizeTablet0,
    TokenFontSizeMobile0,
    TokenFontLineHeightDesktop0,
    TokenFontLineHeightTablet0,
    TokenFontLineHeightMobile0
} from "./tokens/lib/typography/all.js";

const gutterDesktop = "40px";
const gutterTablet = "30px";

const Img = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    if (!post.figure) return null;

    return (
        <>
            <FigureContainer>
                <Row>
                    {post.figure.map((item, index) => {
                        const fullWidth = item.full_width;
                        const quarterWidth = item.quarter_width;
                        const size = item.image.sizes;
                        const srcset = `
                            ${size.small} ${size['small-width']}w,
                            ${size.medium} ${size['medium-width']}w,
                            ${size.medium_large} ${size['medium_large-width']}w,
                            ${size.large} ${size['large-width']}w,
                            ${size.extra_large} ${size['extra_large-width']}w,
                            ${item.image.url} ${item.image.width}w
                        `;
                        const sizes = `
                            (max-width: 1440px) 100vw, ${item.image.width}px
                        `
                        return (
                            <Col6 key={index} full={fullWidth ? 'full' : undefined}>
                                <Figure quarter={quarterWidth ? quarterWidth : undefined} margin={quarterWidth ? quarterWidth : undefined}>
                                    <a href={item.image.url} target="_blank">
                                        <StyledImage
                                            alt={item.image.alt}
                                            srcSet={srcset}
                                            sizes={sizes}
                                            src={size.medium_large}
                                            width={size['medium_large-width']}
                                            height={size['medium_large-height']}
                                        />
                                    </a>
                                    <FigCaption>
                                        {item.caption}
                                    </FigCaption>
                                </Figure>
                            </Col6>
                        )
                    })}
                </Row>
            </FigureContainer>
        </>
    );
}

export default connect(Img);

const FigureContainer = styled(Container)`
    margin-bottom: 110px;
    @media all and (max-width: 991px) {
        margin-bottom: 70px;
    }
    @media all and (max-width: 767px) {
        margin-bottom: 37px;
    }
`;

const Figure = styled.figure`
    width: ${props =>
        props.quarter ? 'calc(50% - '+gutterDesktop+')' : '100%'
    };
    margin: ${props =>
        props.margin == 'center' ? '0 auto 40px' : props.margin == 'right' ? '0 0 40px auto' : '0 0 40px'
    };
    @media all and (max-width: 991px) {
        width: ${props =>
            props.quarter ? 'calc(50% - '+gutterTablet+')' : '100%'
        };
    }
    @media all and (max-width: 767px) {
        width: 100%;
        margin-bottom: 35px;
    }
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const FigCaption = styled.figcaption`
    margin-top: 18px;
    text-align: right;
    font-size: ${TokenFontSizeDesktop0};
    line-height: ${TokenFontLineHeightDesktop0};
    @media all and (max-width: 991px) {
        font-size: ${TokenFontSizeTablet0};
        line-height: ${TokenFontLineHeightTablet0};
    }
    @media all and (max-width: 767px) {
        margin-top: 11px;
        font-size: ${TokenFontSizeMobile0};
        line-height: ${TokenFontLineHeightMobile0};
    }
`;