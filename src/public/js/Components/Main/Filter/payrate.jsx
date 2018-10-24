import React from 'react';
import {Card, Slider, InputNumber, Checkbox} from 'antd';


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1
        }
        this.onChange = this.onChange.bind(this);
        this.checkBoxHandler = this.checkBoxHandler.bind(this);
    }
    checkBoxHandler(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    onChange(value) {
        this.setState({
          inputValue: value,
        });
    }
    render() {
        const { inputValue } = this.state;
        return (
            <Card
                title="Pay rate/hr ($)"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
            <InputNumber min={1} max={20} style={{ marginLeft: 16 }} value={inputValue} onChange={this.onChange} />
                <Slider min={1} max={20} onChange={this.onChange} value={typeof inputValue === 'number' ? inputValue : 0} />
                <Checkbox onChange={this.checkBoxHandler}>Include Profile without rate</Checkbox>
            </Card>
        )
    }
}

export default Rate;