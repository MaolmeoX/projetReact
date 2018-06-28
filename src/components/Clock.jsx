import React from "react";
import "../App.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <div>Il est {this.state.date.toLocaleTimeString()}</div>
    }
}

export default Clock;