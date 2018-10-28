import React from 'react';
import {Card, Select} from 'antd';

const Option = Select.Option;

class FilterSelectSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.state = {
            value:null
        };
        this.getJobData = this.getJobData.bind(this);
    }
    clearAll() {
        this.setState({
            value:null
        });
        this.props.handleChange(this.props.method,null);
    }
    handleChange(value) {
        this.setState({
            value
        });
        this.props.handleChange(this.props.method,value);
    }
    getJobData() {
        let options=[];
        this.props.filterObject[this.props.method].forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_data = this.getJobData();
        return (
            <Card
                className="filterComponent"
                title={this.props.cardTitle}
                extra={<span onClick={this.clearAll}>Clear</span>}
            >
                    <Select
                        showSearch
                        mode = {this.props.mode}
                        placeholder={"Select a " + this.props.cardTitle}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        onChange={this.handleChange}
                        value={this.props.clearAll?[]:this.state.value}
                        style={{ width: '100%' }}
                    >
                        {job_data}
                    </Select>

            </Card>
        )
    }
}

export default FilterSelectSearch;