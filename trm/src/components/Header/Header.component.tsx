import React from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container.component";

const Header: React.FC = () => {
    return (
        <div
            className={styles.header}
        >
            <Container>
                <h1>React TRM</h1>
                {/*nav*/}
            </Container>
        </div>
    );
};

export default Header;