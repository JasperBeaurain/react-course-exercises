import React from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container.component";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div
            className={styles.header}
        >
            <Container noPadding>
                <h1>React TRM</h1>
                <div className={styles.nav}>
                    <NavLink
                        to="/"
                        exact={true}
                        activeClassName={styles.active}
                    >
                        <span>Overview Days</span>
                    </NavLink>
                    <NavLink
                        to="/report"
                        exact={true}
                        activeClassName={styles.active}
                    >
                        <span>Report</span>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
};

export default Header;