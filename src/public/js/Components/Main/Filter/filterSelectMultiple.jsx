import React from 'react';
import {Card,Select} from 'antd';

const Option = Select.Option;

class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.getJobData = this.getJobData.bind(this);
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
        this.props.handleChange(this.props.mdethod,[]);
    }
    handleChange(value) {
        this.setState({
            value
        });
        this.props.handleChange(this.props.mdethod,value);
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
            extra={<p onClick={this.clearAll}>Clear</p>} >
                <Select 
                mode={this.props.mode} 
                style={{ width: '100%' }} 
                onChange={this.handleChange} 
                value={this.props.clearAll?[]:this.state.value}>
                    {job_data}
                </Select>
            </Card>        
        )
    }
}

export default Countries;