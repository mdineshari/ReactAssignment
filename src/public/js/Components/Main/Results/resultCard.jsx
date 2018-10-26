import React from 'react';
import {List,Tag} from 'antd';

class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.getSkills = this.getSkills.bind(this);
    }
    getSkills(skill) {
        let Skills = [];
        skill.split(',').forEach((e,k) => {
            Skills.push(<Tag className="result_skills" key={k}>{e}</Tag>);                
        });
        return Skills;
    }
    render() {
        return(
            <div>
                <List
                    className="resultList"
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 5,
                    }}
                    dataSource={this.props.jobs.length===0?[]:this.props.jobs}
                    renderItem={item => (
                    <List.Item
                        key={item.job_title}
                    >
                        <List.Item.Meta
                        title={<span>{item.job_title} &nbsp; <Tag className={item.job_availability}>{item.job_availability}</Tag><span className="price_right"><b>${item.job_price} /hr</b></span></span>}
                        description={<p><span className="result_coder">Epic Coders</span> &nbsp; <span className="result_location">{item.job_location}</span><br/>
                        <span className="result_rate">Reply Rate: <b>{item.job_replyRate}%</b></span></p>}
                        />
                        
                        {item.job_description}<br/><br/>{this.getSkills(item.job_skills)}
                    </List.Item>)} 
                />
            </div>
        )
    }
}

export default ResultCard;