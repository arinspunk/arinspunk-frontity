// File: /packages/my-first-theme/src/components/pre-next-nav.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const NavFooter = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrlFooter}/`).items;
    return (
        <NavContainer>
            <NavList>
                {items.map((item) => {
                    if (!item.child_items) {
                        return (
                            <NavItem key={item.ID}>
                                {item.target === "_blank" ? (
                                    <a href={item.url} target={item.target} rel="noopener">
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link link={item.url} target={item.target}>
                                        {item.title}
                                    </Link>
                                )}
                            </NavItem>
                        );
                    } else {
                        const childItems = item.child_items;
                        return (
                            <NavItemWithChild key={item.ID}>
                                <NavItem>
                                    <Link link={item.url}>
                                        {item.title}
                                    </Link>
                                </NavItem>
                                <ChildMenu>
                                    {childItems.map((childItem) => {
                                        return (
                                            <NavItem key={childItem.ID}>
                                                <Link link={childItem.url}>
                                                    {childItem.title}
                                                </Link>
                                            </NavItem>
                                        );
                                    })}
                                </ChildMenu>
                            </NavItemWithChild>
                        );
                    }
                })}
            </NavList>
        </NavContainer>
    );
};

export default connect(NavFooter);

const NavContainer = styled.nav`
`;

const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    @media all and (max-width: 767px) {
        flex-direction: column;
        line-height: 1.875;
    }
`;

const NavItem = styled.li`
    margin: 0 40px 0 0;
    & > a {
        display: block;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        &[aria-current="page"] {
            text-decoration: underline;
        }
    }
`;