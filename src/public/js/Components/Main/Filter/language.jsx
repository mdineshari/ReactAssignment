import React from 'react';
import {Card,Select} from 'antd';


const Option = Select.Option;

class Language extends React.Component {
    constructor(props) {
        super(props);
        this.getJobLanguage = this.getJobLanguage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(method,value) {
        this.props.handleChange(method,value);
    }
    getJobLanguage() {
        var options=[];
        this.props.jobLanguage.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_lang = this.getJobLanguage();
        return (
            <Card
                title="Languages"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder=""
                    onChange={(e) => this.handleChange('language', e)}
                >
                    {job_lang}
                </Select>
            </Card>        )
    }
}

export default Language;