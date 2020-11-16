import React from "react";
import Day from "../../models/Day";
import DayOverviewItem from "../DayOverviewItem/DayOverviewItem";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "../Datepicker/Datepicker";
import Button from "../Button/Button";
import styles from "./DaysOverview.module.scss";
import ButtonRow from "../ButtonRow/ButtonRow.component";

interface DaysOverviewProps {

}

interface DaysOverviewState {
    days: Day[],
    addDayDate?: Date,
}

class DaysOverview extends React.Component<DaysOverviewProps, DaysOverviewState> {
    constructor(props: DaysOverviewProps) {
        super(props);
        this.state = {
            days: [],
        };
    }

    addDay = (date?: Date) => {
        if(date === undefined) return;

        this.setState((oldState) => {
            const newDay = {
                id: uuidv4(),
                date: date,
            };

            return {
                days: [...oldState.days, newDay],
            };
        });
    }

    deleteDay = (id: string) => {
        this.setState((oldState) => ({
            days: oldState.days.filter(day => day.id !== id),
        }));
    }

    selectAddDayDate = (date: Date) => {
        this.setState({
            addDayDate: date,
        });
    }

    render() {
        return (
            <>
                <h2>Days overview</h2>
                <ButtonRow>
                    <Datepicker
                        onChange={this.selectAddDayDate}
                    />
                    <Button
                        disabled={this.state.addDayDate === undefined}
                        onClick={() => this.addDay(this.state.addDayDate)}
                    >
                        Add day
                    </Button>
                    <Button
                        onClick={() => this.addDay(new Date())}
                    >
                        Add today
                    </Button>
                </ButtonRow>
                <div className={styles.items}>
                    { this.state.days.map(day => (
                        <DayOverviewItem
                            key={day.id}
                            day={day}
                            onDeleteDay={this.deleteDay}
                        />
                    ))}
                </div>
            </>
        );
    }
}


export default DaysOverview;