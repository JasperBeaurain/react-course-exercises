import React from "react";
import { parse } from "date-fns";
import styles from "./Datepicker.module.scss";

interface DatepickerProps {
    onChange: (date: Date) => void,
}

const Datepicker: React.FC<DatepickerProps> = ({ onChange }: DatepickerProps) => {
    const updateValue = (dateString: string) => {
        const dateValue = parse(dateString, "yyyy-MM-dd", new Date());
        onChange(dateValue);
    }

    return (
        <input
            className={styles.datepicker}
            type="date"
            onChange={event => updateValue(event.target.value)}
        />
    );
}

export default Datepicker;