import React from "react";
import DaysOverview from "../DaysOverview/DaysOverview.component";
import styles from "../Container/Container.module.scss";
import Header from "../Header/Header.component";
import Container from "../Container/Container.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DayDetail from "../DayDetail/DayDetail.component";
import Report from "../Report/Report.component";

const App: React.FC = () => (
        <BrowserRouter>
            <div className={styles.app}>
                <Header />
                <Container>
                    <Switch>
                        <Route path="/" exact>
                            <DaysOverview />
                        </Route>
                        <Route path="/report" exact>
                            <Report />
                        </Route>
                        <Route path="/day/:id" exact>
                            <DayDetail />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>
);

export default App;