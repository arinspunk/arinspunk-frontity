// File: /packages/my-first-theme/src/components/intro.js
import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import { Container, Row, Col6 } from "./Shared";
import {
    TokenFontSizeDesktop0,
    TokenFontSizeTablet0,
    TokenFontSizeMobile0,
    TokenFontLineHeightDesktop0,
    TokenFontLineHeightTablet0,
    TokenFontLineHeightMobile0
} from "./tokens/lib/typography/all.js";

const Img = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    if (!post.figure) return null;

    return (
        <>
            <FigureContainer>
                <Row>
                    {post.figure.map((item, index) => {
                        const size = item.image.sizes;
                        const srcset = `
                            ${size.thumbnail} ${size['thumbnail-width']}w,
                            ${size.medium} ${size['medium-width']}w,
                            ${size.medium_large} ${size['medium_large-width']}w,
                            ${size.large} ${size['large-width']}w,
                            ${size['1536x1536']} ${size['1536x1536-width']}w,
                            ${size['2048x2048']} ${size['2048x2048-width']}w
                        `;
                        return (
                            <Col6 key={index}>
                                <Figure>
                                    <StyledImage
                                        alt={item.image.alt}
                                        src={item.image.url}
                                        srcSet={srcset}
                                        width={size['large-width']}
                                        height={size['large-height']}
                                    />
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
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const FigCaption = styled.figcaption`
    margin-top: 13px;
    text-align: right;
    font-size: ${TokenFontSizeDesktop0};
    line-height: ${TokenFontLineHeightDesktop0};
    @media all and (max-width: 991px) {
        font-size: ${TokenFontSizeTablet0};
        line-height: ${TokenFontLineHeightTablet0};
    }
    @media all and (max-width: 767px) {
        font-size: ${TokenFontSizeMobile0};
        line-height: ${TokenFontLineHeightMobile0};
    }
`;