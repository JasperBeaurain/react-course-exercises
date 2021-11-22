import React from "react";
import DaysOverview from "../DaysOverview/DaysOverview";
import styles from "./App.module.css";
import Counter from "../Counter/Counter.component";
import {Route, Routes} from "react-router-dom";
import Posts from "../Post/Posts.component";
import Home from "../Home/Home.component";
import Menu from "../Menu/Menu.component";


const App: React.FunctionComponent<{}> = () => {

    return (
        <div className="container">
            <h1 className={styles.title}>Test application</h1>
            <Menu />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/days" element={<DaysOverview />}/>
                <Route path="/counter" element={<Counter />}/>
                <Route path="/posts" element={<Posts />}/>
            </Routes>
        </div>
    );
};

export default App;