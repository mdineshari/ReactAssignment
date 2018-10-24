import React from 'react';
import {Card, Row, Col, Tag} from 'antd';

class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.getJobStructure = this.getJobStructure.bind(this);    
    }
    getJobStructure() {
        var jobs = [];
        this.props.jobs.forEach( (ele,key) => {
            var Skills = [];
            ele.job_skills.split(',').forEach((e,k) => {
                Skills.push(<Tag key={k}>{e}</Tag>);                
            });
            var job = (
                <Card>
                    <Row>
                        <Col span={12}>
                            <h4>{ele.job_title} &nbsp; <span className={ele.job_availability}>{ele.job_availability}</span></h4>
                        </Col>
                        <Col span={4}>
                        </Col>
                        <Col span={8}>
                            ${ele.job_price}/hr
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <p>Epic Coders &nbsp; {ele.job_location}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <p>Reply Rate: {ele.job_replyRate}%</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}></Col>
                    </Row>
                    <Row>
                        <Col span={24}>{ele.job_description}</Col>
                    </Row>
                    <Row>
                        <Col span={24}></Col>
                    </Row>
                    <Row>
                        <Col span={24}>{Skills}</Col>
                    </Row>
                </Card>
            )
            jobs.push(job)
        });  
        return jobs;
    }
    render() {
        var all_jobs = this.getJobStructure();
        return(
            <div>{all_jobs}</div>
        )
    }
}

export default ResultCard;