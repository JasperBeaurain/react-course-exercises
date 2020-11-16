import React, { ReactNode } from "react";
import styles from "./ListItem.module.scss";

interface ListItemProps {
    children: ReactNode,
    text: string,
}

const ListItem: React.FC<ListItemProps> = ({ children, text }: ListItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.textContent}>{ text }</div>
            <div>
                { children }
            </div>
        </div>
    );
};

export default ListItem;