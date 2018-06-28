import React, { Component} from "react";
import "./App.css";
import Clock from "./components/Clock";
import ColorPicker from "./components/ColorPicker";

function MyComponent(props) {
    const style = {
        color: props.color,
        fontSize: props.fontSize
    };
    return (<strong style={style}>{props.content}</strong>);
}

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {nbClick: 0, color: 'lightgrey'};
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({nbClick: this.state.nbClick + 1});
    }

    render(){

        const username = 'Ricky';
        const items = [1, 2, 3].map((val, key) => <li key={key}>{val}</li>);
        const theme = 'dark';
        const style = {
            backgroundColor: this.state.color,
            fontSize: '2em'
        };

        return(
            <div className={'App ' + theme} style={style}>
                <h1>Hello, {username}!</h1>
                <button onClick={e => this.handleClick(e)}>Click</button>
                <div>{this.state.nbClick}</div>
                <ColorPicker colorChange={(color) => this.setState({color: color})}/>
                <ul>
                    {items}
                </ul>
                <MyComponent color='red' fontSize='2em' content='Test'/>
                <Clock city='Paris' timezone='Europe/Paris'/>
                <Clock city='NY' timezone='America/New_York'/>
                <Clock city='Tokyo' timezone='Asia/Tokyo'/>
            </div>
        );
    }
}

export default App;