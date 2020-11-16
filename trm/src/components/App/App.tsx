import React from "react";
import DaysOverview from "../DaysOverview/DaysOverview";
import styles from "../Container/Container.module.scss";
import Header from "../Header/Header.component";
import Container from "../Container/Container.component";

class App extends React.Component<{}, {}>{
  render = () => (
    <div className={styles.app}>
      <Header />
      <Container>
        <DaysOverview />
      </Container>
    </div>
  );
}

export default App;