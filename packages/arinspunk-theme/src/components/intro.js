// File: /packages/my-first-theme/src/components/intro.js
import React from "react";
import { connect } from "frontity";
import styles from './Intro.module.css'; 

const Intro = (props) => {
    return (
        <div className={styles.intro}>
            <h1 className={styles}>
                {props.title}
            </h1>
            <div className={styles['intro__content']}>
                {props.content}
            </div>
        </div>
    );
}

export default connect(Intro);