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
    }
    handleChange(checkedValues) {
        this.props.handleChange('availability',checkedValues);
      }
    render() {
        return (
            <Card
                title="Availability"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                    <CheckboxGroup className='checkBoxGroup' options={plainOptions} onChange={this.handleChange} />
            </Card>
        )
    }
}

export default Availablity;