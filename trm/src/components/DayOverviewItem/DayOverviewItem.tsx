import React from "react";
import Day from "../../models/Day";
import { format } from "date-fns"

interface DayOverviewItemProps {
    day: Day,
    onDeleteDay: (id: string) => void,
}

class DayOverviewItem extends React.Component<DayOverviewItemProps, {}> {

    render() {
        return (
            <li>
                <span>{format(this.props.day.date, "dd/MM/yyyy")}</span>
                <button
                    style={{
                        marginLeft: "1rem",
                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                    }}
                    onClick={() => this.props.onDeleteDay(this.props.day.id)}
                >
                    X
                </button>
            </li>
        );
    }

}

export default DayOverviewItem;