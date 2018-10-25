import React from 'react';
import {Card, Select} from 'antd';

const Option = Select.Option;

class Type extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(method,value) {
        this.props.handleChange(method,value);
    }
    getJobType() {
        var options=[];
        this.props.jobType.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_types = this.getJobType();
        
        return (
            <Card
                title="Job type"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a Job Type"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    onChange={(e) => this.handleChange('type', e)}
                >
                    {job_types}
                </Select> 
            </Card>
        )
    }
}

export default Type;