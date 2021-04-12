import React from "react";
import Day from "../../models/Day";
import { format } from "date-fns"
import Button from "../Button/Button";
import styles from "./DayOverviewItem.module.scss";
import {remove} from "../../store/trm.slice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";

interface DayOverviewItemProps {
    day: Day,
}

const DayOverviewItem: React.FC<DayOverviewItemProps> = ({ day }: DayOverviewItemProps) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={styles.item}>
            <div className={styles.textContent}>{format(day.date, "dd/MM/yyyy")}</div>
            <Button
                onClick={() => dispatch(remove(day.id))}
                color="secondary"
            >
                X
            </Button>
        </div>
    );
}

export default DayOverviewItem;