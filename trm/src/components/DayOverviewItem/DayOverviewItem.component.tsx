import React from "react";
import Day from "../../models/Day";
import { format } from "date-fns"
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import ListItem from "../ListItem/ListItem.component";

interface DayOverviewItemProps {
    day: Day,
    onDeleteDay: (id: string) => void,
}

const DayOverviewItemComponent: React.FC<DayOverviewItemProps> = ({ day, onDeleteDay }: DayOverviewItemProps) => {
    const history = useHistory();

    return (
        <ListItem text={format(day.date, "dd/MM/yyyy")}>
            <Button
                onClick={() => history.push("/day/" + day.id)}
                color="primary"
            >
                Edit
            </Button>
            <Button
                onClick={() => onDeleteDay(day.id)}
                color="secondary"
            >
                Delete
            </Button>
        </ListItem>
    );
};

export default DayOverviewItemComponent;