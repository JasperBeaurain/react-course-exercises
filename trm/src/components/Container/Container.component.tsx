import React, { ReactNode } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

interface ContainerProps {
    children: ReactNode,
    noPadding?: boolean,
}

const Container: React.FC<ContainerProps> = ({ children, noPadding = false }: ContainerProps) => {
    return (
        <div className={classNames(styles.container, {[styles.padding]: !noPadding})}>
            { children }
        </div>
    );
};

export default Container;