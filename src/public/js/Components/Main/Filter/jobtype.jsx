import React from 'react';
import {Card, Select} from 'antd';

const Option = Select.Option;

class Type extends React.Component {
    constructor(props) {
        super(props);
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
        this.props.handleChange('job_type',null);
    }
    handleChange(value) {
        this.setState({
            value
        });
        this.props.handleChange('job_type',value);
    }
    getJobType() {
        let options=[];
        this.props.jobType.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_types = this.getJobType();
        return (
            <Card
                className="filterComponent"
                title="Job type"
                extra={<span onClick={this.clearAll}>Clear</span>}
            >
                <Select
                    showSearch
                    placeholder="Select a Job Type"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    onChange={this.handleChange}
                    value={this.props.clearAll?[]:this.state.value}
                    style={{ width: '100%' }}
                >
                    {job_types}
                </Select> 
            </Card>
        )
    }
}

export default Type;