import React from 'react';

type MyProps = {
    name: ''
}


class Welcome extends React.Component <MyProps> {
    render() {
        return (
            <h1>hola {this.props.name}</h1>
        );
    }
}

export default Welcome;

