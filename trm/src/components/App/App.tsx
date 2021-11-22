import React from "react";
import DaysOverview from "../DaysOverview/DaysOverview";
import Counter from "../Counter/Counter.component";
import {Route, Routes} from "react-router-dom";
import Posts from "../Post/Posts.component";
import Home from "../Home/Home.component";
import Header from "../Header/Header.component";


const App: React.FunctionComponent<{}> = () => {

    return (
        <div className="container">
            <Header />
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