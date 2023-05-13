import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(props) {
    return <div>
        <h1>Hello {props.name}</h1>
    </div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Greeting name="Hakan"></Greeting>
        <p>Today is {`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`}</p>
    </div>
);


