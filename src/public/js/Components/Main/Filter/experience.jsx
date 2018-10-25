import React from 'react';
import {Card, Select} from 'antd';

const Option = Select.Option;

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.getJobExperience = this.getJobExperience.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(method,value) {
        this.props.handleChange(method,value);
    }
    getJobExperience() {
        var options=[];
        this.props.jobExperience.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_experience = this.getJobExperience();
        
        return (
            <Card
                title="Experience Level"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select your Experience Level"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    onChange={(e) => this.handleChange('experience', e)}
                >
                    {job_experience}
                </Select> 
            </Card>
        )
    }
}

export default Experience;