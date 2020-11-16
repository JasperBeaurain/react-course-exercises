import React, { ReactNode } from "react";
import styles from "./ButtonRow.module.scss";

interface ButtonRowProps {
    children?: ReactNode,
}

const ButtonRow: React.FC<ButtonRowProps> = ({ children }: ButtonRowProps) => {
    return (
        <div className={styles.buttonRow}>
            { children }
        </div>
    );
};

export default ButtonRow;