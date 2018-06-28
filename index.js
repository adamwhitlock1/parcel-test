import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'



const App = () => (

    <h1>Hey from React!</h1>
);

const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv);