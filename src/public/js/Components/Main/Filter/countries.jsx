import React from 'react';
import {Card,Select} from 'antd';

const Option = Select.Option;

class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.getJobCountries = this.getJobCountries.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.state = {
            value:[]
        };
    }
    clearAll() {
        this.setState({
            value:[]
        });
        this.props.handleChange('job_location',[]);
    }
    handleChange(value) {
        this.setState({
            value
        });
        this.props.handleChange('job_location',value);
    }
    getJobCountries() {
        let options=[];
        this.props.jobLocation.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_countries = this.getJobCountries();
        return (
            <Card className="filterComponent" title="Countries" extra={<p onClick={this.clearAll}>Clear</p>} >
                <Select mode="multiple" style={{ width: '100%' }} placeholder="" onChange={this.handleChange} value={this.props.clearAll?[]:this.state.value}>
                    {job_countries}
                </Select>
            </Card>        
        )
    }
}

export default Countries;