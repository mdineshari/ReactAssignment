import React from 'react';
import {Card,Select} from 'antd';


const Option = Select.Option;

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.getJobSkills = this.getJobSkills.bind(this);
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
        this.props.handleChange('job_skills',[]);
    }
    handleChange(value) {
        this.setState({
            value
        });
        this.props.handleChange('job_skills',value);
    }
    getJobSkills() {
        let options=[];
        this.props.jobSkills.forEach( (ele,key) => {
            options.push(<Option value={ele} ref={ele} key={key}>{ele}</Option>);
        });
        return options;
    }
    render() {
        const job_skills = this.getJobSkills();
        return (
            <Card
                title="Skills"
                extra={<span onClick={this.clearAll}>Clear</span>}
                style={{ width: 300 }}
            >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder=""
                    onChange={this.handleChange}
                    allowClear={true}
                    value={this.state.value}
                >
                    {job_skills}
                </Select>
            </Card>        )
    }
}

export default Skills;