// File: /packages/my-first-theme/src/components/Home.js
import React from "react";
import { connect } from "frontity";
import Intro from "./Intro";
import List from "./List";

const Home = ({libraries}) => {
    const Html2React = libraries.html2react.Component;
    return (
        <>
            <Intro title="Arquivo" content={<Html2React html="Bem-vindas ao arquivo das defuntas Arinspunk. Aqui tendes guardados os nossos osos, aguardando polos vossos." />} />
            <List />
        </>
    );
}

export default connect(Home);