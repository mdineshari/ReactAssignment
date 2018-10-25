import React from 'react';
import {Card, Row, Col, Tag} from 'antd';

class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.getJobStructure = this.getJobStructure.bind(this);    
    }
    getJobStructure() {
        let jobs = [];
        if(this.props.jobs.length > 0 ){
            this.props.jobs.forEach( (ele,key) => {
                let Skills = [];
                ele.job_skills.split(',').forEach((e,k) => {
                    Skills.push(<Tag key={k}>{e}</Tag>);                
                });
                let job = (
                    <Card className="result_card" bordered={false} key={key}>
                        <Row gutter={64}>
                            <Col span={16}>
                                <h4>{ele.job_title} &nbsp; <Tag className={ele.job_availability}>{ele.job_availability}</Tag></h4>
                            </Col>
                            <Col span={4}>
                            </Col>
                            <Col span={4}>
                                <b>${ele.job_price} /hr</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <p><span className="result_coder">Epic Coders</span> &nbsp; <span className="result_location">{ele.job_location}</span><br/>
                                <span className="result_rate">Reply Rate: <b>{ele.job_replyRate}%</b></span></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}></Col>
                        </Row>
                        <Row>
                            <Col span={24} className="result_description">{ele.job_description}<br/><br/>{Skills}</Col>
                        </Row>
                    </Card>
                )
                jobs.push(job)
            });  
        }   
        return jobs;
    }
    render() {
        const all_jobs = this.getJobStructure();
        return(
            <div>{all_jobs}</div>
        )
    }
}

export default ResultCard;