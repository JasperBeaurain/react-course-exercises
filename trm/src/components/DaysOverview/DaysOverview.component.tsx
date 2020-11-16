import React, { useState } from "react";
import DayOverviewItemComponent from "../DayOverviewItem/DayOverviewItem.component";
import Datepicker from "../Datepicker/Datepicker.component";
import Button from "../Button/Button";
import styles from "./DaysOverview.module.scss";
import ButtonRow from "../ButtonRow/ButtonRow.component";
import { useDispatch, useSelector } from "react-redux";
import { days as daysSelector } from "../../store/days.slice";
import { AppDispatch } from "../../store/store";
import { addDay } from "../../store/days.actions";

const DaysOverview: React.FC = () => {
    const days = useSelector(daysSelector);
    const dispatch = useDispatch<AppDispatch>();
    const [addDayDate, setAddDayDate] = useState<Date | undefined>(undefined);

    return (
        <>
            <h2>Days overview</h2>
            <ButtonRow>
                <Datepicker
                    onChange={setAddDayDate}
                />
                <Button
                    disabled={addDayDate === undefined}
                    onClick={() => addDayDate && dispatch(addDay(addDayDate))}
                >
                    Add day
                </Button>
                <Button
                    onClick={() => dispatch(addDay(new Date()))}
                >
                    Add today
                </Button>
            </ButtonRow>
            <div className={styles.items}>
                { days.map(day => (
                    <DayOverviewItemComponent
                        key={day.id}
                        day={day}
                    />
                ))}
            </div>
        </>
    );
}


export default DaysOverview;