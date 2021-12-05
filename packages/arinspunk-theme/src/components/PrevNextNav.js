// File: /packages/my-first-theme/src/components/pre-next-nav.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const PrevNextNav = ({state}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    return (
        <>
            {post.previous && (
                <Link link={post.previous.slug} className="list__link">
                    Prev
                </Link>
            )}
            {post.next && (
                <Link link={post.next.slug} className="list__link">
                    Next
                </Link>
            )}
        </>
    );
}

export default connect(PrevNextNav);