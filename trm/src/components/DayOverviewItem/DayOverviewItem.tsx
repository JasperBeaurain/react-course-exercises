import React from "react";
import Day from "../../models/Day";
import { format } from "date-fns"
import Button from "../Button/Button";
import styles from "./DayOverviewItem.module.scss";

interface DayOverviewItemProps {
    day: Day,
    onDeleteDay: (id: string) => void,
}

class DayOverviewItem extends React.Component<DayOverviewItemProps, {}> {

    render() {
        return (
            <div className={styles.item}>
                <div className={styles.textContent}>{format(this.props.day.date, "dd/MM/yyyy")}</div>
                <Button
                    onClick={() => this.props.onDeleteDay(this.props.day.id)}
                    color="secondary"
                >
                    X
                </Button>
            </div>
        );
    }

}

export default DayOverviewItem;