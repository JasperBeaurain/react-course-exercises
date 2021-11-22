import React, {useState} from "react";
import Day from "../../models/Day";
import DayOverviewItem from "../DayOverviewItem/DayOverviewItem";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "../Datepicker/Datepicker";
import styles from "./DaysOverview.module.css";

interface DaysOverviewProps {
}

const DaysOverview: React.FunctionComponent<DaysOverviewProps> = () => {
    const [days, setDays] = useState<Day[]>([]);
    const [addDayDate, setAddDayDate] = useState<Date>();

    const addDay = (date?: Date) => {
        if(date === undefined) return;

        const newDay = {
            id: uuidv4(),
            date: date,
        };

        setDays( [...days, newDay]);
    }

    return (
        <div>
            <h3 className={styles.title}>Days overview</h3>
            <button
                onClick={() => addDay(new Date())}
                style={{
                    marginRight: "1rem"
                }}
            >
                Add today
            </button>
            <Datepicker
                onChange={date => setAddDayDate(date)}
            />
            <button
                disabled={addDayDate === undefined}
                onClick={() => addDay(addDayDate)}
            >
                Add day
            </button>
            <ul>
                { days.map(day => (
                    <DayOverviewItem
                        key={day.id}
                        day={day}
                        onDeleteDay={id => setDays(days.filter(day => day.id !== id))}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DaysOverview;