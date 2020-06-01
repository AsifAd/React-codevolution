import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <div>Hi Welcome star! {this.props.lang}</div>;
    }
}

export default Welcome;
