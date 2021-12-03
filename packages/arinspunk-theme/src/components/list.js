// File: /packages/my-first-theme/src/components/list.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import dayjs from "dayjs";

const List = ({ state }) => {
    const data = state.source.get(state.router.link);
    return (
        <>
            <Items className="list">
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id];
                    const formattedDate = dayjs(post.date).format("YYYY");
                    return (
                        <li key={item.id} className="list__item">
                            <Link link={post.link} className="list__link">
                                {formattedDate} {post.title.rendered}
                            </Link>
                        </li>
                    )
                })}
            </Items>
        </>
    );
}

const Items = styled.ul`
    & {
        list-style: none;
    }
    & a {
        display: block;
        margin: 6px 0;
        font-size: 1.2em;
        color: steelblue;
        text-decoration: none;
    }
`;
const PrevNextNav = styled.div`
    padding-top: 1.5em;
    & > button {
        background: #eee;
        text-decoration: none;
        padding: 0.5em 1em;
        color: #888;
        border: 1px solid #aaa;
        font-size: 0.8em;
        margin-right: 2em;
    }
    & > button:hover {
        cursor: pointer;
    }
`;

export default connect(List);