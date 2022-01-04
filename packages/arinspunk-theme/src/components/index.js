// File: /packages/my-first-theme/src/components/index.js
import React from "react";
import { connect, Global, Head } from "frontity";
import GlobalStyles from "./styles/GlobalStyles";
import Switch from "@frontity/components/switch";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Post from "./Post";
import Loading from "./Loading";
import Error from "./Error";
//import { getFigmaObjTree } from './tokens/tokens.js';

const Root = ({ state }) => {
    //getFigmaObjTree('288324-05f7da1b-4544-460a-8993-373b5897bb67','l36FIlsCt77nZ7mdUf8EnJ');
    const data = state.source.get(state.router.link);
    console.log(data.link);
    return (
        <>
            <Head>
                <title>Arinspunk - Arquivo</title>
                <meta
                    name="description"
                    content="O arquivo das Arinspunk"
                />
            </Head>
            <Global styles={GlobalStyles} />
            <Header />
            <Switch>
                <Loading when={data.isFetching} />
                <Home when={data.isArchive} />
                <Post when={data.isPostType} />
                <Error when={data.isError} />
            </Switch>
            <Footer />
        </>
    );
}

export default connect(Root);