import React from "react";
import { parse } from "date-fns";
import styles from "./Datepicker.module.scss";

interface DatepickerProps {
    onChange: (date: Date) => void,
}

class Datepicker extends React.Component<DatepickerProps> {
    updateValue = (dateString: string) => {
        const dateValue = parse(dateString, "yyyy-MM-dd", new Date());
        this.props.onChange(dateValue);
    }

    render() {
        return (
            <input
                className={styles.datepicker}
                type="date"
                onChange={event => this.updateValue(event.target.value)}
            />
        );
    }
}

export default Datepicker;