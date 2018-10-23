import React from 'react';
import {Card, Input} from 'antd';

const {TextArea} = Input;

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                title="Skills"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                <TextArea placeholder = '' autosize/>
            </Card>
        )
    }
}

export default Skills;