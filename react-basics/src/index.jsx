import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <p>We will build our app here!</p>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
