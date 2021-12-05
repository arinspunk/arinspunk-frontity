// File: /packages/my-first-theme/src/components/index.js
import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./List";
import Post from "./Post";
import Page from "./Page";
import Loading from "./Loading";
import Error from "./Error";
import GlobalStyles from "./styles/GlobalStyles";

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    return (
        <>
            <Global styles={GlobalStyles} />
            <Header isPostType={data.isPostType} isPage={data.isPage}>
                <HeaderContent>
                    <h1>arinspunk</h1>
                    <Menu>
                        <Link link="/">Índice</Link>
                        <Link link="/historia">História</Link>
                    </Menu>
                </HeaderContent>
            </Header>
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Page when={data.isPage} />
                    <Page when={data.isDestinations} />
                    <Error when={data.isError} />
                </Switch>
            </Main>
        </>
    );
}

const Header = styled.header`
`;
const HeaderContent = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto;
`;
const Main = styled.main`
    width: 100%;
    max-width: 1480px;
    padding: 0 40px;
    margin: 0 auto;
`;
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    & > a {
        margin-right: 1em;
        color: steelblue;
        text-decoration: none;
    }
`;
const Button = styled.button`
    background: transparent;
    border: none;
    color: #aaa;
    :hover {
        cursor: pointer;
        color: #888;
    }
`;

export default connect(Root);