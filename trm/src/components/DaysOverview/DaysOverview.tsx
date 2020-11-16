import React, { useState } from "react";
import Day from "../../models/Day";
import DayOverviewItem from "../DayOverviewItem/DayOverviewItem";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "../Datepicker/Datepicker";
import Button from "../Button/Button";
import styles from "./DaysOverview.module.scss";
import ButtonRow from "../ButtonRow/ButtonRow.component";


const DaysOverview: React.FC = () => {
    const [days, setDays] = useState<Day[]>([]);
    const [addDayDate, setAddDayDate] = useState<Date | undefined>(undefined);

    const addDay = (date?: Date) => {
        if(date === undefined) return;

        const newDay = {
            id: uuidv4(),
            date: date,
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
                    <DayOverviewItem
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