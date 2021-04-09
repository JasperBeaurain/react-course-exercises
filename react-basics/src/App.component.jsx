import React from "react";
import Child from "./Child.component";
import Counter from "./Counter.component";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <>
                {/*<h1>Hello world!</h1>*/}
                {/*<p>Hey, { this.props.name }</p>*/}
                {/*<Child*/}
                {/*    clickHandler={() => console.log("click received in parent!")}*/}
                {/*/>*/}
                <Counter count={this.state.count} setCount={(newCount) => {
                    this.setState({
                        count: newCount,
                    });
                }}/>
                <p>Current count: {this.state.count}</p>
            </>
        );
    }
}