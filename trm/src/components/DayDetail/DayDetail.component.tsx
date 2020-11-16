import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { format } from "date-fns";
import ButtonRow from "../ButtonRow/ButtonRow.component";
import Button from "../Button/Button";
import TimeInput from "../TimeInput/TimeInput.component";
import ListItem from "../ListItem/ListItem.component";
import styles from "./DayDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { days as daysSelector } from "../../store/days.slice";
import { addTimeRecord, deleteTimeRecord } from "../../store/days.actions";
import { AppDispatch } from "../../store/store";

const DayDetail: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const days = useSelector(daysSelector);
    const match = useRouteMatch<{id: string}>();
    const dayId = match.params.id;
    const day = days.find(day => day.id === dayId);

    const [fromTime, setFromTime] = useState<string | undefined>(undefined);
    const [toTime, setToTime] = useState<string | undefined>(undefined);

    if (day === undefined) {
        return (<>No day found with that id</>);
    }

    return (
        <>
            <h2>Day detail: {format(day.date, "dd/MM/yyyy")}</h2>
            <ButtonRow>
                <label>From:</label>
                <TimeInput onChange={setFromTime} />
                <label>To:</label>
                <TimeInput onChange={setToTime} />
                <Button
                    disabled={!fromTime || !toTime}
                    onClick={() => fromTime && toTime && day?.id && dispatch(addTimeRecord(day.id, fromTime, toTime))}
                >
                    Add time record
                </Button>
            </ButtonRow>
            <div className={styles.items}>
                { day.timeRecords.map(timeRecord => (
                    <ListItem text={`${timeRecord.from} - ${timeRecord.to}`}>
                        <Button
                            color="secondary"
                            onClick={() => day?.id && timeRecord.id && dispatch(deleteTimeRecord(day.id, timeRecord.id))}
                        >
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </div>
        </>
    );
};

export default DayDetail;