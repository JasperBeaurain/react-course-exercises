import React, { useState } from "react";
import DaysOverview from "../DaysOverview/DaysOverview.component";
import styles from "../Container/Container.module.scss";
import Header from "../Header/Header.component";
import Container from "../Container/Container.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DayDetail from "../DayDetail/DayDetail.component";
import Day from "../../models/Day";
import TimeRecord from "../../models/TimeRecord";
import { v4 as uuidv4 } from "uuid";
import Report from "../Report/Report.component";

const App: React.FC = () => {
    const [days, setDays] = useState<Day[]>([]);

    const addTimeRecord = (dayId: string, fromTime: string, toTime: string) => {
        const newTimeRecord: TimeRecord = { id: uuidv4(), from: fromTime, to: toTime };

        setDays(days.map(day => {
            if (day.id !== dayId) return day;

            return {
                ...day,
                timeRecords: [...day.timeRecords, newTimeRecord],
            };
        }));
    };

    const deleteTimeRecord = (dayId: string, timeRecordId: string) => {
        setDays(days.map(day => {
            if (day.id !== dayId) return day;

            return {
                ...day,
                timeRecords: day.timeRecords.filter(tr => tr.id !== timeRecordId),
            };
        }))
    };

    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Header />
                <Container>
                    <Switch>
                        <Route path="/" exact>
                            <DaysOverview
                                days={days}
                                setDays={setDays}
                            />
                        </Route>
                        <Route path="/report" exact>
                            <Report days={days}/>
                        </Route>
                        <Route path="/day/:id" exact>
                            <DayDetail
                                days={days}
                                addTimeRecord={addTimeRecord}
                                deleteTimeRecord={deleteTimeRecord}
                            />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;