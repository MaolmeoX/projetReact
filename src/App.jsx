import React, {Component} from "react";
import "./App.css";
import Clock from "./components/Clock";

function MyComponent(props) {
    const myStyle = {
        backgroundColor: 'yellow',
        color: props.color
    };
    return <strong style={myStyle}>{props.content}</strong>;
}

class App extends Component {
    render() {
        const items = [1, 2, 3].map((val, key) => <li key={key}>{val}</li>);
        const username = 'Ricky';
        return (
            <div className="App">
                <h1>Hello {username}, World!</h1>
                <ul>
                    {items}
                </ul>
                <MyComponent color="red" content="Super !"/>
                <Clock/>
            </div>
        );
    }
}

export default App;