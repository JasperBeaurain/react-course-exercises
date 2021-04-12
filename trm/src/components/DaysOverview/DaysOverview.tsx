import React, { useState } from "react";
import Day from "../../models/Day";
import DayOverviewItem from "../DayOverviewItem/DayOverviewItem";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "../Datepicker/Datepicker";
import Button from "../Button/Button";
import styles from "./DaysOverview.module.scss";
import ButtonRow from "../ButtonRow/ButtonRow.component";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store";
import {addDayAction, daysSelector, dayToAddSelector, removeDayAction, setDayToAddAction} from "../../store/trm.slice";


const DaysOverview: React.FC = () => {
    const dayToAdd = useSelector(dayToAddSelector);
    const addDayDate = dayToAdd ? new Date(dayToAdd) : undefined;
    const dispatch = useDispatch<AppDispatch>();

    const addDay = (date?: Date) => {
        if(date === undefined) return;

        dispatch(addDayAction({
            id: uuidv4(),
            date: date,
        }));
    }

    return (
        <>
            <h2>Days overview</h2>
            <ButtonRow>
                <Datepicker
                    onChange={day => dispatch(setDayToAddAction(day.valueOf()))}
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
                { useSelector(daysSelector).map(day => (
                    <DayOverviewItem
                        key={day.id}
                        day={day}
                    />
                ))}
            </div>
        </>
    );
}


export default DaysOverview;