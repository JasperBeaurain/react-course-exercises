import React from "react";
import DaysOverview from "../DaysOverview/DaysOverview";

class App extends React.Component<{}, {}>{
  render = () => (
    <div>
      <h1>Test application</h1>
      <DaysOverview />
    </div>
  );
}

export default App;