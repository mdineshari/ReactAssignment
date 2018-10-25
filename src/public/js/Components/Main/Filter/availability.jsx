import React from 'react';
import {Card, Checkbox} from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
    { label: 'Hourly', value: 'hourly' },
    { label: 'Part-time (20 hrs/wk)', value: 'part-time' },
    { label: 'Full-time (40 hrs/wk)', value: 'full-time' },
];

class Availablity extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onCheckAllChange = this.onCheckAllChange.bind(this);
        this.state={
            checkedList: [],
            checkAll: false,
        }
    }
    handleChange(checkedValues) {
        this.setState({
            checkedList: checkedValues,
            checkAll: checkedValues.length === plainOptions.length
        });
        this.props.handleChange('job_availability',checkedValues);
    }
    onCheckAllChange(e) {
        this.setState({
          checkedList: e.target.checked ? plainOptions : [],
          checkAll: e.target.checked
        });
        this.props.handleChange('job_availability',[]);
    }
    render() {
        return (
            <Card className="filterComponent" title="Availability" extra={<span onClick={this.onCheckAllChange}>Clear</span>} style={{ width: 300 }} >
                    <CheckboxGroup className='checkBoxGroup' options={plainOptions} value={this.state.checkedList} onChange={this.handleChange} />
            </Card>
        )
    }
}

export default Availablity;