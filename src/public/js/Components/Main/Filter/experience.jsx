import React from 'react';
import {Card, Select} from 'antd';

const Option = Select.Option;

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.getJobExperience = this.getJobExperience.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.state = {
            value:null
        };
    }
    clearAll() {
        this.setState({
            value:null
        });
        this.props.handleChange('job_experience_level',null);
    }
    handleChange(value) {
        this.setState({
            value
        });
        this.props.handleChange('job_experience_level',value);
    }
    getJobExperience() {
        let options=[];
        this.props.jobExperience.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_experience = this.getJobExperience();

        return (
            <Card className="filterComponent" title="Experience Level" extra={<p onClick={this.clearAll}>Clear</p>} >
                <Select
                    showSearch
                    placeholder="Select your Experience Level"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    onChange={this.handleChange}
                    value={this.props.clearAll?[]:this.state.value}
                    style={{ width: '100%' }}
                >
                    {job_experience}
                </Select> 
            </Card>
        )
    }
}

export default Experience;