import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
    disabled?: boolean,
    color?: "primary" | "secondary",
}

class Button extends React.Component<ButtonProps, {}> {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                disabled={this.props.disabled === true}
                className={classNames(styles.button, styles[this.props.color || "primary"], {
                    [styles.disabled]: this.props.disabled,
                })}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;