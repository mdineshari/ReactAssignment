import React from 'react';
import {Card,Select} from 'antd';


const Option = Select.Option;

class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.getJobCountries = this.getJobCountries.bind(this);

    }
    getJobCountries() {
        var options=[];
        this.props.jobLocation.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_countries = this.getJobCountries();
        return (
            <Card
                title="Countries"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder=""
                    onChange={this.handleChange}
                >
                    {job_countries}
                </Select>
            </Card>        )
    }
}

export default Countries;