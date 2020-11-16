import React, { useDebugValue } from "react";
import Day from "../../models/Day";
import { format } from "date-fns"
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import ListItem from "../ListItem/ListItem.component";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteDay } from "../../store/days.actions";

interface DayOverviewItemProps {
    day: Day,
}

const DayOverviewItemComponent: React.FC<DayOverviewItemProps> = ({ day }: DayOverviewItemProps) => {
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();

    return (
        <ListItem text={format(day.date, "dd/MM/yyyy")}>
            <Button
                onClick={() => history.push("/day/" + day.id)}
                color="primary"
            >
                Edit
            </Button>
            <Button
                onClick={() => dispatch(deleteDay(day.id))}
                color="secondary"
            >
                Delete
            </Button>
        </ListItem>
    );
};

export default DayOverviewItemComponent;