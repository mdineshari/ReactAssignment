import React from 'react';
import {Card,Select} from 'antd';


const Option = Select.Option;

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.getJobSkills = this.getJobSkills.bind(this);
    }
    getJobSkills() {
        var options=[];
        this.props.jobSkills.forEach( (ele,key) => {
            options.push(<Option value={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_skills = this.getJobSkills();
        return (
            <Card
                title="Skills"
                extra={<a href="#">Clear</a>}
                style={{ width: 300 }}
            >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder=""
                    onChange={this.handleChange}
                >
                    {job_skills}
                </Select>
            </Card>        )
    }
}

export default Skills;