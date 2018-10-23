import React from 'react';
import {Card, Checkbox} from 'antd';


class Availablity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                title="Availability"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                <Checkbox>Hourly</Checkbox>
                <br /><br />
                <Checkbox>Part-time (20 hrs/wk)</Checkbox>
                <br /><br />
                <Checkbox>Full-time (40 hrs/wk)</Checkbox>
                <br /><br />
            </Card>
        )
    }
}

export default Availablity;