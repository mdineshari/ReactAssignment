import React from 'react';
import {Card,Select} from 'antd';


const Option = Select.Option;

class Language extends React.Component {
    constructor(props) {
        super(props);
        this.getJobLanguage = this.getJobLanguage.bind(this);

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
                    onChange={this.handleChange}
                >
                    {job_lang}
                </Select>
            </Card>        )
    }
}

export default Language;