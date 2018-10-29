import React from 'react';
import {Card, Slider, InputNumber, Checkbox} from 'antd';


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: [0,100]
        }
        this.onChange = this.onChange.bind(this);
        this.onMaxChange = this.onMaxChange.bind(this);
        this.onMinChange = this.onMinChange.bind(this);
        this.checkBoxHandler = this.checkBoxHandler.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }
    onMinChange(value) {
        this.setState((prevState, props) => ({
            inputValue: [value?value:0,prevState.inputValue[1]]
        }));
        this.props.handleChange('job_price',[value,this.state.inputValue[1]]);
    }
    onMaxChange(value) {
        this.setState((prevState, props) => ({
            inputValue: [prevState.inputValue[0],value?value:0]
        }));
        this.props.handleChange('job_price',[this.state.inputValue[0],value]);
    }
    onChange(value) {
        this.setState({
          inputValue: value,
          checked: false
        });
        this.props.handleChange('job_price',value);
    }
    clearAll() {
        this.setState({
            inputValue:[0,100],
            checked: false
        });
        this.props.handleChange('job_price',[0,100]);
    }
    checkBoxHandler(e) {
        if(e.target.checked) {
            this.props.handleChange('job_price',[true,true]);
        } else {
            this.props.handleChange('job_price',this.state.inputValue);
        }
        this.setState({
            checked: e.target.checked
        });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <Card
                className="filterComponent"
                title="Pay rate/hr ($)"
                extra={<p onClick={this.clearAll}>Clear</p>}
            >
            <InputNumber style={{ marginLeft: 16 }} value={inputValue[0]} onChange={this.onMinChange} />
            <InputNumber style={{ marginLeft: 16 }} value={inputValue[1]} onChange={this.onMaxChange} />
            {inputValue}
            <Slider range onChange={this.onChange} value = {this.props.clearAll?[0,100]:inputValue} />
            <Checkbox onChange={this.checkBoxHandler} checked={this.state.checked}>Include Profile without rate</Checkbox>
            </Card>
        )
    }
}

export default Rate;