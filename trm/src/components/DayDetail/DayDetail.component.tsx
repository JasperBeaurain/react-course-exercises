import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { format } from "date-fns";
import Day from "../../models/Day";
import ButtonRow from "../ButtonRow/ButtonRow.component";
import Button from "../Button/Button";
import TimeInput from "../TimeInput/TimeInput.component";
import ListItem from "../ListItem/ListItem.component";
import TimeRecord from "../../models/TimeRecord";
import styles from "./DayDetail.module.scss";

interface DayDetailProps {
    days: Day[],
    addTimeRecord: (dayId: string, fromTime: string, toTime: string) => void,
    deleteTimeRecord: (dayId: string, timeRecordId: string) => void,
}

const DayDetail: React.FC<DayDetailProps> = ({ days, addTimeRecord, deleteTimeRecord }: DayDetailProps) => {
    const match = useRouteMatch<{id: string}>();
    const dayId = match.params.id;
    const day = days.find(day => day.id === dayId);

    const [fromTime, setFromTime] = useState<string | undefined>(undefined);
    const [toTime, setToTime] = useState<string | undefined>(undefined);

    const onAddButtonClicked = () => {
        if (fromTime && toTime && day?.id) {
            addTimeRecord(day.id, fromTime, toTime)
        }
    };
    const onDeleteButtonClicked = (tr: TimeRecord) => {
        if (day?.id && tr.id) {
            deleteTimeRecord(day.id, tr.id);
        }
    };

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
                    onClick={onAddButtonClicked}
                >
                    Add time record
                </Button>
            </ButtonRow>
            <div className={styles.items}>
                { day.timeRecords.map(timeRecord => (
                    <ListItem text={`${timeRecord.from} - ${timeRecord.to}`}>
                        <Button
                            color="secondary"
                            onClick={() => onDeleteButtonClicked(timeRecord)}
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