import React from 'react';
import {Card,Select} from 'antd';


const Option = Select.Option;

class Skills extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {jobSkills} = this.props;
        const children = [];
        jobSkills.forEach(function(ele,key) {
            children.push(<Option key={ele}>{ele}</Option>);
        });

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
                    {children}
                </Select>
            </Card>        )
    }
}

export default Skills;