import React, { useState } from "react";
import Day from "../../models/Day";
import DayOverviewItemComponent from "../DayOverviewItem/DayOverviewItem.component";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "../Datepicker/Datepicker.component";
import Button from "../Button/Button";
import styles from "./DaysOverview.module.scss";
import ButtonRow from "../ButtonRow/ButtonRow.component";

interface DaysOverviewProps {
    days: Day[],
    setDays: (days: Day[]) => void,
}

const DaysOverview: React.FC<DaysOverviewProps> = ({ days, setDays }: DaysOverviewProps) => {

    const [addDayDate, setAddDayDate] = useState<Date | undefined>(undefined);

    const addDay = (date?: Date) => {
        if(date === undefined) return;

        const newDay = {
            id: uuidv4(),
            date: date,
            timeRecords: [],
        };

        setDays([...days, newDay]);
    }

    const deleteDay = (id: string) => {
        setDays(days.filter(day => day.id !== id));
    }

    return (
        <>
            <h2>Days overview</h2>
            <ButtonRow>
                <Datepicker
                    onChange={setAddDayDate}
                />
                <Button
                    disabled={addDayDate === undefined}
                    onClick={() => addDay(addDayDate)}
                >
                    Add day
                </Button>
                <Button
                    onClick={() => addDay(new Date())}
                >
                    Add today
                </Button>
            </ButtonRow>
            <div className={styles.items}>
                { days.map(day => (
                    <DayOverviewItemComponent
                        key={day.id}
                        day={day}
                        onDeleteDay={deleteDay}
                    />
                ))}
            </div>
        </>
    );
}


export default DaysOverview;