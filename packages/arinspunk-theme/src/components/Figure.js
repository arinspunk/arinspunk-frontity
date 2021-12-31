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
                        const srcset =
                            Object.values(item.image.sizes)
                                // Get the url and width of each size.
                                .map((item) => [item.large])
                                // Recude them to a string with the format required by `srcset`.
                                .reduce(
                                    (final, current, index, array) =>
                                        final.concat(
                                            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
                                        ),
                                    ""
                                ) || null;
                        return (
                            <Col6 key={index}>
                                <Figure>
                                    <StyledImage
                                        alt={item.image.alt}
                                        src={item.image.url}
                                        // srcSet={srcset}
                                        width={item.image.sizes['large-width']}
                                        height={item.image.sizes['large-height']}
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