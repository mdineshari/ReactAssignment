import React from 'react';
import FilterComponent from './Filter/filter.component.jsx';
import ResultComponent from './Results/results.component.jsx';
import SideBarComponent from './Sidebar/sidebar.component.jsx';
import {Layout, Row, Col} from 'antd';
const Content = Layout.Content;
import axios from 'axios';

import './main.less';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobSkills: [],
            jobs:[],
            filteredJobs: [],
            jobAvailability: [],
            jobType: [],
            jobPrice: [],
            jobExperience: [],
            jobLanguage: [],
            jobLocation: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get('/api/getJobSkills').then(res => {
            var jobSkills = [];
            var jobAvailability = [];
            var jobType = [];
            var jobPrice = [];
            var jobExperience = [];
            var jobLanguage = [];
            var jobLocation = [];
            this.setState({
                jobs: res.data
            });
            res.data.map( (ele,key) => {
                ele.job_skills.split(',').map( (e,k) => {
                    if(jobSkills.indexOf(e) < 0) {
                        jobSkills.push(e);
                    }
                });
                if(jobAvailability.indexOf(ele.job_availability) < 0) {
                    jobAvailability.push(ele.job_availability);
                }
                if(jobType.indexOf(ele.job_type) < 0 && ele.job_type != null) {
                    jobType.push(ele.job_type);
                }
                if(jobPrice.indexOf(ele.job_price) < 0 && ele.job_price != null) {
                    jobPrice.push(ele.job_price);
                }
                if(jobExperience.indexOf(ele.job_experience_level) < 0 && ele.job_experience_level != null) {
                    jobExperience.push(ele.job_experience_level);
                }
                if(jobLanguage.indexOf(ele.job_language) < 0 && ele.job_language != null) {
                    jobLanguage.push(ele.job_language);
                }
                if(jobLocation.indexOf(ele.job_location) < 0 && ele.job_location != null) {
                    jobLocation.push(ele.job_location);
                }

            });
            this.setState({jobSkills});
            this.setState({jobAvailability});
            this.setState({jobType});
            this.setState({jobPrice});
            this.setState({jobExperience});
            this.setState({jobLanguage});
            this.setState({jobLocation});
        });
    }
    handleChange(method,value) {
        const filteredJobs = this.state.filteredJobs;
        this.state.jobs.map( (ele,key) => {
            if(method == 'skills') {
                let found = ele.job_skills.split(',').some(r=> value.indexOf(r) >= 0);
                if(found && filteredJobs.indexOf(ele) < 0) {
                    filteredJobs.push(ele);
                }
            }
            if(method == 'availability') {
                let found = value.indexOf(ele.job_availability) >= 0;
                if(found && filteredJobs.indexOf(ele) < 0) {
                    filteredJobs.push(ele);
                }
            }
            if(method == 'type') {
                let found = value.indexOf(ele.job_type) >= 0;
                if(found && filteredJobs.indexOf(ele) < 0) {
                    filteredJobs.push(ele);
                }
            }
            if(method == 'rate') {
                let found = value.indexOf(ele.job_price) >= 0;
                if(found && filteredJobs.indexOf(ele) < 0) {
                    filteredJobs.push(ele);
                }
            }
            if(method == 'experience') {
                let found = value == ele.job_experience_level;
                if(found && filteredJobs.indexOf(ele) < 0) {
                    filteredJobs.push(ele);
                }
            }
            if(method == 'countries') {
                let found = value.indexOf(ele.job_location) >= 0;
                if(found && filteredJobs.indexOf(ele) < 0) {
                    filteredJobs.push(ele);
                }
            }
            if(method == 'language') {
                let found = value.indexOf(ele.job_language) >= 0;
                if(found && filteredJobs.indexOf(ele) < 0) {
                    filteredJobs.push(ele);
                }
            }
        });
        this.setState({
            filteredJobs: filteredJobs
        });
    }

    render() {
        //console.log(this.state.filteredJobs);

        return (
            <Content style={{ padding: '0 50px' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <FilterComponent handleChange={this.handleChange} jobLanguage={this.state.jobLanguage} jobLocation={this.state.jobLocation} jobPrice={this.state.jobPrice} jobExperience={this.state.jobExperience} jobAvailability = {this.state.jobAvailability} jobType={this.state.jobType} jobSkills={this.state.jobSkills}/>
                    </Col>
                    <Col span={12}>
                        <ResultComponent jobs={this.state.filteredJobs} />
                    </Col>
                    <Col span={4}>
                        <SideBarComponent />
                    </Col>
                </Row>
            </Content>

        )
    }
}

export default MainComponent;