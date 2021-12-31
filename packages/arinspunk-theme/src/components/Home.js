// File: /packages/my-first-theme/src/components/Home.js
import React from "react";
import { connect } from "frontity";
import Intro from "./Intro";
import List from "./List";

const Home = () => {
    return (
        <>
            <Intro title="Index" content="Considero a vida uma estalagem onde tenho que me demorar." />
            <List />
        </>
    );
}

export default connect(Home);