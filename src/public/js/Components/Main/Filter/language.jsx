import React from 'react';
import {Card,Select} from 'antd';


const Option = Select.Option;

class Language extends React.Component {
    constructor(props) {
        super(props);
        this.getJobLanguage = this.getJobLanguage.bind(this);
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
        this.props.handleChange('job_language',[]);
    }
    handleChange(value) {
        this.setState({
            value
        });
        this.props.handleChange('job_language',value);
    }
    getJobLanguage() {
        let options=[];
        this.props.jobLanguage.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_lang = this.getJobLanguage();
        return (
            <Card
                className="filterComponent"
                title="Languages"
                extra={<p onClick={this.clearAll}>Clear</p>}
            >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder=""
                    onChange={this.handleChange}
                    value={this.props.clearAll?[]:this.state.value}
                >
                    {job_lang}
                </Select>
            </Card>        )
    }
}

export default Language;