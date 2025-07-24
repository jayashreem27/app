import React from "react";
import styles from "./Loader.module.scss";
import loaderImg from "../../assets/loader.gif";

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img src={loaderImg} alt="loading" />
            </div>
        </div>
    );
};

export const Spinner = () => {
    return (
        <div className="--center-all">
            <img src={loaderImg} alt="loading" width={40} />
        </div>
    );
};

export default Loader;
