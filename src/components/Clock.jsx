import React, {Component, Fragment} from "react";
import moment from 'moment';
import 'moment-timezone';

class Clock extends Component {

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
        return (
            <Fragment>
                <h3>{this.props.city}</h3>
                <div>Il est {moment(this.state.date).tz(this.props.timezone).format('H:mm:ss')}</div>
            </Fragment>
        );
    }

}

export default Clock;