import React from "react";
import styles from "./TimeInput.module.scss";

interface TimeInputProps {
    onChange: (time: string) => void,
}

const TimeInput: React.FC<TimeInputProps> = ({ onChange }: TimeInputProps) => {
    return (
        <input
            type="time"
            className={styles.timeInput}
            onChange={event => onChange(event.target.value)}
        />
    );
};

export default TimeInput;