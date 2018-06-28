import React, {Component} from "react";

class ColorPicker extends Component {

    render() {
        return (<input type="color" onChange={e => this.props.colorChange(e.target.value)}/>);
    }

}

export default ColorPicker;