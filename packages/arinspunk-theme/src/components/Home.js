// File: /packages/my-first-theme/src/components/Home.js
import React from "react";
import { connect } from "frontity";
import Intro from "./Intro";
import List from "./List";

const Home = () => {
    return (
        <>
            <Intro title="Arquivo" content="Bem-vindas ao arquivo das defuntas Arinspunk. Aqui tendes guardados os nossos osos, aguardando polos vossos." />
            <List />
        </>
    );
}

export default connect(Home);